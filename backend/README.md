# Backend - API REST para Lista de Tareas

Backend API REST construido con **Express.js** y **MySQL** para gestionar una lista de tareas.

## 🚀 Características

- ✅ API RESTful completa (CRUD)
- 🗄️ Base de datos MySQL
- 🔒 Seguridad con Helmet y CORS
- 📝 Validación de datos
- 🎯 Arquitectura MVC
- 🚢 Listo para desplegar en Railway

## 📋 Requisitos Previos

- Node.js 18+ instalado
- MySQL 8+ instalado (local o Railway)
- npm o yarn

## 🛠️ Instalación

### 1. Instalar dependencias

```bash
cd backend
npm install
```

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del backend:

```bash
cp .env.example .env
```

Edita `.env` con tus credenciales:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=todo_db
NODE_ENV=development
```

### 3. Configurar la base de datos

Ejecuta el script SQL:

```bash
mysql -u root -p < database/schema.sql
```

O desde MySQL Workbench/phpMyAdmin, ejecuta el contenido de `database/schema.sql`

### 4. Iniciar el servidor

**Desarrollo (con nodemon):**

```bash
npm run dev
```

**Producción:**

```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📚 Endpoints de la API

### Base URL: `http://localhost:3000/api`

| Método | Endpoint               | Descripción                    |
| ------ | ---------------------- | ------------------------------ |
| GET    | `/tasks`               | Obtener todas las tareas       |
| GET    | `/tasks/:id`           | Obtener una tarea por ID       |
| POST   | `/tasks`               | Crear una nueva tarea          |
| PUT    | `/tasks/:id`           | Actualizar una tarea           |
| PATCH  | `/tasks/:id/toggle`    | Alternar estado completada     |
| DELETE | `/tasks/:id`           | Eliminar una tarea             |
| DELETE | `/tasks/completed/all` | Eliminar todas las completadas |

### Ejemplos de Uso

#### 1. Obtener todas las tareas

```bash
curl http://localhost:3000/api/tasks
```

**Respuesta:**

```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "texto": "Configurar backend",
      "completada": false,
      "created_at": "2025-12-09T10:30:00.000Z",
      "updated_at": "2025-12-09T10:30:00.000Z"
    }
  ]
}
```

#### 2. Crear una tarea

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"texto": "Nueva tarea", "completada": false}'
```

#### 3. Actualizar una tarea

```bash
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"texto": "Tarea actualizada", "completada": true}'
```

#### 4. Alternar estado completada

```bash
curl -X PATCH http://localhost:3000/api/tasks/1/toggle
```

#### 5. Eliminar una tarea

```bash
curl -X DELETE http://localhost:3000/api/tasks/1
```

## 📁 Estructura del Proyecto

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # Configuración MySQL
│   ├── controllers/
│   │   └── TodoController.js    # Lógica de negocio
│   ├── models/
│   │   └── TodoModel.js         # Modelo de datos
│   ├── routes/
│   │   └── taskRoutes.js        # Rutas de la API
│   ├── middlewares/
│   │   ├── errorHandler.js      # Manejo de errores
│   │   └── notFound.js          # Ruta 404
│   └── server.js                # Entry point
├── database/
│   └── schema.sql               # Script SQL
├── .env.example                 # Ejemplo de variables
├── .gitignore
├── package.json
└── README.md
```

## 🚢 Despliegue en Railway

### Paso 1: Crear cuenta en Railway

