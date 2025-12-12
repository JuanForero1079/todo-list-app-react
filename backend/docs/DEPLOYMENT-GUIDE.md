# 🚀 Guía Completa de Despliegue

Esta guía te llevará paso a paso para desplegar tu aplicación de Todo List con:

- **Frontend**: Vercel
- **Backend**: Railway
- **Base de Datos**: Railway MySQL

---

## 📋 Índice

1. [Preparación](#1-preparación)
2. [Desplegar Base de Datos en Railway](#2-desplegar-base-de-datos-en-railway)
3. [Desplegar Backend en Railway](#3-desplegar-backend-en-railway)
4. [Desplegar Frontend en Vercel](#4-desplegar-frontend-en-vercel)
5. [Conectar Todo](#5-conectar-todo)
6. [Verificación](#6-verificación)
7. [Solución de Problemas](#7-solución-de-problemas)

---

## 1. Preparación

### ✅ Checklist de Pre-Despliegue

- [ ] Código subido a GitHub
- [ ] Cuenta en Railway creada ([railway.app](https://railway.app))
- [ ] Cuenta en Vercel creada ([vercel.com](https://vercel.com))
- [ ] Node.js 18+ instalado localmente
- [ ] Git instalado

### 📁 Estructura del Proyecto

```
todo-list-app-react/
├── frontend/          # App React (Vercel)
│   ├── src/
│   ├── public/
│   ├── vercel.json
│   └── package.json
├── backend/           # API Express (Railway)
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   └── server.js
│   ├── database/
│   │   └── schema.sql
│   └── package.json
└── README.md
```

### 🌐 Subir a GitHub

```bash
# Inicializar Git (si no lo has hecho)
git init
git add .
git commit -m "Preparar para despliegue"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/tu-usuario/tu-repo.git
git branch -M master
git push -u origin master
```

---

## 2. Desplegar Base de Datos en Railway

### Paso 1: Crear Proyecto en Railway

1. Ve a [railway.app](https://railway.app)
2. Click en **"Start a New Project"**
3. Selecciona **"Provision MySQL"**
4. Railway creará automáticamente una base de datos MySQL

### Paso 2: Obtener Credenciales

1. Click en el servicio **MySQL** en tu proyecto
2. Ve a la pestaña **"Variables"**
3. Verás estas variables (guárdalas):
   - `MYSQLHOST`
   - `MYSQLPORT`
   - `MYSQLUSER`
   - `MYSQLPASSWORD`
   - `MYSQLDATABASE`
   - `DATABASE_URL` (contiene todas las anteriores)

### Paso 3: Ejecutar Script SQL

**Opción A - Desde tu computadora:**

```bash
# Navega a la carpeta backend
cd backend

# Ejecuta el script (reemplaza con tus credenciales de Railway)
mysql -h <MYSQLHOST> -P <MYSQLPORT> -u <MYSQLUSER> -p<MYSQLPASSWORD> < database/schema.sql
```

**Opción B - Usando MySQL Workbench:**

1. Conecta a la base de datos de Railway:
   - Host: `<MYSQLHOST>`
   - Port: `<MYSQLPORT>`
   - Username: `<MYSQLUSER>`
   - Password: `<MYSQLPASSWORD>`

2. Abre `backend/database/schema.sql`
3. Ejecuta el script completo

**Opción C - Usando Railway CLI:**

```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Login
railway login

# Link al proyecto
railway link

# Abrir shell de MySQL
railway run mysql -u root -p

# Luego copia y pega el contenido de schema.sql
```

### ✅ Verificar

Ejecuta esta query en MySQL para verificar:

```sql
USE todo_db;
SHOW TABLES;
SELECT * FROM tasks;
```

Deberías ver la tabla `tasks` con datos de ejemplo.

---

## 3. Desplegar Backend en Railway

### Paso 1: Agregar Servicio Backend

1. En tu proyecto de Railway, click en **"New"**
2. Selecciona **"GitHub Repo"**
3. Autoriza Railway y selecciona tu repositorio
4. **Importante:** Configura el **Root Directory** como `backend`

### Paso 2: Configurar Variables de Entorno

Railway necesita saber la configuración. Ve a la pestaña **"Variables"** del servicio backend:

```env
NODE_ENV=production
PORT=3000
```

Railway automáticamente detectará `DATABASE_URL` del servicio MySQL conectado.

### Paso 3: Conectar MySQL al Backend

1. En Railway, ve a tu servicio **Backend**
2. Click en **"Settings"** → **"Service Variables"**
3. Click en **"Reference Variable"**
4. Selecciona el servicio **MySQL**
5. Selecciona `DATABASE_URL`

Esto permitirá que el backend acceda a la base de datos.

### Paso 4: Desplegar

Railway desplegará automáticamente. Verás los logs en tiempo real.

### Paso 5: Obtener URL del Backend

1. Ve a la pestaña **"Settings"** del servicio backend
2. En **"Domains"**, Railway generará una URL como:
   ```
   https://tu-backend.railway.app
   ```
3. **Guarda esta URL** - la necesitarás para el frontend

### ✅ Verificar

Prueba tu API:

```bash
# Health check
curl https://tu-backend.railway.app/health

# Obtener tareas
curl https://tu-backend.railway.app/api/tasks
```

Deberías recibir respuestas JSON exitosas.

---

## 4. Desplegar Frontend en Vercel

### Paso 1: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Add New Project"**
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite

### Paso 2: Configurar el Proyecto

**Importante: Configuración de Root Directory**

```
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Paso 3: Agregar Variables de Entorno

En el dashboard de Vercel:

1. Ve a **"Settings"** → **"Environment Variables"**
2. Agrega esta variable:

```
Name: VITE_API_URL
Value: https://tu-backend.railway.app/api
```

**Nota:** Reemplaza `tu-backend.railway.app` con la URL real de tu backend de Railway.

3. Aplica a todos los entornos (Production, Preview, Development)

### Paso 4: Desplegar

1. Click en **"Deploy"**
2. Vercel construirá y desplegará tu frontend
3. Obtendrás una URL como: `https://tu-app.vercel.app`

### ✅ Verificar

1. Abre `https://tu-app.vercel.app` en tu navegador
2. Deberías ver tu aplicación de Todo List
3. Prueba agregar, editar y eliminar tareas

---

## 5. Conectar Todo

### Actualizar Frontend para Usar el Backend

Si no lo has hecho, actualiza `frontend/src/App.jsx`:

```jsx
// Al inicio del archivo
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

// Ejemplo: Cargar tareas desde el backend
useEffect(() => {
  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_URL}/tasks`)
      const data = await response.json()
      if (data.success) {
        setTareas(data.data)
      }
    } catch (error) {
      console.error('Error al cargar tareas:', error)
    }
  }

  fetchTasks()
}, [])

// Ejemplo: Crear tarea
const agregarTareas = async () => {
  if (!input.trim()) return

  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        texto: input,
        completada: false,
      }),
    })

    const data = await response.json()
    if (data.success) {
      setTareas([...tareas, data.data])
      setInput('')
    }
  } catch (error) {
    console.error('Error al agregar tarea:', error)
  }
}
```

### Configurar CORS en Backend

Asegúrate de que `backend/src/server.js` tenga CORS configurado:

```javascript
import cors from 'cors'

// Permitir requests desde Vercel
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://tu-app.vercel.app',
    // Agrega más dominios si es necesario
  ],
  credentials: true,
}

