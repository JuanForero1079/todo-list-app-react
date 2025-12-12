# Instrucciones de Contexto para GitHub Copilot

## Información del Proyecto

**Nombre**: Todo List App React  
**Tipo**: Aplicación web de gestión de tareas (To-Do List)  
**Framework**: React 19.1.1 con Vite 7.1.4  
**Lenguaje**: JavaScript (JSX)  
**Estilos**: Tailwind CSS 4.1.12  
**Routing**: React Router DOM 7.9.3  
**Iconos**: Heroicons 2.2.0  
**Notificaciones**: React Toastify 11.0.5  

---

## Arquitectura del Proyecto

```
src/
├── App.jsx              # Componente principal con routing
├── main.jsx             # Entry point de la aplicación
├── TodoItem.jsx         # Componente de item individual de tarea
├── components/
│   └── PrivateRoute.jsx # Componente de ruta protegida
├── context/
│   └── AuthContext.jsx  # Context API para autenticación
└── pages/
    └── Login.jsx        # Página de inicio de sesión
```

---

## Convenciones de Código

### React Components
- Usar **componentes funcionales** con hooks
- Preferir `const` para declarar componentes
- Usar arrow functions: `const Component = () => {}`
- Exportar componentes con `export default`

### Naming Conventions
- Componentes: **PascalCase** (`TodoItem`, `PrivateRoute`)
- Archivos de componentes: **PascalCase.jsx** (`Login.jsx`, `TodoItem.jsx`)
- Funciones y variables: **camelCase** (`handleClick`, `isAuthenticated`)
- Constantes: **UPPER_SNAKE_CASE** (`API_URL`, `MAX_TASKS`)
- Hooks personalizados: **useCamelCase** (`useAuth`, `useTodos`)

### Estructura de Componentes
```jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ComponentName = ({ prop1, prop2 }) => {
  // 1. Hooks de estado
  const [state, setState] = useState(initialValue);
  
  // 2. Hooks de efecto
  useEffect(() => {
    // efecto
  }, [dependencies]);
  
  // 3. Funciones auxiliares
  const handleEvent = () => {
    // lógica
  };
  
  // 4. Return JSX
  return (
    <div className="tailwind-classes">
      {/* contenido */}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

export default ComponentName;
```

---

## Estilos con Tailwind CSS

### Clases Preferidas
- Usar utility-first approach
- Preferir clases de Tailwind sobre CSS custom
- Usar `className` en lugar de `class`
- Responsive design: `sm:`, `md:`, `lg:`, `xl:`

### Ejemplo de Estilos Comunes
```jsx
// Botones
className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"

// Cards
className="bg-white shadow-md rounded-lg p-6"

// Inputs
className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

// Layout
className="container mx-auto px-4 max-w-4xl"
```

---

## Gestión de Estado

### Context API
- Usar Context API para estado global (autenticación, temas, etc.)
- Crear contextos en `src/context/`
- Proporcionar hooks personalizados para consumir contextos

```jsx
// Ejemplo de patrón preferido
const { user, login, logout } = useAuth();
```

### Local State
- Usar `useState` para estado local de componentes
- Usar `useReducer` para estado complejo
- Evitar prop drilling; usar Context cuando sea necesario

---

## Routing

### React Router DOM
- Usar `BrowserRouter` como router principal
- Implementar rutas protegidas con `PrivateRoute`
- Lazy loading con `React.lazy()` y `Suspense` cuando sea apropiado

```jsx
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
```

---

## Manejo de Errores y Notificaciones

### React Toastify
- Usar para notificaciones de éxito, error, info
- Importar: `import { toast } from 'react-toastify';`

```jsx
// Ejemplos
toast.success('Tarea completada!');
toast.error('Error al guardar la tarea');
toast.info('Información importante');
```

---

## Mejores Prácticas

### Performance
- Usar `React.memo()` para componentes que rerenderean frecuentemente
- Usar `useCallback` y `useMemo` cuando sea apropiado
- Lazy load de componentes pesados

### Accesibilidad
- Usar etiquetas HTML semánticas (`<button>`, `<input>`, etc.)
- Incluir atributos `aria-*` cuando sea necesario
- Asegurar navegación por teclado

### Code Quality
- Mantener componentes pequeños y enfocados (Single Responsibility)
- Extraer lógica compleja a hooks personalizados
- Comentar código complejo o no obvio
- Usar PropTypes o TypeScript para type checking

---

## Funcionalidades Específicas del Proyecto

### Autenticación
- Implementada con Context API (`AuthContext`)
- Rutas protegidas con componente `PrivateRoute`
- Estado de autenticación persistente (considerar localStorage)

### Gestión de Tareas (To-Do)
- CRUD completo: Crear, Leer, Actualizar, Eliminar
- Marcar tareas como completadas/pendientes
- Filtrar tareas (todas, activas, completadas)
- Persistencia en localStorage o backend API

### Componentes Clave
- `TodoItem`: Representa una tarea individual
- `Login`: Maneja la autenticación de usuarios
- `PrivateRoute`: Protege rutas que requieren autenticación

---

## Dependencias y Herramientas

### Development Tools
- **ESLint**: Linting con configuración Prettier
- **Prettier**: Formato de código consistente
- **Vite**: Build tool y dev server

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run lint     # Ejecutar ESLint
npm run preview  # Preview del build
```

---

## Guías para Generación de Código

### Al crear nuevos componentes:
1. Seguir la estructura de componentes establecida
2. Usar Tailwind para estilos
3. Implementar PropTypes
4. Considerar accesibilidad
5. Añadir manejo de errores apropiado

### Al trabajar con formularios:
1. Usar controlled components
2. Implementar validación
3. Manejar estados de carga y error
4. Proporcionar feedback con toast notifications

### Al implementar nuevas features:
1. Mantener consistencia con el código existente
2. Seguir el patrón de arquitectura actual
3. Documentar código complejo
4. Considerar casos edge y manejo de errores

---

## Notas Adicionales

- Preferir composición sobre herencia
- Mantener componentes DRY (Don't Repeat Yourself)
- Escribir código legible y auto-documentado
- Priorizar la experiencia del usuario (UX)
- Optimizar para dispositivos móviles (mobile-first)

---

**Última actualización**: Diciembre 2025
