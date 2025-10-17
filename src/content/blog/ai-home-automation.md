---
title: "KI-gesteuerte Home Automation mit Home Assistant & Local LLMs"
description: "Wie ich Tool-Calling nutze, um mein Smart Home mit einem lokalen KI-Agent zu steuern - Privacy-First und ohne Cloud."
date: "2025-10-10"
author: "Marc Wiemann"
tags: ["AI", "Home Automation", "Home Assistant", "IoT", "Smart Home"]
featured: true
---

# KI-gesteuerte Home Automation mit Home Assistant & Local LLMs

In meiner Hausarbeit habe ich untersucht, wie Tool-Calling zur Smart-Home-Steuerung über Home Assistant eingesetzt werden kann. Das Ergebnis: Ein vollständig lokaler KI-Agent, der mein Zuhause versteht und steuert.

## Das Problem mit aktuellen Smart Home Systemen

Traditionelle Smart Home Lösungen haben oft diese Probleme:

❌ **Komplexe Automatisierungen**: YAML-Konfigurationen sind error-prone  
❌ **Unflexibel**: Vordefinierte Szenen und Regeln  
❌ **Cloud-Abhängig**: Alexa, Google Home senden Daten in die Cloud  
❌ **Keine Intelligenz**: Können nicht "denken" oder anpassen  

## Die Lösung: Local LLM + Function Calling

Mit einem lokalen LLM und Function Calling wird das Smart Home wirklich intelligent:

```python
# Beispiel: Natürliche Sprache → Smart Home Aktionen
user_input = "Es wird dunkel draußen und ich schaue einen Film"

# LLM versteht den Context und ruft mehrere Tools auf:
# 1. check_outdoor_brightness() → bestätigt: es ist dunkel
# 2. turn_off_ceiling_lights("living_room")
# 3. turn_on_ambient_lighting("living_room", brightness=20)
# 4. set_tv_mode("cinema")
```

## Architektur

### Komponenten

```
┌─────────────────────────────────────────────┐
│         User Interface (Voice/Text)         │
└────────────────┬────────────────────────────┘
                 │
┌────────────────▼────────────────────────────┐
│     Local LLM (Llama 3.1 / Mistral)        │
│         + Function Calling Engine           │
└────────────────┬────────────────────────────┘
                 │
┌────────────────▼────────────────────────────┐
│          Home Assistant API                 │
│     (Lights, Sensors, Switches, etc.)       │
└────────────────┬────────────────────────────┘
                 │
┌────────────────▼────────────────────────────┐
│      Smart Home Devices (IoT)               │
│   Philips Hue, Shelly, Zigbee, MQTT, ...   │
└─────────────────────────────────────────────┘
```

## Implementation

### Tool-Definitionen für Home Assistant

```python
tools = [
    {
        "name": "control_light",
        "description": "Controls lights in any room. Can turn on/off and set brightness.",
        "parameters": {
            "entity_id": {
                "type": "string",
                "description": "The Home Assistant entity ID, e.g., 'light.living_room'"
            },
            "state": {
                "type": "string",
                "enum": ["on", "off"],
                "description": "Turn the light on or off"
            },
            "brightness": {
                "type": "integer",
                "description": "Brightness level (0-255), optional"
            }
        }
    },
    {
        "name": "get_sensor_state",
        "description": "Gets current state of a sensor (temperature, humidity, motion, etc.)",
        "parameters": {
            "entity_id": {
                "type": "string",
                "description": "The sensor entity ID"
            }
        }
    },
    {
        "name": "set_thermostat",
        "description": "Controls heating/cooling temperature",
        "parameters": {
            "entity_id": {"type": "string"},
            "temperature": {"type": "number"},
            "mode": {
                "type": "string",
                "enum": ["heat", "cool", "auto", "off"]
            }
        }
    }
]
```

### Python Integration

```python
import asyncio
from homeassistant_api import Client
from local_llm import LocalLLM, ToolRegistry

class HomeAssistantAgent:
    def __init__(self, ha_url: str, ha_token: str, model_path: str):
        self.ha_client = Client(ha_url, ha_token)
        self.llm = LocalLLM(model_path)
        self.tool_registry = ToolRegistry()
        
        # Register all tools
        self._register_tools()
    
    def _register_tools(self):
        @self.tool_registry.tool("control_light")
        async def control_light(entity_id: str, state: str, brightness: int = None):
            """Controls a light device"""
            domain, _ = entity_id.split('.')
            
            if state == "on":
                await self.ha_client.trigger_service(
                    domain, "turn_on",
                    entity_id=entity_id,
                    brightness=brightness
                )
            else:
                await self.ha_client.trigger_service(
                    domain, "turn_off",
                    entity_id=entity_id
                )
            
            return {"success": True, "entity": entity_id, "state": state}
        
        @self.tool_registry.tool("get_sensor_state")
        async def get_sensor_state(entity_id: str):
            """Gets sensor state"""
            entity = await self.ha_client.get_entity(entity_id)
            return {
                "entity_id": entity_id,
                "state": entity.state.state,
                "attributes": entity.state.attributes
            }
    
    async def process_command(self, user_input: str):
        """Process natural language command"""
        response = await self.llm.generate(
            prompt=user_input,
            tools=self.tool_registry.get_all_tools(),
            allow_tool_calling=True
        )
        
        return response
```

