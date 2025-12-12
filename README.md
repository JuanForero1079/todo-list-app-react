# 📝 Todo List App - React + Express + MySQL

Aplicación fullstack de gestión de tareas con frontend en React y backend en Express.js con MySQL.

---

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+
- MySQL 8.0+

### Instalación

**1. Backend:**
```bash
cd backend
npm install
# Configurar .env con credenciales de MySQL
mysql -u root -p < database/schema.sql
npm run dev
```

**2. Frontend:**
```bash
cd frontend
npm install
npm run dev
```

---

## 📁 Estructura del Proyecto

```
todo-list-app-react/
├── backend/           # API REST (Express.js + MySQL)
│   ├── src/
│   ├── database/
│   ├── docs/         # Documentación completa
│   └── package.json
│
└── frontend/         # App React (Vite + Tailwind)
    ├── src/
    └── package.json
```

---

## 🔌 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tasks` | Obtener todas las tareas |
| POST | `/api/tasks` | Crear nueva tarea |
| PUT | `/api/tasks/:id` | Actualizar tarea |
| PATCH | `/api/tasks/:id/toggle` | Alternar estado |
| DELETE | `/api/tasks/:id` | Eliminar tarea |

---

## 🌐 Despliegue

- **Frontend**: Vercel
- **Backend + MySQL**: Railway

Ver `backend/docs/DEPLOYMENT-GUIDE.md` para instrucciones completas.

---

## 📚 Documentación Completa

Consulta la carpeta `backend/docs/` para:
- Guía de despliegue detallada
- Documentación de la API
- Ejemplos de uso
- Solución de problemas

---

## 🛠️ Tecnologías

**Frontend**: React 19, Vite 7, Tailwind CSS 4
**Backend**: Express.js 4, MySQL2, Helmet, CORS
**Database**: MySQL 8.0+
