# 🎯 Guía Rápida: Usando Copilot en Tu Proyecto React

Esta guía te muestra ejemplos prácticos de cómo usar GitHub Copilot para acelerar el desarrollo de tu Todo List App.

## 📋 Índice

- [Generación de Componentes](#generación-de-componentes)
- [Hooks Personalizados](#hooks-personalizados)
- [Context API](#context-api)
- [Pruebas Unitarias](#pruebas-unitarias)
- [Estilos con Tailwind](#estilos-con-tailwind)
- [Comandos de Chat Útiles](#comandos-de-chat-útiles)
- [Refactorización](#refactorización)
- [Debugging](#debugging)

---

## 🧩 Generación de Componentes

### Ejemplo 1: Componente TaskFilter

**Prompt en comentario:**

```jsx
// Componente React funcional TaskFilter que:
// - Acepta props: currentFilter, onFilterChange
// - Muestra tres botones: All, Active, Completed
// - Aplica estilo activo al filtro seleccionado
// - Usa Tailwind CSS para estilos responsive
// - Usa Heroicons para iconos
```

**Copilot generará algo como:**

```jsx
import {
  CheckIcon,
  ClockIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

const TaskFilter = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All', icon: ListBulletIcon },
    { id: 'active', label: 'Active', icon: ClockIcon },
    { id: 'completed', label: 'Completed', icon: CheckIcon },
  ]

  return (
    <div className="flex gap-2 justify-center my-4">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            currentFilter === filter.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <filter.icon className="w-5 h-5" />
          {filter.label}
        </button>
      ))}
    </div>
  )
}

TaskFilter.propTypes = {
  currentFilter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

export default TaskFilter
```

---

### Ejemplo 2: Modal de Confirmación

**Prompt:**

```jsx
// Modal de confirmación reutilizable con:
// - Props: isOpen, onClose, onConfirm, title, message
// - Botones Cancel y Confirm
// - Overlay oscuro con click fuera para cerrar
// - Animación de entrada/salida
// - Estilos Tailwind
```

---

## 🪝 Hooks Personalizados

### Ejemplo 3: Hook useTodos con LocalStorage

**Prompt:**

```jsx
// Hook personalizado useTodos que:
// - Gestiona array de tareas
// - Persiste en localStorage
// - Funciones: addTodo, deleteTodo, toggleTodo, updateTodo
// - Retorna { todos, addTodo, deleteTodo, toggleTodo, updateTodo }
// - Cada todo tiene: id, text, completed, createdAt
```

**Chat Copilot:** Presiona `Ctrl+I` y escribe:

```
Crea un hook personalizado llamado useTodos que gestione las tareas
con persistencia en localStorage. Incluye funciones CRUD completas.
```

---

### Ejemplo 4: Hook useAuth

**Usa el comando de chat:**

```
/new Crear hook useAuth que gestione autenticación simple con localStorage
```

---

## 🌐 Context API

### Ejemplo 5: TodoContext

**Prompt:**

```jsx
// Context para gestión global de tareas:
// - TodoProvider que envuelve la app
// - Usa el hook useTodos internamente
// - Exporta useTodoContext para consumir el contexto
// - Incluye estado de loading y error
```

**Copilot generará:**

```jsx
import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import useTodos from '../hooks/useTodos'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const todoState = useTodos()

  return (
    <TodoContext.Provider value={todoState}>{children}</TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoContext debe usarse dentro de TodoProvider')
  }
  return context
}
```

---

## 🧪 Pruebas Unitarias

### Ejemplo 6: Tests para TodoItem

**Selecciona el componente `TodoItem.jsx` → `Ctrl+I` → Escribe:**

```
/tests Genera pruebas unitarias con Vitest y React Testing Library
que cubran:
- Renderizado del componente
- Click en checkbox para toggle
- Click en botón delete
- Edición de texto
```

---

### Ejemplo 7: Tests para useTodos Hook

**Chat de Copilot:**

```
Genera pruebas para el hook useTodos que verifiquen:
1. Agregar una tarea
2. Eliminar una tarea
3. Marcar como completada
4. Persistencia en localStorage
5. Cargar tareas desde localStorage al iniciar
```

---

## 🎨 Estilos con Tailwind

### Ejemplo 8: Card de Tarea con Animaciones

**Prompt:**

```jsx
// Tarjeta de tarea con:
// - Animación de aparición (fade in)
// - Hover effect con sombra
// - Borde izquierdo según estado (verde=completada, azul=activa)
// - Responsive: stack en mobile, flex en desktop
// - Transition suave en hover
```

---

### Ejemplo 9: Formulario Estilizado

**Chat Copilot (`Ctrl+Shift+I`):**

```
Crea un componente de formulario para agregar tareas con:
- Input de texto con validación
- Botón submit con loading state
- Mensajes de error bajo el input
- Placeholders y labels accesibles
- Estilos Tailwind modernos con focus states
- Manejo de submit con toast notifications
```

---

## 💬 Comandos de Chat Útiles

### Explicar Código

**Selecciona código → `Ctrl+I` → Escribe:**

```
/explain
```

### Optimizar Código

**Selecciona código → `Ctrl+I` → Escribe:**

```
/optimize Este componente usando React.memo y useCallback
para mejor performance
```

### Documentar Código

**Selecciona función → `Ctrl+I` → Escribe:**

```
/doc Genera JSDoc completo para esta función
```

### Corregir Errores

**Selecciona código con error → `Ctrl+I` → Escribe:**

```
/fix
```

---

## 🔄 Refactorización

### Ejemplo 10: Convertir Clase a Funcional

**Selecciona componente de clase → Chat:**

```
Refactoriza este componente de clase a componente funcional
usando hooks modernos de React
```

---

### Ejemplo 11: Extraer Lógica a Custom Hook

**Selecciona lógica compleja en componente → Chat:**

```
Extrae esta lógica a un hook personalizado reutilizable
llamado useTaskFiltering
```

---

### Ejemplo 12: Mejorar Performance

**Chat:**

```
Analiza este componente y sugiere mejoras de performance usando:
- React.memo
- useCallback para funciones
- useMemo para cálculos pesados
```

---

## 🐛 Debugging

### Ejemplo 13: Encontrar y Corregir Bug

**Chat:**

```
Este componente no actualiza cuando cambia el filtro.
Ayúdame a identificar y corregir el problema.
```

---

### Ejemplo 14: Validar Formulario

**Chat:**

```
Agrega validación a este formulario:
- Texto mínimo 3 caracteres
- No permitir tareas duplicadas
- Mostrar errores con toast
- Deshabilitar submit si hay errores
```

---

## 🎯 Prompts Avanzados

### Ejemplo 15: Implementar Feature Completa

**Chat Copilot:**

```
Implementa un sistema de categorías para las tareas:

REQUISITOS:
- Cada tarea puede tener una categoría (Work, Personal, Shopping, etc.)
- Componente CategoryPicker con dropdown
- Filtrar tareas por categoría
- Persistir categorías en localStorage
- UI con colores diferentes por categoría
- Usar Tailwind y Heroicons

ESTRUCTURA:
1. Modificar estructura de todo para incluir category
2. Crear componente CategoryPicker
3. Actualizar TodoItem para mostrar categoría
4. Agregar filtro de categorías
5. Actualizar estilos

Genera el código paso a paso con explicaciones.
```

---

### Ejemplo 16: Migrar a TypeScript

**Chat:**

```
Ayúdame a migrar este proyecto a TypeScript:
1. Genera tipos para Todo, Filter, User
2. Convierte componentes a .tsx
3. Agrega interfaces para props
4. Configura tsconfig.json para Vite + React
```

---

## 🚀 Atajos de Productividad

| Escenario              | Acción                                              |
| ---------------------- | --------------------------------------------------- |
| Crear componente nuevo | Escribe comentario descriptivo → `Tab` para aceptar |
| Generar tests          | Seleccionar componente → `Ctrl+I` → `/tests`        |
| Refactorizar           | Seleccionar código → `Ctrl+I` → `/optimize`         |
| Documentar             | Seleccionar función → `Ctrl+I` → `/doc`             |
| Corregir error         | Seleccionar código → `Ctrl+I` → `/fix`              |
| Explicar código        | Seleccionar → `Ctrl+I` → `/explain`                 |

---

## 💡 Tips Pro

### 1. **Contexto es Clave**

Cuanto más contexto proporciones, mejores sugerencias obtendrás:

```jsx
// ❌ Mal
// crear botón

// ✅ Bueno
// Botón primario con loading state, disabled cuando isLoading=true,
// usa Tailwind, incluye spinner de Heroicons cuando loading
```

### 2. **Usa Nombres Descriptivos**

```jsx
// ❌ Mal
const [d, sd] = useState([])

// ✅ Bueno
const [filteredTasks, setFilteredTasks] = useState([])
// Copilot entenderá mejor el propósito y sugerirá código relevante
```

### 3. **Divide y Vencerás**

Para features grandes, pide paso a paso:

```
Paso 1: Crea el tipo y la interfaz
[Revisa → Acepta]

Paso 2: Crea el hook personalizado
[Revisa → Acepta]

Paso 3: Crea el componente UI
[Revisa → Acepta]
```

### 4. **Iteración Rápida**

```
Si la sugerencia no es perfecta:
- Presiona Esc para rechazar
- Modifica tu prompt con más detalles
- Intenta de nuevo
```

---

## 🎓 Recursos de Aprendizaje

### Documentación Oficial

- [Documentación de Copilot](https://docs.github.com/en/copilot)
- [Mejores Prácticas](https://docs.github.com/en/copilot/using-github-copilot/best-practices)
- [Prompt Engineering](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering)

### Videos y Tutoriales

- [GitHub Copilot Quickstart](https://www.youtube.com/githubcopilot)
- [React con Copilot](https://www.youtube.com/watch?v=...)

---

## 📝 Ejercicios Prácticos

Prueba estos ejercicios en tu proyecto:

1. **Crear componente TaskStats**
   - Muestra: total, completadas, pendientes
   - Gráfico de progreso con barra
   - Usa Copilot para generar todo

2. **Implementar drag & drop**
   - Reordenar tareas arrastrando
   - Usa prompt descriptivo para obtener el código

3. **Agregar dark mode**
   - Toggle para cambiar tema
   - Persistir preferencia
   - Ajustar todos los colores

4. **Sistema de prioridades**
   - Alta, Media, Baja
   - Ordenar por prioridad
   - Colores visuales

---

**¡Feliz codificación con Copilot!** 🚀✨

¿Preguntas? Abre el chat de Copilot (`Ctrl+Shift+I`) y pregunta lo que necesites.
