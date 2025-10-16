---
title: "TypeScript Tips für React Entwickler"
description: "Praktische TypeScript Patterns und Tipps für besseren React Code mit vollständiger Type-Safety."
date: "2025-08-20"
author: "Marc Wiemann"
tags: ["TypeScript", "React", "JavaScript", "Type Safety"]
featured: false
---

# TypeScript Tips für React Entwickler

TypeScript und React sind ein perfektes Team. Hier sind meine wichtigsten Tips für besseren, type-sicheren Code.

## Component Props richtig typen

### Function Components

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  children,
  onClick 
}: ButtonProps) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
```

### Mit HTML Attributes

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
      {error && <span>{error}</span>}
    </div>
  );
}
```

## Hooks typen

### useState

```typescript
// Type wird inferiert
const [count, setCount] = useState(0);

// Expliziter Type
const [user, setUser] = useState<User | null>(null);

// Mit initialem Wert
interface User {
  id: string;
  name: string;
}

const [user, setUser] = useState<User>({
  id: '1',
  name: 'Marc'
});
```

### Custom Hooks

```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue] as const;
}
```

## Generics nutzen

### Generic Components

```typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage
<List<User>
  items={users}
  renderItem={(user) => <span>{user.name}</span>}
/>
```

## Event Handlers

```typescript
function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ...
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}
```

## Utility Types

```typescript
// Partial - Alle Props optional
type PartialUser = Partial<User>;

// Pick - Bestimmte Props auswählen
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit - Props ausschließen
type UserWithoutId = Omit<User, 'id'>;

// Record - Key-Value Typ
type UserMap = Record<string, User>;
```

## Best Practices

1. **Strikte Checks aktivieren**: `"strict": true` in tsconfig.json
2. **any vermeiden**: Nutze `unknown` wenn Type unbekannt
3. **Type Guards verwenden**: Für Runtime Type Checks
4. **Enums oder Union Types**: Je nach Use Case
5. **Type Inference nutzen**: TypeScript ist sehr gut darin

## Fazit

TypeScript macht React-Code robuster und wartbarer. Mit diesen Patterns kannst du das volle Potential ausschöpfen!
