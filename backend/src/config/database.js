import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

// Configuración de la conexión a MySQL
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'todo_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}

// Si estás en Railway y tienes DATABASE_URL
if (process.env.DATABASE_URL) {
  // Railway proporciona DATABASE_URL en formato mysql://user:pass@host:port/dbname
  const url = new URL(process.env.DATABASE_URL)
  dbConfig.host = url.hostname
  dbConfig.port = url.port || 3306
  dbConfig.user = url.username
  dbConfig.password = url.password
  dbConfig.database = url.pathname.substring(1) // Quita el '/' inicial
}

// Crear pool de conexiones
const pool = mysql.createPool(dbConfig)

// Probar conexión
const testConnection = async () => {
  try {
    const connection = await pool.getConnection()
    console.log('✅ Conexión a MySQL exitosa')
    connection.release()
  } catch (error) {
    console.error('❌ Error al conectar a MySQL:', error.message)
    process.exit(1)
  }
}

testConnection()

export default pool