## Praktische Beispiele

### Beispiel 1: Kontextbewusstes Licht

```plaintext
User: "Ich möchte lesen"

LLM Reasoning:
- Lesen benötigt gutes Licht
- Prüfe aktuelle Helligkeit
- Setze optimale Lesebeleuchtung

Actions:
1. get_sensor_state("sensor.living_room_brightness")
   → Result: 45 lux (zu dunkel)
2. control_light("light.reading_lamp", "on", brightness=255)
3. control_light("light.ceiling", "on", brightness=180)

Response: "Ich habe die Leselampe und Deckenbeleuchtung für dich eingeschaltet."
```

### Beispiel 2: Intelligente Szenarien

```plaintext
User: "Gute Nacht"

LLM versteht: Schlafenszeit-Routine

Actions:
1. control_light("light.living_room", "off")
2. control_light("light.hallway", "off")
3. control_light("light.bedroom", "on", brightness=50)
4. set_thermostat("climate.bedroom", temperature=19, mode="heat")
5. trigger_service("cover.all_blinds", "close")

Response: "Gute Nacht! Alle Lichter sind aus, Schlafzimmer ist auf 19°C eingestellt."
```

### Beispiel 3: Proaktive Vorschläge

```python
# LLM kann auch proaktiv agieren
async def proactive_suggestions():
    # Prüfe Sensoren
    outdoor_temp = await get_sensor_state("sensor.outdoor_temperature")
    indoor_temp = await get_sensor_state("sensor.living_room_temperature")
    
    if outdoor_temp < 10 and indoor_temp < 20:
        # LLM generiert Vorschlag
        suggestion = await llm.generate(
            f"Outdoor: {outdoor_temp}°C, Indoor: {indoor_temp}°C. Should I heat?"
        )
        # "Es ist kalt draußen. Soll ich die Heizung einschalten?"
        return suggestion
```

## C# Alternative für .NET Entwickler

```csharp
public class HomeAssistantAgent
{
    private readonly HttpClient _haClient;
    private readonly ILocalLLM _llm;
    
    public async Task<string> ProcessCommandAsync(string userInput)
    {
        var tools = new List<LLMTool>
        {
            new LLMTool
            {
                Name = "control_light",
                Description = "Controls lights",
                Execute = async (parameters) =>
                {
                    var entityId = parameters["entity_id"].ToString();
                    var state = parameters["state"].ToString();
                    
                    await CallHomeAssistantService(
                        "light",
                        state == "on" ? "turn_on" : "turn_off",
                        entityId
                    );
                    
                    return new { success = true };
                }
            }
        };
        
        var response = await _llm.GenerateWithToolsAsync(userInput, tools);
        return response.Message;
    }
    
    private async Task CallHomeAssistantService(
        string domain, 
        string service, 
        string entityId)
    {
        var endpoint = $"/api/services/{domain}/{service}";
        var content = new { entity_id = entityId };
        
        await _haClient.PostAsJsonAsync(endpoint, content);
    }
}
```

## Hardware Setup

Mein Setup (als Inspiration):

- **Raspberry Pi 4 (8GB)**: Läuft Home Assistant OS
- **Separate Machine**: Läuft das LLM (braucht GPU oder gute CPU)
- **Zigbee Coordinator**: Für Zigbee-Geräte
- **Philips Hue Bridge**: Für Hue-Lampen
- **Shelly Devices**: Für Switches und Relays
- **Verschiedene Sensoren**: Temperatur, Bewegung, Helligkeit

## Vorteile gegenüber Cloud-Lösungen

✅ **Privacy**: Keine Daten verlassen das Netzwerk  
✅ **Latenz**: Sofortige Reaktion (kein Internet-Roundtrip)  
✅ **Reliability**: Funktioniert auch ohne Internet  
✅ **Customization**: Vollständige Kontrolle über Logik  
✅ **No Subscription**: Einmalige Hardware-Investition  

## Herausforderungen

1. **Performance**: LLM braucht gute Hardware
2. **Tool-Beschreibungen**: Müssen sehr präzise sein
3. **Error Handling**: Was wenn ein Device nicht antwortet?
4. **Context Management**: LLM muss Haus-Layout kennen

## Zukunftspläne

Was ich als nächstes baue:

- 🎤 **Voice Integration**: Mit Whisper für lokale Spracherkennung
- 📊 **Predictive Automation**: LLM lernt meine Routinen
- 🤖 **Multi-Agent System**: Verschiedene Agents für verschiedene Räume
- 🧠 **Memory System**: Agent erinnert sich an Präferenzen

## Fazit

Die Kombination aus lokalem LLM, Function Calling und Home Assistant eröffnet völlig neue Möglichkeiten für Smart Homes. Statt starrer Automatisierungen haben wir nun einen intelligenten Agent, der versteht, denkt und handelt.

Und das Beste: **Alles bleibt im eigenen Netzwerk.** Privacy-First, wie es sein sollte.

---

**Code & Setup:**  
Der vollständige Code und Setup-Anleitung sind Teil meiner Hausarbeit. Bei Interesse gerne melden!

🏠 **Happy Automating!**
