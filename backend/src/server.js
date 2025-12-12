import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import taskRoutes from './routes/taskRoutes.js'
import errorHandler from './middlewares/errorHandler.js'
import notFound from './middlewares/notFound.js'

// Cargar variables de entorno
dotenv.config()

// Crear aplicación Express
const app = express()
const PORT = process.env.PORT || 3000

// Middlewares de seguridad y parseo
app.use(helmet()) // Seguridad HTTP headers
app.use(cors()) // Habilitar CORS
app.use(express.json()) // Parsear JSON
app.use(express.urlencoded({ extended: true })) // Parsear URL-encoded

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`)
  next()
})

// Ruta de health check
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API de Lista de Tareas',
    version: '1.0.0',
    endpoints: {
      tasks: '/api/tasks',
    },
  })
})

app.get('/health', (req, res) => {
  res.json({
    success: true,
    status: 'OK',
    timestamp: new Date().toISOString(),
  })
})

// Rutas de la API
app.use('/api/tasks', taskRoutes)

// Manejo de rutas no encontradas
app.use(notFound)

// Manejo de errores
app.use(errorHandler)

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════╗
  ║   🚀 Servidor iniciado exitosamente   ║
  ╠═══════════════════════════════════════╣
  ║   Puerto: ${PORT.toString().padEnd(28)} ║
  ║   Entorno: ${(process.env.NODE_ENV || 'development').padEnd(27)} ║
  ║   URL: http://localhost:${PORT.toString().padEnd(18)} ║
  ╚═══════════════════════════════════════╝
  `)
})

// Manejo de errores no capturados
process.on('unhandledRejection', (err) => {
  console.error('❌ Error no manejado:', err)
  process.exit(1)
})

export default app
