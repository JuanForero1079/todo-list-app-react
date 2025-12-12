# 🚀 Guía de Configuración de GitHub Copilot

Esta guía te ayudará a configurar GitHub Copilot en tu proyecto **Todo List App React**.

## 📋 Índice

1. [Obtener Acceso a GitHub Copilot](#1-obtener-acceso-a-github-copilot)
2. [Instalar la Extensión en VS Code](#2-instalar-la-extensión-en-vs-code)
3. [Instalar Copilot para la CLI](#3-instalar-copilot-para-la-cli)
4. [Configurar la Red (Opcional)](#4-configurar-la-red-opcional)
5. [Configurar Ajustes](#5-configurar-ajustes)
6. [Empezar a Usar Copilot](#6-empezar-a-usar-copilot)
7. [Mejores Prácticas para este Proyecto](#7-mejores-prácticas-para-este-proyecto)

---

## 1. Obtener Acceso a GitHub Copilot

Elige una de estas opciones:

### ✨ Opción Gratuita
- **Copilot Free**: 2000 solicitudes de sugerencias mensuales + 50 solicitudes premium
- Visita: [github.com/settings/copilot](https://github.com/settings/copilot)

### 💎 Planes de Pago
- **Copilot Pro**: $10/mes (prueba gratuita de 30 días + 300 solicitudes premium mensuales)
- **Copilot Pro+**: $19/mes (1500 solicitudes premium + acceso completo a todos los modelos)

### 🎓 Acceso Gratuito para Estudiantes
- Estudiantes verificados obtienen Copilot Pro gratis
- Solicita en: [education.github.com/students](https://education.github.com/students)

### 🏢 Acceso Organizacional
- Si tu organización tiene Copilot, solicita acceso en: [github.com/settings/copilot](https://github.com/settings/copilot)

---

## 2. Instalar la Extensión en VS Code

### Paso a Paso:

1. **Abre VS Code** (tu editor actual)

2. **Instala las extensiones de Copilot**:
   - Presiona `Ctrl+Shift+X` para abrir el panel de extensiones
   - Busca e instala estas extensiones:
     - ✅ **GitHub Copilot** - Sugerencias de código en línea
     - ✅ **GitHub Copilot Chat** - Chat interactivo con Copilot

3. **Autentícate con GitHub**:
   - Haz clic en el ícono de Copilot en la barra de estado (esquina inferior derecha)
   - Selecciona "Sign in to GitHub"
   - Autoriza VS Code en tu navegador

4. **Verifica la instalación**:
   - Abre cualquier archivo `.jsx` de tu proyecto
   - Empieza a escribir código y deberías ver sugerencias en gris
   - Presiona `Ctrl+I` para abrir Copilot Chat en línea

---

## 3. Instalar Copilot para la CLI

Si deseas usar Copilot en PowerShell:

```powershell
# Instala GitHub CLI si no la tienes
winget install --id GitHub.cli

# Verifica la instalación
gh --version

# Instala la extensión de Copilot
gh extension install github/gh-copilot

# Autentícate
gh auth login

# Prueba Copilot en la CLI
gh copilot suggest "instalar dependencias npm"
```

---

## 4. Configurar la Red (Opcional)

Si estás detrás de un proxy o firewall corporativo:

### URLs que deben estar en la lista de permitidos:
- `https://api.github.com`
- `https://github.com`
- `https://copilot-proxy.githubusercontent.com`
- `https://origin-tracker.githubusercontent.com`
- `https://default.exp-tas.com`

### Configurar certificado SSL (si es necesario):
1. Ve a VS Code Settings (`Ctrl+,`)
2. Busca "http.proxy"
3. Configura tu proxy si es necesario

---

## 5. Configurar Ajustes

### Configuración Recomendada para este Proyecto React

Presiona `Ctrl+,` y busca "copilot":

```json
{
  // Habilitar Copilot
  "github.copilot.enable": {
    "*": true,
    "yaml": true,
    "plaintext": false,
    "markdown": true,
    "javascript": true,
    "javascriptreact": true
  },
  
  // Sugerencias en línea
  "github.copilot.editor.enableAutoCompletions": true,
  
  // Chat de Copilot
  "github.copilot.chat.codeGeneration.useInstructionFiles": true
}
```

### Crear archivo de instrucciones para Copilot (.github/copilot-instructions.md)

Este archivo ayudará a Copilot a entender mejor tu proyecto.

---

## 6. Empezar a Usar Copilot

### 🎯 Atajos de Teclado Esenciales:

| Atajo | Función |
|-------|---------|
| `Tab` | Aceptar sugerencia de Copilot |
| `Esc` | Rechazar sugerencia |
| `Alt+]` | Ver siguiente sugerencia |
| `Alt+[` | Ver sugerencia anterior |
| `Ctrl+I` | Abrir Copilot Chat en línea |
| `Ctrl+Shift+I` | Abrir panel de Chat lateral |

### 💬 Comandos de Chat Útiles:

```
/explain - Explica el código seleccionado
/fix - Sugiere correcciones para el código
/tests - Genera pruebas unitarias
/doc - Genera documentación
/optimize - Optimiza el código seleccionado
```

### 📝 Ejemplos de Uso en tu Proyecto:

#### 1. Crear un nuevo componente:
```jsx
// Escribe un comentario y deja que Copilot genere el código:
// Componente de formulario para agregar una nueva tarea con validación
```

#### 2. Generar pruebas:
- Selecciona tu componente `TodoItem.jsx`
- Presiona `Ctrl+I`
- Escribe: `/tests Genera pruebas unitarias para este componente`

#### 3. Refactorizar código:
- Selecciona código que quieres mejorar
- Presiona `Ctrl+I`
- Escribe: `/optimize Mejora este código usando React hooks modernos`

---

## 7. Mejores Prácticas para este Proyecto

### 🎨 Trabajando con React + Vite

1. **Componentes Funcionales**:
   ```jsx
   // Copilot entiende mejor cuando describes lo que quieres:
   // Hook personalizado para manejar el estado de las tareas con localStorage
   ```

2. **Hooks Personalizados**:
   ```jsx
   // Hook para autenticación con context API
   ```

3. **Styling con Tailwind**:
   ```jsx
   // Botón primario con animación hover y estados disabled
   ```

### 📚 Prompts Efectivos:

**❌ Mal prompt:**
```
crear componente
```

**✅ Buen prompt:**
```
Crear un componente React funcional llamado TaskFilter que:
- Acepte props: tasks, onFilterChange
- Muestre botones para filtrar: All, Active, Completed
- Use Tailwind CSS para estilos
- Maneje el estado del filtro activo
```

### 🔧 Ingeniería de Prompts para tu Proyecto:

```jsx
// CONTEXTO: App de TODO list con React Router y Context API
// TAREA: Implementar paginación para la lista de tareas
// REQUISITOS: 
// - 10 tareas por página
// - Botones prev/next
// - Mostrar número de página actual
// - Usar Tailwind para estilos
```

---

## 🎓 Recursos Adicionales

- [Documentación oficial de Copilot](https://docs.github.com/en/copilot)
- [Mejores prácticas](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)
- [Ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
- [Ejemplos de código](https://github.com/features/copilot)

---

## 🆘 Solución de Problemas

### Copilot no muestra sugerencias:
1. Verifica que estás autenticado (ícono en la barra de estado)
2. Revisa que Copilot esté habilitado para `.jsx` files
3. Reinicia VS Code

### Las sugerencias son de baja calidad:
1. Proporciona más contexto en comentarios
2. Usa nombres descriptivos para variables y funciones
3. Estructura tu código de forma clara

### Errores de red:
1. Verifica tu conexión a Internet
2. Revisa la configuración de proxy
3. Consulta la lista de URLs permitidas

---

## ✅ Checklist de Configuración

- [ ] Obtener acceso a GitHub Copilot
- [ ] Instalar extensión GitHub Copilot en VS Code
- [ ] Instalar extensión GitHub Copilot Chat en VS Code
- [ ] Autenticarse con GitHub
- [ ] Configurar ajustes recomendados
- [ ] Crear archivo de instrucciones `.github/copilot-instructions.md`
- [ ] Probar sugerencias en línea
- [ ] Probar Copilot Chat
- [ ] (Opcional) Instalar gh-copilot para CLI
- [ ] Familiarizarse con atajos de teclado

---

**¡Listo para empezar!** 🎉

Abre cualquier archivo de tu proyecto y comienza a escribir. Copilot estará ahí para ayudarte a codificar más rápido y eficientemente.
