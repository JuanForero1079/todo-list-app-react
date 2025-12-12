# ❓ FAQ - GitHub Copilot

Preguntas frecuentes sobre el uso de GitHub Copilot en tu proyecto React.

---

## 🚀 Configuración Inicial

### ¿Cómo sé si Copilot está activo?

Mira la barra de estado en la esquina inferior derecha de VS Code:

- ✅ **Ícono de Copilot visible** → Está activo
- ❌ **Ícono con X o advertencia** → Hay un problema
- 🔄 **Ícono girando** → Está procesando

**Solución si no aparece:**

1. Haz clic en el ícono de Copilot
2. Selecciona "Sign in to GitHub"
3. Autoriza en el navegador

---

### ¿Puedo usar Copilot gratis?

Sí! Hay varias opciones gratuitas:

1. **Copilot Free**:
   - 2000 solicitudes mensuales
   - 50 solicitudes premium
   - Sin tarjeta de crédito

2. **Estudiantes verificados**:
   - Copilot Pro gratis
   - Verifica en [education.github.com](https://education.github.com/students)

3. **Profesores y mantenedores de código abierto**:
   - Acceso gratuito también disponible

---

### ¿Necesito pagar para usar Copilot en este proyecto?

**No necesariamente**. Copilot Free es suficiente para comenzar. Si necesitas más:

- **Copilot Pro** ($10/mes): 300 solicitudes premium + prueba de 30 días
- **Copilot Pro+** ($19/mes): 1500 solicitudes premium + todos los modelos

---

## 💻 Uso Básico

### Copilot no muestra sugerencias, ¿qué hago?

**Checklist de diagnóstico:**

1. ✅ **Verifica autenticación**:
   - Haz clic en el ícono de Copilot (abajo a la derecha)
   - Debe decir "Copilot: Ready"

2. ✅ **Verifica que esté habilitado para .jsx**:
   - `Ctrl + ,` → Busca "copilot enable"
   - Asegúrate que `javascriptreact` esté en `true`

3. ✅ **Reinicia VS Code**:
   - `Ctrl + Shift + P` → "Reload Window"

4. ✅ **Verifica conexión a Internet**:
   - Copilot requiere conexión activa

5. ✅ **Revisa extensiones instaladas**:
   - Debes tener instaladas:
     - GitHub Copilot
     - GitHub Copilot Chat

---

### Las sugerencias de Copilot no son buenas, ¿cómo mejoro?

**Tips para mejores sugerencias:**

1. **Proporciona contexto en comentarios**:

   ```jsx
   // ❌ Mal
   // crear función

   // ✅ Bueno
   // Función que filtra tareas completadas y retorna solo las activas
   // Parámetros: tasks (array de objetos con id, text, completed)
   // Retorna: array filtrado
   ```

2. **Usa nombres descriptivos**:

   ```jsx
   // ❌ Mal
   const [d, sd] = useState([])

   // ✅ Bueno
   const [filteredTasks, setFilteredTasks] = useState([])
   ```

3. **Escribe el inicio de código**:

   ```jsx
   // Copilot entiende mejor cuando empiezas
   const handleSubmit = (e) => {
     e.preventDefault();
     // Copilot continuará con mejor contexto
   ```

4. **Explora alternativas** con `Alt + ]`

---

### ¿Copilot funciona sin Internet?

**No**. Copilot requiere conexión a Internet para:

- Generar sugerencias
- Procesar prompts de chat
- Acceder a modelos de IA

**Si no tienes Internet:**

- Las sugerencias no aparecerán
- El chat no funcionará
- Verás un ícono de error en la barra de estado

---

## 🎯 Uso Avanzado

### ¿Cómo hago que Copilot entienda mi proyecto?

Copilot ya tiene acceso al archivo `.github/copilot-instructions.md` que creamos. Para mejorarlo:

1. **Mantén nombres consistentes** en todo el proyecto
2. **Usa TypeScript o PropTypes** para definir tipos
3. **Comenta código complejo**
4. **Estructura clara** de carpetas y archivos

---

### ¿Puedo usar Copilot para generar pruebas?

**¡Sí!** Es una de las mejores funcionalidades:

1. **Selecciona el componente** que quieres testear
2. **Presiona `Ctrl + I`**
3. **Escribe**: `/tests Genera pruebas con Vitest y React Testing Library`

**Ejemplo de prompt avanzado:**

```
/tests Genera pruebas para TodoItem que cubran:
- Renderizado básico
- Toggle de completado
- Eliminación de tarea
- Edición de texto
- Props requeridas
```

---

### ¿Copilot puede refactorizar mi código?

**Absolutamente**. Métodos:

1. **Comando `/optimize`**:
   - Selecciona código
   - `Ctrl + I` → `/optimize`

2. **Prompts específicos**:

   ```
   Refactoriza este componente para:
   - Usar React.memo
   - Implementar useCallback en funciones
   - Extraer lógica a custom hook
   - Mejorar nombres de variables
   ```

3. **Conversión de patrones**:
   ```
   Convierte este componente de clase a funcional con hooks
   ```

---

### ¿Cómo genero un componente completo desde cero?

**Método 1 - Comentario descriptivo:**

```jsx
// Componente TaskCard que:
// - Muestra título, descripción, fecha
// - Botones: Editar, Eliminar, Marcar completo
// - Props: task (object), onEdit, onDelete, onToggle
// - Estilos: Tailwind CSS con animaciones
// - Iconos: Heroicons
```

Luego presiona `Enter` y `Tab` para aceptar sugerencias.

**Método 2 - Chat de Copilot (`Ctrl + Shift + I`):**

```
Genera componente TaskCard completo con:
- TypeScript interfaces
- PropTypes
- Tailwind responsive
- Manejo de eventos
- Iconos de Heroicons
```

---

## 🔧 Resolución de Problemas

### Copilot genera código con errores, ¿es normal?

**Sí, es normal**. Copilot es una herramienta de asistencia, no reemplazo:

**Mejores prácticas:**

1. **Siempre revisa** el código generado
2. **Ejecuta linter** (`npm run lint`)
3. **Prueba** el código antes de commit
4. **Usa `/fix`** si detectas errores
5. **Itera** con prompts más específicos

---

### Las sugerencias están en inglés, ¿puedo cambiar a español?

**Copilot respeta el idioma del código circundante:**

```jsx
// Si escribes en español
// Función que calcula el total de tareas

// Copilot sugerirá en español
const calcularTotalTareas = (tareas) => {
  return tareas.length
}
```

**Para el chat:**

- Puedes escribir en español
- Copilot responderá en español

---

### ¿Copilot puede leer archivos de mi proyecto?

**Sí, Copilot tiene contexto de:**

- Archivo actual
- Archivos abiertos en pestañas
- Estructura del proyecto (limitada)
- `.github/copilot-instructions.md` (si existe)

**No tiene acceso completo** a todos los archivos simultáneamente.

---

### ¿Cómo limito las sugerencias a solo mi estilo de código?

1. **Archivo de instrucciones** (ya lo tienes):
   - `.github/copilot-instructions.md`
   - Define convenciones

2. **ESLint y Prettier**:
   - Copilot aprende de tu configuración
   - Mantén reglas consistentes

3. **Código existente**:
   - Copilot aprende de patrones en archivos abiertos
   - Mantén código de ejemplo visible

---

## 💰 Planes y Límites

### ¿Qué pasa si agoto mis solicitudes mensuales?

**Copilot Free:**

- 2000 solicitudes de sugerencias
- 50 solicitudes premium (chat)

**Si agotas:**

- Sugerencias en línea seguirán funcionando (limitadas)
- Chat puede estar restringido
- Considera upgrade a Pro ($10/mes)

**Monitorea uso:**

- `Ctrl + Shift + P` → "Copilot: Check Subscription"

---

### ¿Vale la pena Copilot Pro para este proyecto?

**Considera Pro ($10/mes) si:**

- ✅ Desarrollas más de 10 horas/semana
- ✅ Necesitas chat avanzado frecuentemente
- ✅ Trabajas en múltiples proyectos
- ✅ Quieres acceso prioritario

**Copilot Free es suficiente si:**

- ✅ Estás aprendiendo React
- ✅ Proyecto personal/pequeño
- ✅ Desarrollo ocasional

---

## 🔒 Privacidad y Seguridad

### ¿Mi código se comparte con GitHub?

**Sí, pero con limitaciones:**

- Copilot envía fragmentos de código a servidores de GitHub
- **No se usa para entrenar modelos públicos** (desde Jun 2023)
- Solo tú y GitHub ven tu código

**Configuración de privacidad:**

1. `Ctrl + ,` → Busca "copilot"
2. Configura:
   - `github.copilot.advanced.public_code_filter` → `enabled`
   - Evita sugerencias de código público similar

---

### ¿Puedo usar Copilot en proyectos comerciales?

**Sí**, con estas consideraciones:

1. **Tu suscripción personal**: Código es tuyo
2. **Licencia de código sugerido**: GitHub no reclama derechos
3. **Revisa el código**: Asegúrate que no viole licencias de terceros

**Configuración recomendada:**

- Habilita filtro de código público
- Revisa sugerencias antes de usar
- Mantén buenas prácticas de licenciamiento

---

## 🎓 Aprendizaje

### ¿Copilot me ayuda a aprender React o me hace peor programador?

**Puede hacer ambos**. Depende de cómo lo uses:

**✅ Uso correcto (aprendes):**

- Lee y entiende el código sugerido
- Usa `/explain` para entender conceptos
- Experimenta con variaciones
- Pregunta "¿por qué?" en el chat

**❌ Uso incorrecto (no aprendes):**

- Aceptar todo sin leer
- Copiar sin entender
- No investigar errores

**Recomendación para aprender:**

1. Intenta escribir código tú primero
2. Usa Copilot para comparar/mejorar
3. Pregunta a Copilot "Explica por qué esto es mejor"

---

### ¿Debo confiar 100% en las sugerencias de Copilot?

**¡NO!** Copilot es un asistente, no un programador perfecto:

**Siempre verifica:**

- ✅ Lógica del código
- ✅ Seguridad (XSS, SQL injection, etc.)
- ✅ Performance
- ✅ Accesibilidad
- ✅ Buenas prácticas

**Usa como:**

- 🎯 Punto de partida
- 🔍 Exploración de alternativas
- ⚡ Acelerador de productividad
- 📚 Herramienta de aprendizaje

---

## 🆘 Ayuda Adicional

### ¿Dónde encuentro más ayuda?

**Recursos oficiales:**

- [Documentación GitHub Copilot](https://docs.github.com/en/copilot)
- [Foro de comunidad](https://github.community/c/copilot)
- [Reportar problemas](https://github.com/github/copilot-feedback)

**En tu proyecto:**

- [COPILOT-SETUP.md](./COPILOT-SETUP.md) - Guía de configuración
- [COPILOT-EXAMPLES.md](./COPILOT-EXAMPLES.md) - Ejemplos prácticos
- [KEYBOARD-SHORTCUTS.md](./KEYBOARD-SHORTCUTS.md) - Atajos de teclado

**Pregunta directamente a Copilot:**

- `Ctrl + Shift + I` → "¿Cómo puedo...?"

---

### Tengo un error específico, ¿cómo lo reporto?

**Para errores de Copilot:**

1. `Ctrl + Shift + P` → "Copilot: Report Issue"
2. Describe el problema
3. Incluye pasos para reproducir

**Para preguntas de código:**

- Abre Chat (`Ctrl + Shift + I`)
- Describe tu problema
- Pega el código relevante

---

## 🎯 Resumen Rápido

### Top 5 Tips para Usar Copilot Efectivamente:

1. **📝 Escribe comentarios descriptivos** antes de código
2. **🔍 Explora alternativas** con `Alt + ]`
3. **💬 Usa chat** para tareas complejas (`Ctrl + I`)
4. **✅ Siempre revisa** el código generado
5. **📚 Aprende** usando `/explain` frecuentemente

---

**¿Más preguntas?** Presiona `Ctrl + Shift + I` y pregúntale directamente a Copilot! 🤖✨

---

**Última actualización**: Diciembre 2025
