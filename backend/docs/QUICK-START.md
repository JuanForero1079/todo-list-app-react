# 📋 Quick Start Guide - Todo List Fullstack

## 🚀 Instalación Local (10 minutos)

### Paso 1: Backend

```bash
cd backend
npm install
mysql -u root -p < database/schema.sql
npm run dev
```

✅ Backend en: `http://localhost:3000`

### Paso 2: Frontend

```bash
cd frontend
npm install
npm run dev
```

✅ Frontend en: `http://localhost:5173`

---

## 🌐 Despliegue en Producción (30 minutos)

### 1. Railway - MySQL

1. Ir a railway.app → New Project
2. Add MySQL
3. Copiar credenciales
4. Ejecutar: `mysql -h HOST -u USER -p < backend/database/schema.sql`

### 2. Railway - Backend

1. New → GitHub Repo
2. Root Directory: `backend`
3. Variables: `DATABASE_URL` (auto)
4. Copiar URL del backend

### 3. Vercel - Frontend

1. vercel.com → New Project
2. Root Directory: `frontend`
3. Env: `VITE_API_URL=https://tu-backend.railway.app/api`
4. Deploy

✅ App en vivo!

---

## 📚 API Endpoints

| Método | Endpoint                | Acción        |
| ------ | ----------------------- | ------------- |
| GET    | `/api/tasks`            | Listar tareas |
| POST   | `/api/tasks`            | Crear tarea   |
| PUT    | `/api/tasks/:id`        | Actualizar    |
| PATCH  | `/api/tasks/:id/toggle` | Toggle        |
| DELETE | `/api/tasks/:id`        | Eliminar      |

---

## 🔧 Comandos Útiles

```bash
# Backend
cd backend
npm run dev          # Desarrollo
npm start            # Producción

# Frontend
cd frontend
npm run dev          # Desarrollo
npm run build        # Build
npm run preview      # Preview

# Base de Datos
mysql -u root -p < backend/database/schema.sql
```

---

## 📁 Estructura

```
proyecto/
├── frontend/        # React + Vite → Vercel
├── backend/         # Express + MySQL → Railway
└── docs/            # Documentación
```

---

## 🐛 Problemas Comunes

### Error: Cannot connect to MySQL

```bash
# Verifica MySQL esté corriendo
net start MySQL80  # Windows
sudo service mysql start  # Linux
```

### Error: CORS blocked

```javascript
// backend/src/server.js
app.use(
  cors({
    origin: ['https://tu-app.vercel.app'],
  })
)
```

### Build falla en Vercel

- Root Directory: `frontend` ✓
- Build Command: `npm run build` ✓

---

## 📖 Documentación Completa

- **DEPLOYMENT-GUIDE.md** - Guía paso a paso completa
- **CHANGES-SUMMARY.md** - Resumen de cambios
- **backend/README.md** - Backend específico
- **frontend/README.md** - Frontend específico

---

## ✅ Checklist Pre-Despliegue

- [ ] MySQL script ejecutado
- [ ] Backend probado localmente (port 3000)
- [ ] Frontend probado localmente (port 5173)
- [ ] Código subido a GitHub
- [ ] Variables de entorno configuradas

---

**Made with ❤️ by Sebastian Tique**

📧 Issues: github.com/tiquesebastian/todo-list-app-react
