# 📄 Cheat Sheet - GitHub Copilot para React

Referencia rápida de 1 página para tener siempre a mano.

---

## ⌨️ ATAJOS ESENCIALES

| Atajo              | Acción                  |
| :----------------- | :---------------------- |
| `Tab`              | ✅ Aceptar sugerencia   |
| `Esc`              | ❌ Rechazar sugerencia  |
| `Alt + ]`          | ➡️ Siguiente sugerencia |
| `Alt + [`          | ⬅️ Anterior sugerencia  |
| `Ctrl + I`         | 💬 Chat en línea        |
| `Ctrl + Shift + I` | 📊 Panel de chat        |
| `Ctrl + Enter`     | 📋 Ver 10 sugerencias   |

---

## 💬 COMANDOS SLASH

| Comando     | Uso                         |
| :---------- | :-------------------------- |
| `/explain`  | Explica código seleccionado |
| `/fix`      | Corrige errores             |
| `/tests`    | Genera tests unitarios      |
| `/doc`      | Genera documentación JSDoc  |
| `/optimize` | Optimiza código             |
| `/new`      | Genera código nuevo         |

**Uso:** Selecciona código → `Ctrl+I` → escribe comando

---

## 📝 PROMPTS EFECTIVOS

### ❌ Mal Prompt

```jsx
// crear componente
```

### ✅ Buen Prompt

```jsx
// Componente React funcional TaskCard que:
// - Props: task (object con id, text, completed)
// - Muestra checkbox, texto, botón delete
// - Usa Tailwind CSS responsive
// - Iconos de Heroicons
// - Maneja onToggle y onDelete
```

---

## 🎯 EJEMPLOS RÁPIDOS

### 1. Generar Componente

```jsx
// Componente funcional Button con:
// - Props: label, onClick, variant (primary/secondary)
// - Estilos Tailwind con hover states
// - PropTypes validation
```

### 2. Crear Hook Personalizado

```jsx
// Hook useLocalStorage que:
// - Parámetros: key, initialValue
// - Persiste en localStorage
// - Retorna [value, setValue]
// - Maneja errores de JSON parse
```

### 3. Generar Tests

_Selecciona componente → `Ctrl+I`_

```
/tests Genera pruebas con Vitest que cubran:
- Renderizado básico
- Eventos de usuario
- Estados edge cases
```

### 4. Context API

```jsx
// TodoContext con Provider que:
// - Usa hook useTodos
// - Exporta useTodoContext
// - Maneja loading y error states
```

---

## 🚀 WORKFLOW RECOMENDADO

1. **Escribe comentario descriptivo**

   ```jsx
   // Función que filtra tareas activas...
   ```

2. **Espera sugerencia** (1-2 segundos)

3. **Revisa sugerencia**
   - ✅ Buena → `Tab`
   - ❌ Mala → `Esc` + `Alt+]` (siguiente)

4. **Ajusta si necesario**
   - `Ctrl+I` → "Agrega validación de props"

5. **Genera tests**
   - Selecciona código → `Ctrl+I` → `/tests`

---

## 💡 TIPS PRO

### 1. Contexto es Clave

✅ Proporciona detalles en comentarios
✅ Usa nombres descriptivos de variables
✅ Mantén archivos relacionados abiertos

### 2. Itera con Copilot

```
Primera iteración → Genera estructura
Segunda iteración → Agrega validación
Tercera iteración → Optimiza performance
```

### 3. Aprende Mientras Usas

📚 Siempre usa `/explain` en código que no entiendas
🔍 Pregunta "¿Por qué este approach?"
🎯 Experimenta con variaciones

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### No muestra sugerencias

1. ✅ Verifica ícono Copilot (abajo derecha)
2. ✅ Reinicia VS Code (`Ctrl+Shift+P` → Reload Window)
3. ✅ Verifica autenticación (clic en ícono)

### Sugerencias de baja calidad

1. ✅ Agrega más contexto en comentarios
2. ✅ Usa nombres descriptivos
3. ✅ Explora alternativas (`Alt+]`)

### Sin Internet

❌ Copilot NO funciona offline
✅ Requiere conexión activa

---

## 📚 RECURSOS

### Documentación del Proyecto

- 📘 [COPILOT-SETUP.md](./COPILOT-SETUP.md) - Setup completo
- 💡 [COPILOT-EXAMPLES.md](./COPILOT-EXAMPLES.md) - Ejemplos
- ❓ [COPILOT-FAQ.md](./COPILOT-FAQ.md) - FAQ
- 📋 [COPILOT-INDEX.md](./COPILOT-INDEX.md) - Índice

### Links Oficiales

- [docs.github.com/copilot](https://docs.github.com/copilot)
- [github.com/settings/copilot](https://github.com/settings/copilot)
- [education.github.com](https://education.github.com/students) (gratis)

---

## 🎓 CONVENCIONES DEL PROYECTO

### Componentes

```jsx
const ComponentName = ({ prop1, prop2 }) => {
  // 1. Hooks de estado
  const [state, setState] = useState();

  // 2. Efectos
  useEffect(() => {}, []);

  // 3. Funciones
  const handleClick = () => {};

  // 4. Return JSX
  return <div className="...">...</div>;
};

ComponentName.propTypes = { ... };
export default ComponentName;
```

### Naming

- Componentes: `PascalCase`
- Archivos: `PascalCase.jsx`
- Funciones/vars: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`
- Hooks: `useCamelCase`

### Estilos Tailwind

```jsx
// Botones
className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'

// Cards
className = 'bg-white shadow-md rounded-lg p-6'

// Inputs
className = 'w-full px-3 py-2 border rounded-md focus:ring-2'
```

---

## 📊 PLANS & PRICING

| Plan            | Precio    | Solicitudes           |
| :-------------- | :-------- | :-------------------- |
| **Free**        | $0        | 2000/mes + 50 premium |
| **Pro**         | $10/mes   | 300 premium/mes       |
| **Pro+**        | $19/mes   | 1500 premium/mes      |
| **Estudiantes** | 🎓 GRATIS | Pro completo          |

**Verifica plan:** `Ctrl+Shift+P` → "Copilot: Check Subscription"

---

## ✅ CHECKLIST DIARIO

**Cada vez que codifiques:**

- [ ] Copilot activo (ícono verde en barra)
- [ ] Escribo comentarios descriptivos
- [ ] Reviso código antes de aceptar
- [ ] Uso `/explain` en código nuevo
- [ ] Genero tests para componentes (`/tests`)
- [ ] Exploro alternativas (`Alt+]`)

---

## 🎯 DESAFÍO SEMANAL

**Semana 1:** Genera 3 componentes completos con Copilot
**Semana 2:** Refactoriza código existente con `/optimize`
**Semana 3:** Genera tests para toda la app con `/tests`
**Semana 4:** Crea 2 hooks personalizados con Copilot

---

## 💪 PRÁCTICA

**Ejercicio rápido (5 min):**

1. Crea archivo `Practice.jsx`
2. Escribe este prompt:
   ```jsx
   // Componente Contador con botones +/- y reset
   // Muestra el número actual
   // Estilos Tailwind modernos
   ```
3. Acepta sugerencia con `Tab`
4. Prueba `/tests` para generar tests
5. Usa `/explain` para entender el código

---

**🚀 ¡Ahora sal y codifica con superpoderes!**

---

_Imprime esta página y tenla en tu escritorio_
_Última actualización: Diciembre 2025_
