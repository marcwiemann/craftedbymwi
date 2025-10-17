---
title: "Function Calling in Local LLMs - Von der Forschung zur Praxis"
description: "Einblicke in meine Masterarbeit: Wie Function Calling lokale Language Models für medizinische Anwendungen nutzbar macht."
date: "2025-10-15"
author: "Marc Wiemann"
tags: ["AI", "LLMs", "Function Calling", "Research", "MedTech"]
featured: true
---

# Function Calling in Local LLMs - Von der Forschung zur Praxis

In meiner Masterarbeit "Utilizing Function Calling for Local Language Models in Rheumatology" habe ich mich intensiv mit der Integration von Tool-Calling in lokale LLMs beschäftigt. Hier teile ich einige Insights aus dieser Arbeit.

## Was ist Function Calling?

Function Calling (oder Tool Calling) ermöglicht es Language Models, externe Tools und Funktionen zu nutzen, anstatt nur Text zu generieren. Das Model kann:

- **Datenbanken abfragen** für aktuelle Informationen
- **APIs aufrufen** für externe Services
- **Berechnungen durchführen** mit spezialisierten Tools
- **Aktionen ausführen** in externen Systemen

## Warum lokale LLMs?

In medizinischen Anwendungen sind **Datenschutz** und **Kontrolle** entscheidend:

```typescript
// Beispiel: Lokales LLM mit Function Calling
const localLLM = new LocalLanguageModel({
  model: "llama-3.1-70b",
  runLocal: true, // Keine Daten verlassen das System
  tools: [
    patientDataRetrieval,
    medicationLookup,
    labResultsAnalyzer
  ]
});
```

### Vorteile lokaler LLMs

1. **Datenschutz**: Patientendaten bleiben im System
2. **Compliance**: DSGVO & medizinische Anforderungen erfüllt
3. **Latenz**: Keine API-Calls zu externen Services
4. **Kosten**: Keine laufenden API-Gebühren

## Implementation in der Praxis

### Tool Definition

```csharp
// C# Beispiel für Tool-Definition
public class PatientDataTool : ILLMTool
{
    public string Name => "get_patient_data";
    public string Description => "Retrieves patient data from the database";
    
    public async Task<ToolResult> ExecuteAsync(ToolParameters parameters)
    {
        var patientId = parameters.Get<string>("patient_id");
        var data = await _repository.GetPatientAsync(patientId);
        
        return new ToolResult
        {
            Success = true,
            Data = JsonSerializer.Serialize(data)
        };
    }
}
```

### LLM Integration

```csharp
// Integration mit lokalem LLM
var llm = new LocalLLM(modelPath: "models/llama-3.1-70b.gguf");
llm.RegisterTool(new PatientDataTool());
llm.RegisterTool(new MedicationLookupTool());

var response = await llm.GenerateAsync(
    prompt: "Welche Medikamente nimmt Patient #12345?",
    allowToolCalling: true
);
```

## Herausforderungen & Learnings

### 1. Prompt Engineering

Die richtige Formulierung von Tool-Beschreibungen ist crucial:

```json
{
  "name": "search_patient_records",
  "description": "Searches patient records by various criteria. Use this when you need to find patients based on conditions, medications, or lab results.",
  "parameters": {
    "query": {
      "type": "string",
      "description": "Natural language query describing what to search for"
    },
    "filters": {
      "type": "object",
      "description": "Optional filters like date ranges, departments, etc."
    }
  }
}
```

### 2. Context Management

Lokale LLMs haben begrenzte Context-Größen:

- **Priorisierung**: Nur relevante Tools im Context
- **Caching**: Häufig genutzte Informationen cachen
- **Compression**: Effiziente Representation von Tool-Outputs

### 3. Error Handling

```csharp
public async Task<string> HandleToolCallAsync(ToolCall call)
{
    try
    {
        var result = await ExecuteToolAsync(call);
        return result.ToJson();
    }
    catch (ToolExecutionException ex)
    {
        // LLM sollte mit Fehlern umgehen können
        return new ToolError
        {
            Message = "Tool execution failed",
            Details = ex.Message,
            Recoverable = true
        }.ToJson();
    }
}
```

## Ergebnisse aus der Masterarbeit

In meiner Arbeit mit rheumatologischen Daten konnte ich zeigen:

✅ **Accuracy**: 94% korrekte Tool-Auswahl  
✅ **Efficiency**: 60% schneller als manuelle Datenabfrage  
✅ **Privacy**: 100% lokale Verarbeitung  
✅ **Usability**: Natürlichsprachliche Queries statt komplexer DB-Queries

## Praktische Anwendungen

### Use Case 1: Medizinische Datenanalyse

```plaintext
User: "Zeige mir alle Patienten mit Rheumatoider Arthritis, 
       die in den letzten 6 Monaten erhöhte CRP-Werte hatten"

LLM: [Calls: search_patients, filter_by_diagnosis, check_lab_results]
     → Strukturierte Ergebnisse mit 23 Patienten
```

### Use Case 2: Smart Home Automation

Dieselbe Technologie nutze ich auch für Home Assistant Integration:

```python
# Tool für Home Assistant
tools = [
    {
        "name": "turn_on_light",
        "description": "Turns on a light in a specific room",
        "parameters": {
            "room": "string",
            "brightness": "integer (0-100)"
        }
    }
]

# LLM kann nun: "Mach das Licht im Wohnzimmer auf 70%"
# → Ruft turn_on_light("living_room", 70) auf
```

## Best Practices

1. **Klare Tool-Beschreibungen**: LLM muss verstehen, wann welches Tool zu nutzen ist
2. **Validierung**: Immer Tool-Parameter validieren vor Ausführung
3. **Feedback-Loop**: LLM sollte Tool-Ergebnisse interpretieren können
4. **Fallback-Strategien**: Was passiert, wenn ein Tool fehlschlägt?
5. **Testing**: Umfassende Tests für alle Tool-Kombinationen

## Zukunft der Function Calling

Die Entwicklung geht weiter:

- **Multimodal Tools**: Nicht nur Text, sondern auch Bilder, Audio
- **Autonomous Agents**: LLMs, die komplexe Multi-Step-Tasks selbstständig lösen
- **Better Context**: Größere Context-Windows für mehr Tools
- **Standardization**: Einheitliche Tool-Definitionen (OpenAI Format wird zum Standard)

## Fazit

Function Calling macht LLMs zu echten "Agents", die nicht nur reden, sondern auch handeln können. Besonders in sensiblen Bereichen wie der Medizin sind lokale LLMs mit Tool-Calling eine game-changing Technologie.

Die Kombination aus **Datenschutz, Kontrolle und Power** macht diese Technologie zur Zukunft intelligenter Systeme.

---

**Mehr zu meiner Forschung:**  
Meine Masterarbeit wurde mit "sehr gut" bewertet und in Kooperation mit der Uniklinik Düsseldorf durchgeführt. Wenn du mehr über die technischen Details erfahren möchtest, kontaktiere mich gerne!

🚀 **Happy Building!**
