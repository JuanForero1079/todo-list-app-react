// Middleware para manejo de errores
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err)

  // Error de validación de MySQL
  if (err.code === 'ER_DUP_ENTRY') {
    return res.status(400).json({
      success: false,
      message: 'Ya existe un registro con esos datos',
    })
  }

  // Error de conexión a la base de datos
  if (err.code === 'ECONNREFUSED' || err.code === 'ER_ACCESS_DENIED_ERROR') {
    return res.status(503).json({
      success: false,
      message: 'Error de conexión a la base de datos',
    })
  }

  // Error genérico
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Error interno del servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  })
}

export default errorHandler
