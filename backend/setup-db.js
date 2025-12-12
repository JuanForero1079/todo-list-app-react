import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config({ path: ".env.railway" });

async function setupDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log("✅ Conectado a Railway MySQL");

    // Crear tabla
    await connection.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        texto VARCHAR(500) NOT NULL,
        completada BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_completada (completada),
        INDEX idx_created_at (created_at)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    console.log('✅ Tabla "tasks" creada');

    // Insertar datos de ejemplo
    await connection.query(`
      INSERT INTO tasks (texto, completada) VALUES
      ('Configurar backend con Express', true),
      ('Conectar MySQL con Node.js', true),
      ('Crear endpoints REST', true),
      ('Configurar CORS', false),
      ('Desplegar en Railway', false),
      ('Conectar frontend con backend', false)
    `);

    console.log("✅ Datos de ejemplo insertados");

    // Verificar
    const [rows] = await connection.query("SELECT * FROM tasks");
    console.log("\n📊 Tareas en la base de datos:");
    console.table(rows);

    await connection.end();
    console.log("\n✅ Setup completado!");
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

setupDatabase();
