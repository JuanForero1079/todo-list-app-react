-- ============================================
-- Script SQL para Base de Datos de Tareas
-- Sistema: MySQL
-- Propósito: Crear base de datos y tabla para app de tareas
-- ============================================

-- Crear base de datos
CREATE DATABASE IF NOT EXISTS todo_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Usar la base de datos
USE todo_db;

-- Eliminar tabla si existe (para desarrollo)
DROP TABLE IF EXISTS tasks;

-- Crear tabla de tareas
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  texto VARCHAR(500) NOT NULL,
  completada BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_completada (completada),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar datos de ejemplo (opcional)
INSERT INTO tasks (texto, completada) VALUES
('Configurar backend con Express', true),
('Conectar MySQL con Node.js', true),
('Crear endpoints REST', true),
('Configurar CORS', false),
('Desplegar en Railway', false),
('Conectar frontend con backend', false);

-- Verificar datos insertados
SELECT * FROM tasks;

-- ============================================
-- Consultas útiles para administración
-- ============================================

-- Ver todas las tareas
SELECT id, texto, completada, created_at FROM tasks ORDER BY created_at DESC;

-- Ver solo tareas pendientes
SELECT * FROM tasks WHERE completada = FALSE ORDER BY created_at DESC;

-- Ver solo tareas completadas
SELECT * FROM tasks WHERE completada = TRUE ORDER BY created_at DESC;

-- Contar tareas por estado
SELECT
  COUNT(*) as total,
  SUM(CASE WHEN completada = TRUE THEN 1 ELSE 0 END) as completadas,
  SUM(CASE WHEN completada = FALSE THEN 1 ELSE 0 END) as pendientes
FROM tasks;

-- Limpiar todas las tareas completadas
-- DELETE FROM tasks WHERE completada = TRUE;

-- Limpiar toda la tabla (usar con precaución)
-- TRUNCATE TABLE tasks;

-- ============================================
-- Consultas de optimización y mantenimiento
-- ============================================

-- Ver estructura de la tabla
DESCRIBE tasks;

-- Ver índices de la tabla
SHOW INDEX FROM tasks;

-- Ver información de la tabla
SHOW TABLE STATUS LIKE 'tasks';

-- Optimizar tabla (ejecutar periódicamente en producción)
-- OPTIMIZE TABLE tasks;

-- ============================================
-- INSTRUCCIONES PARA RAILWAY
-- ============================================
/*
1. Crea un nuevo proyecto en Railway (railway.app)

2. Agrega un servicio MySQL:
   - Click en "New" → "Database" → "Add MySQL"
   - Railway automáticamente crea la base de datos

3. Obtén las credenciales:
   - Ve a la pestaña "Variables" del servicio MySQL
   - Encontrarás: MYSQLHOST, MYSQLPORT, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE
   - También hay una variable DATABASE_URL que contiene todo

4. Ejecuta este script en Railway:
   Opción A - Desde Railway Dashboard:
   - Ve al servicio MySQL
   - Click en "Query" o "Console"
   - Pega y ejecuta este script

   Opción B - Desde tu computadora con MySQL Client:
   mysql -h <MYSQLHOST> -P <MYSQLPORT> -u <MYSQLUSER> -p<MYSQLPASSWORD> < schema.sql

   Opción C - Usando MySQL Workbench:
   - Conecta usando las credenciales de Railway
   - Abre este archivo y ejecútalo

5. Configura las variables de entorno en tu servicio backend de Railway:
   - DATABASE_URL (Railway la proporciona automáticamente)
   - O configura individualmente:
     - DB_HOST=<MYSQLHOST>
     - DB_PORT=<MYSQLPORT>
     - DB_USER=<MYSQLUSER>
     - DB_PASSWORD=<MYSQLPASSWORD>
     - DB_NAME=<MYSQLDATABASE>

6. El backend se conectará automáticamente usando estas variables
*/

-- ============================================
-- Usuario para la aplicación (opcional, para más seguridad)
-- ============================================
/*
-- Crear usuario específico para la app (ejecutar como root)
CREATE USER IF NOT EXISTS 'todo_app_user'@'%' IDENTIFIED BY 'password_seguro_aqui';

-- Dar permisos solo a la base de datos todo_db
GRANT SELECT, INSERT, UPDATE, DELETE ON todo_db.* TO 'todo_app_user'@'%';

-- Aplicar cambios
FLUSH PRIVILEGES;

-- Luego usa estas credenciales en el .env:
-- DB_USER=todo_app_user
-- DB_PASSWORD=password_seguro_aqui
*/

-- ============================================
-- ¡Script completado! ✅
-- ============================================
