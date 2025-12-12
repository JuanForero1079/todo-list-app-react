# ⌨️ Atajos de Teclado - GitHub Copilot

Referencia rápida de todos los atajos de teclado para usar GitHub Copilot eficientemente en VS Code.

---

## 🎯 Copilot - Sugerencias en Línea

| Atajo          | Descripción                                        |
| -------------- | -------------------------------------------------- |
| `Tab`          | **Aceptar** la sugerencia de Copilot               |
| `Esc`          | **Rechazar** la sugerencia actual                  |
| `Alt + ]`      | Ver **siguiente** sugerencia alternativa           |
| `Alt + [`      | Ver **anterior** sugerencia alternativa            |
| `Alt + \`      | Activar sugerencias de Copilot manualmente         |
| `Ctrl + Enter` | Abrir panel de **10 sugerencias** en nueva pestaña |

---

## 💬 Copilot Chat

| Atajo              | Descripción                                 |
| ------------------ | ------------------------------------------- |
| `Ctrl + I`         | Abrir **Copilot Chat en línea** (inline)    |
| `Ctrl + Shift + I` | Abrir **panel de Chat lateral**             |
| `Ctrl + L`         | Limpiar historial del chat actual           |
| `/`                | Ver lista de **comandos slash** disponibles |

---

## 🔧 Comandos Slash en Chat

Escribe estos comandos en el chat de Copilot:

| Comando     | Descripción                       |
| ----------- | --------------------------------- |
| `/explain`  | Explica el código seleccionado    |
| `/fix`      | Sugiere correcciones para errores |
| `/tests`    | Genera pruebas unitarias          |
| `/doc`      | Genera documentación JSDoc        |
| `/optimize` | Optimiza el código seleccionado   |
| `/new`      | Genera código nuevo desde cero    |
| `/help`     | Muestra ayuda de comandos         |

---

## 📝 VS Code - Edición Rápida

| Atajo                  | Descripción                       |
| ---------------------- | --------------------------------- |
| `Ctrl + D`             | Seleccionar siguiente ocurrencia  |
| `Ctrl + Shift + L`     | Seleccionar todas las ocurrencias |
| `Alt + Click`          | Insertar múltiples cursores       |
| `Ctrl + /`             | Comentar/descomentar línea        |
| `Shift + Alt + ↓/↑`    | Duplicar línea arriba/abajo       |
| `Alt + ↓/↑`            | Mover línea arriba/abajo          |
| `Ctrl + Shift + K`     | Eliminar línea                    |
| `Ctrl + Enter`         | Insertar línea abajo              |
| `Ctrl + Shift + Enter` | Insertar línea arriba             |

---

## 🔍 VS Code - Búsqueda y Navegación

| Atajo              | Descripción                  |
| ------------------ | ---------------------------- |
| `Ctrl + P`         | Ir a archivo                 |
| `Ctrl + Shift + F` | Buscar en todos los archivos |
| `Ctrl + F`         | Buscar en archivo actual     |
| `Ctrl + H`         | Reemplazar en archivo actual |
| `Ctrl + G`         | Ir a línea                   |
| `Ctrl + T`         | Ir a símbolo                 |
| `F12`              | Ir a definición              |
| `Alt + F12`        | Ver definición (peek)        |
| `Shift + F12`      | Buscar referencias           |

---

## 🎨 VS Code - Panel y Ventanas

| Atajo              | Descripción                               |
| ------------------ | ----------------------------------------- |
| `Ctrl + B`         | Mostrar/ocultar barra lateral             |
| `Ctrl + J`         | Mostrar/ocultar panel inferior (terminal) |
| `Ctrl + Shift + E` | Explorador de archivos                    |
| `Ctrl + Shift + X` | Extensiones                               |
| `Ctrl + Shift + G` | Control de versiones (Git)                |
| `Ctrl + Shift + D` | Debug                                     |
| `Ctrl + ñ`         | Terminal integrado                        |
| `Ctrl + \`         | Dividir editor                            |

---

## 🧪 Desarrollo React

| Atajo             | Descripción                              |
| ----------------- | ---------------------------------------- |
| `rafce` + Tab     | Snippet: Componente funcional con export |
| `useState` + Tab  | Snippet: Hook useState                   |
| `useEffect` + Tab | Snippet: Hook useEffect                  |
| `imp` + Tab       | Snippet: Import                          |
| `imr` + Tab       | Snippet: Import React                    |

_Requiere extensión: ES7+ React/Redux/React-Native snippets_

---

## 🚀 Tailwind CSS IntelliSense

| Atajo             | Descripción                               |
| ----------------- | ----------------------------------------- |
| `Ctrl + Space`    | Activar autocompletado de clases Tailwind |
| Hover sobre clase | Ver estilos CSS aplicados                 |

_Requiere extensión: Tailwind CSS IntelliSense_

---

## 📦 Emmet

| Atajo                          | Descripción         | Ejemplo                                         |
| ------------------------------ | ------------------- | ----------------------------------------------- |
| `div.container` + Tab          | Crear div con clase | `<div className="container"></div>`             |
| `ul>li*3` + Tab                | Lista con 3 items   | `<ul><li></li><li></li><li></li></ul>`          |
| `button.btn.btn-primary` + Tab | Botón con clases    | `<button className="btn btn-primary"></button>` |

---

## 🔄 Git en VS Code

| Atajo                | Descripción                         |
| -------------------- | ----------------------------------- |
| `Ctrl + Shift + G`   | Abrir panel de Git                  |
| `Ctrl + Enter`       | Commit (cuando estás en el mensaje) |
| `Ctrl + K, Ctrl + S` | Stage cambios seleccionados         |
| `Ctrl + K, Ctrl + U` | Unstage cambios                     |

---

## 💡 Productividad

### Flujo de Trabajo Recomendado:

1. **Escribir comentario descriptivo**

   ```jsx
   // Componente que muestra...
   ```

2. **Aceptar sugerencia con `Tab`**

3. **Si no te gusta, `Esc` y `Alt + ]` para alternativas**

4. **Para ajustes finos, `Ctrl + I` y describe cambios**

5. **Para generar tests, selecciona código + `Ctrl + I` + `/tests`**

---

## 🎯 Combinaciones Poderosas

### Generar Componente Completo:

1. Escribe comentario descriptivo
2. Presiona `Tab` para aceptar sugerencia
3. Si falta algo, `Ctrl + I` → "Agrega PropTypes y exports"

### Refactorizar Código:

1. Selecciona código
2. `Ctrl + I` → `/optimize`
3. Revisa sugerencias
4. Acepta con `Ctrl + Enter` en el chat

### Documentar Función:

1. Coloca cursor sobre función
2. `Ctrl + I` → `/doc`
3. JSDoc generado automáticamente

### Debuggear Error:

1. Selecciona código con error
2. `Ctrl + I` → `/fix`
3. Copilot sugiere corrección

---

## 📚 Recursos Adicionales

### Personalizar Atajos

1. `Ctrl + K, Ctrl + S` → Abrir atajos de teclado
2. Buscar "copilot"
3. Personalizar según preferencias

### Comandos de Paleta

- `Ctrl + Shift + P` → Busca "Copilot" para ver todos los comandos disponibles

---

## 🎓 Tips Finales

1. **Practica los atajos básicos primero**: `Tab`, `Esc`, `Ctrl + I`
2. **Memoriza los comandos slash**: `/explain`, `/fix`, `/tests`
3. **Usa `Alt + ]` frecuentemente** para explorar alternativas
4. **Combina con snippets de React** para máxima velocidad
5. **Crea atajos personalizados** para tus flujos más comunes

---

## 📄 Imprimir esta Referencia

Para tener a mano:

1. Presiona `Ctrl + P` en VS Code
2. Selecciona "Imprimir"
3. Guarda como PDF o imprime

---

**¿Olvidaste un atajo?** Presiona `Ctrl + Shift + I` y pregúntale a Copilot: _"¿Cuál es el atajo para...?"_

---

**Última actualización**: Diciembre 2025
