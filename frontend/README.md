# Frontend - Todo List App React

Aplicación frontend de lista de tareas construida con **React**, **Vite** y **Tailwind CSS**.

## 🚀 Características

- ⚡ Vite para desarrollo ultra-rápido
- ⚛️ React 19 con hooks modernos
- 🎨 Tailwind CSS para estilos
- 🎯 Componentes reutilizables
- 📱 Diseño responsive
- 🔔 Notificaciones con React Toastify
- 🎨 Iconos con Heroicons

## 📋 Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

## 🛠️ Instalación

### 1. Instalar dependencias

```bash
cd frontend
npm install
```

### 2. Configurar variables de entorno (opcional)

Crea un archivo `.env` en la raíz del frontend:

```env
VITE_API_URL=http://localhost:3000/api
```

Para producción en Vercel:

```env
VITE_API_URL=https://tu-backend.railway.app/api
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📚 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linter ESLint
```

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Entry point
│   ├── TodoItem.jsx         # Componente de tarea individual
│   ├── components/          # Componentes reutilizables
│   ├── context/             # Context API (opcional)
│   ├── pages/               # Páginas
│   ├── assets/              # Imágenes, iconos
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── index.html               # HTML principal
├── vite.config.js           # Configuración Vite
├── postcss.config.js        # PostCSS config
├── vercel.json              # Config de Vercel
└── package.json
```

## 🚢 Despliegue en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. **Sube tu código a GitHub**

   ```bash
   git add .
   git commit -m "Preparar para despliegue"
   git push origin master
   ```

2. **Conecta con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Add New Project"
   - Importa tu repositorio de GitHub
   - Selecciona la carpeta `frontend` como Root Directory

3. **Configurar el proyecto**
   - Framework Preset: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Agregar variables de entorno**
   - En el dashboard de Vercel
   - Ve a Settings → Environment Variables
   - Agrega: `VITE_API_URL` con la URL de tu backend en Railway

5. **Desplegar**
   - Click en "Deploy"
   - Vercel desplegará automáticamente

### Opción 2: Desde CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar desde la carpeta frontend
cd frontend
vercel

# Para producción
vercel --prod
```

### Configuración Automática

El archivo `vercel.json` ya está configurado con:

- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrites para React Router

## 🔧 Conectar con Backend

### En desarrollo local:

1. Asegúrate de que el backend esté corriendo en `http://localhost:3000`

2. Crea `.env` en frontend:

   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

3. Actualiza `App.jsx` para usar la API:

   ```jsx
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

   // Ejemplo: Obtener tareas
   const fetchTasks = async () => {
     const response = await fetch(`${API_URL}/tasks`)
     const data = await response.json()
     setTareas(data.data)
   }
   ```

### En producción:

1. Despliega el backend en Railway (ver `backend/README.md`)

2. Obtén la URL del backend (ej: `https://tu-app.railway.app`)

3. En Vercel, configura la variable de entorno:

   ```
   VITE_API_URL=https://tu-app.railway.app/api
   ```

4. Redespliega en Vercel

## 🎨 Personalización

### Tailwind CSS

Edita `src/index.css` para customizar colores, fuentes, etc.

### Componentes

Los componentes están en `src/` y `src/components/`. Sigue las convenciones:

- PascalCase para nombres de componentes
- camelCase para funciones y variables
- PropTypes para validación de props

## 🐛 Solución de Problemas

### Error: "Module not found"

**Solución:**

```bash
rm -rf node_modules package-lock.json
npm install
```

### Error en build de Vercel

**Solución:**

1. Verifica que `Root Directory` sea `frontend`
2. Verifica que el build command sea `npm run build`
3. Verifica que no haya errores de ESLint

### CORS errors al conectar con backend

**Solución:**

1. Asegúrate de que el backend tenga CORS habilitado
2. Verifica la URL del backend en `.env`
3. En el backend, agrega tu dominio de Vercel a la whitelist de CORS

## 📱 Responsive Design

La aplicación está optimizada para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## ⚡ Optimizaciones

- Code splitting automático con Vite
- Lazy loading de componentes
- Compresión de assets
- Tree shaking automático

## 📄 Licencia

MIT

## 👤 Autor

**Sebastian Tique**

- GitHub: [@tiquesebastian](https://github.com/tiquesebastian)

---

**¿Preguntas?** Abre un [issue](https://github.com/tiquesebastian/todo-list-app-react/issues)