app.use(cors(corsOptions))
```

### Redesplegar

```bash
# Frontend - commit y push
cd frontend
git add .
git commit -m "Conectar con backend"
git push

# Vercel desplegará automáticamente

# Backend - commit y push
cd ../backend
git add .
git commit -m "Configurar CORS"
git push

# Railway desplegará automáticamente
```

---

## 6. Verificación

### ✅ Checklist Final

- [ ] **MySQL en Railway**: Tabla `tasks` existe con datos
- [ ] **Backend en Railway**:
  - [ ] Health check funciona: `https://tu-backend.railway.app/health`
  - [ ] API tasks funciona: `https://tu-backend.railway.app/api/tasks`
  - [ ] Logs sin errores
- [ ] **Frontend en Vercel**:
  - [ ] App carga correctamente
  - [ ] Puedes crear tareas
  - [ ] Puedes marcar como completadas
  - [ ] Puedes eliminar tareas
  - [ ] No hay errores de CORS en la consola

### 🧪 Prueba Completa

1. Abre tu app en Vercel
2. Agrega 3 tareas nuevas
3. Marca 1 como completada
4. Elimina 1 tarea
5. Refresca la página
6. Verifica que los cambios persistan (se guardan en MySQL)

---

## 7. Solución de Problemas

### ❌ Error: "CORS policy blocked"

**Causa:** El backend no permite requests desde el dominio de Vercel.

**Solución:**

```javascript
// backend/src/server.js
app.use(
  cors({
    origin: ['https://tu-app.vercel.app', 'http://localhost:5173'],
    credentials: true,
  })
)
```

Commit y push para redesplegar.

---

### ❌ Error: "Failed to fetch" en frontend

**Causa:** URL del backend incorrecta.

**Solución:**

1. Verifica la variable `VITE_API_URL` en Vercel
2. Asegúrate de que sea `https://tu-backend.railway.app/api` (con `/api`)
3. Redespliega en Vercel

---

### ❌ Backend no se conecta a MySQL

**Causa:** Variables de entorno no configuradas.

**Solución:**

1. En Railway, ve al servicio Backend
2. Verifica que `DATABASE_URL` esté referenciada desde MySQL
3. Revisa los logs: `railway logs` o desde el dashboard

---

### ❌ Error: "Table 'tasks' doesn't exist"

**Causa:** Script SQL no ejecutado.

**Solución:**

```bash
# Ejecuta el script SQL de nuevo
mysql -h <MYSQLHOST> -P <MYSQLPORT> -u <MYSQLUSER> -p < backend/database/schema.sql
```

---

### ❌ Build falla en Vercel

**Causa:** Root directory incorrecto o dependencias faltantes.

**Solución:**

1. Verifica que Root Directory sea `frontend`
2. Verifica que `package.json` esté en `frontend/`
3. Revisa los logs de build en Vercel

---

### ❌ Railway no detecta la app

**Causa:** Root directory incorrecto.

**Solución:**

1. En Railway, Settings del servicio backend
2. Configura Root Directory como `backend`
3. Redespliega

---

## 🎉 ¡Listo!

Tu aplicación ahora está completamente desplegada:

- ✅ Frontend en Vercel
- ✅ Backend en Railway
- ✅ Base de Datos MySQL en Railway
- ✅ Todo conectado y funcionando

### 📱 Comparte tu App

Tu app está en vivo en:

```
https://tu-app.vercel.app
```

### 🔄 Actualizaciones Futuras

Cada vez que hagas push a GitHub:

- **Vercel** desplegará automáticamente el frontend
- **Railway** desplegará automáticamente el backend

---

## 📚 Recursos Adicionales

- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Railway](https://docs.railway.app)
- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

---

**¿Problemas?** Abre un [issue](https://github.com/tiquesebastian/todo-list-app-react/issues)

**Autor:** Sebastian Tique - [@tiquesebastian](https://github.com/tiquesebastian)
