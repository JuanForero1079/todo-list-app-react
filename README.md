Todo List App - React + Express + MongoDB

Aplicación fullstack para la gestión de tareas, con un frontend construido en React y un backend en Express.js utilizando una base de datos MongoDB.

Inicio Rápido
Prerrequisitos

Node.js 18 o superior

MongoDB (local o Atlas)

Instalación

1. Backend

cd backend
npm install
# Configurar archivo .env con la cadena de conexión de MongoDB
npm run dev


2. Frontend

  131  cd frontend
  132  npm run dev
  133  npm list tailwindcss
  134  npm run dev
  135  history

Estructura del Proyecto
todo-list-app/
├── backend/                 # API REST (Express.js + MongoDB)
│   ├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── package.json
│
└── frontend/                # Aplicación React (Vite + Tailwind)
    ├── src/
    └── package.json

API Endpoints
Método	Endpoint	Descripción
GET	/api/tasks	Obtener todas las tareas
GET	/api/tasks/:id	Obtener una tarea por ID
POST	/api/tasks	Crear una nueva tarea
PUT	/api/tasks/:id	Actualizar una tarea
PATCH	/api/tasks/:id/toggle	Alternar estado de completada
DELETE	/api/tasks/:id	Eliminar una tarea
DELETE	/api/tasks/completed/all	Eliminar todas las completadas
Despliegue

Frontend: Vercel

Backend: Railway

Base de datos: MongoDB Atlas

Las instrucciones de despliegue pueden incluirse en un archivo dedicado dentro de backend/docs/.

Documentación Adicional

La carpeta backend/docs/ puede contener documentación extendida, como:

Guía de despliegue

Referencia completa de la API

Ejemplos de consumo desde frontend

Notas de arquitectura

Resolución de errores comunes

Tecnologías Utilizadas

Frontend: React 19, Vite, Tailwind CSS
Backend: Express.js, Mongoose, Helmet, CORS
Base de datos: MongoDB