Ve a [railway.app](https://railway.app) y crea una cuenta.

### Paso 2: Crear proyecto

1. Click en "New Project"
2. Selecciona "Deploy from GitHub repo"
3. Autoriza Railway y selecciona tu repositorio

### Paso 3: Agregar MySQL

1. En tu proyecto, click en "New"
2. Selecciona "Database" → "Add MySQL"
3. Railway creará automáticamente la base de datos

### Paso 4: Ejecutar el script SQL

**Opción A - Desde Railway Dashboard:**

```bash
# Obtén las credenciales de MySQL del dashboard de Railway
# Luego ejecuta desde tu terminal:
mysql -h <MYSQLHOST> -P <MYSQLPORT> -u <MYSQLUSER> -p<MYSQLPASSWORD> < database/schema.sql
```

**Opción B - Usando Railway CLI:**

```bash
# Instala Railway CLI
npm i -g @railway/cli

# Login
railway login

# Conecta al proyecto
railway link

# Ejecuta el script
railway run mysql -u root -p < database/schema.sql
```

### Paso 5: Configurar variables de entorno

Railway automáticamente configura `DATABASE_URL`, pero puedes verificar:

1. Ve a tu servicio backend
2. Click en "Variables"
3. Verifica que existan:
   - `DATABASE_URL` (automático de Railway)
   - `NODE_ENV=production`
   - `PORT` (Railway lo asigna automáticamente)

### Paso 6: Desplegar

Railway despliega automáticamente cada push a tu rama principal.

Para verificar:

```bash
# Ver logs
railway logs

# Abrir la app
railway open
```

## 🔧 Variables de Entorno

| Variable     | Descripción                      | Requerida | Default     |
| ------------ | -------------------------------- | --------- | ----------- |
| PORT         | Puerto del servidor              | No        | 3000        |
| DB_HOST      | Host de MySQL                    | Sí\*      | localhost   |
| DB_PORT      | Puerto de MySQL                  | No        | 3306        |
| DB_USER      | Usuario de MySQL                 | Sí\*      | root        |
| DB_PASSWORD  | Contraseña de MySQL              | Sí\*      | -           |
| DB_NAME      | Nombre de la base de datos       | Sí\*      | todo_db     |
| DATABASE_URL | URL completa de MySQL            | Sí\*\*    | -           |
| NODE_ENV     | Entorno (development/production) | No        | development |

\*Requeridas en desarrollo local
\*\*Requerida en Railway (automática)

## 🧪 Probar la API

### Usando Postman

1. Importa la colección desde `postman_collection.json` (si existe)
2. O crea requests manualmente usando los endpoints listados arriba

### Usando cURL

```bash
# Health check
curl http://localhost:3000/health

# Obtener tareas
curl http://localhost:3000/api/tasks

# Crear tarea
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"texto":"Mi primera tarea","completada":false}'
```

### Usando VS Code REST Client

Instala la extensión "REST Client" y crea un archivo `api.http`:

```http
### Health Check
GET http://localhost:3000/health

### Obtener todas las tareas
GET http://localhost:3000/api/tasks

### Crear tarea
POST http://localhost:3000/api/tasks
Content-Type: application/json

{
  "texto": "Nueva tarea desde REST Client",
  "completada": false
}
```

## 🐛 Solución de Problemas

### Error: "ECONNREFUSED" al conectar a MySQL

**Solución:**

1. Verifica que MySQL esté corriendo:

   ```bash
   # Windows
   net start MySQL80

   # Linux/Mac
   sudo systemctl start mysql
   ```

2. Verifica las credenciales en `.env`
3. Verifica que el puerto 3306 esté disponible

### Error: "ER_ACCESS_DENIED_ERROR"

**Solución:**

1. Verifica usuario y contraseña en `.env`
2. Asegúrate de que el usuario tenga permisos:
   ```sql
   GRANT ALL PRIVILEGES ON todo_db.* TO 'tu_usuario'@'localhost';
   FLUSH PRIVILEGES;
   ```

### Error: "Table 'tasks' doesn't exist"

**Solución:**

1. Ejecuta el script SQL:
   ```bash
   mysql -u root -p < database/schema.sql
   ```

## 📄 Licencia

MIT

## 👤 Autor

**Sebastian Tique**

- GitHub: [@tiquesebastian](https://github.com/tiquesebastian)

---

**¿Preguntas?** Abre un [issue](https://github.com/tiquesebastian/todo-list-app-react/issues)
