import TodoModel from '../models/TodoModel.js'

class TodoController {
  // GET /api/tasks - Obtener todas las tareas
  static async getAllTasks(req, res) {
    try {
      const tasks = await TodoModel.getAll()
      res.json({
        success: true,
        count: tasks.length,
        data: tasks,
      })
    } catch (error) {
      console.error('Error al obtener tareas:', error)
      res.status(500).json({
        success: false,
        message: 'Error al obtener las tareas',
        error: error.message,
      })
    }
  }

  // GET /api/tasks/:id - Obtener una tarea por ID
  static async getTaskById(req, res) {
    try {
      const { id } = req.params
      const task = await TodoModel.getById(id)

      if (!task) {
        return res.status(404).json({
          success: false,
          message: 'Tarea no encontrada',
        })
      }

      res.json({
        success: true,
        data: task,
      })
    } catch (error) {
      console.error('Error al obtener tarea:', error)
      res.status(500).json({
        success: false,
        message: 'Error al obtener la tarea',
        error: error.message,
      })
    }
  }

  // POST /api/tasks - Crear una nueva tarea
  static async createTask(req, res) {
    try {
      const { texto, completada } = req.body

      if (!texto || texto.trim() === '') {
        return res.status(400).json({
          success: false,
          message: 'El texto de la tarea es requerido',
        })
      }

      const newTask = await TodoModel.create({ texto, completada })

      res.status(201).json({
        success: true,
        message: 'Tarea creada exitosamente',
        data: newTask,
      })
    } catch (error) {
      console.error('Error al crear tarea:', error)
      res.status(500).json({
        success: false,
        message: 'Error al crear la tarea',
        error: error.message,
      })
    }
  }

  // PUT /api/tasks/:id - Actualizar una tarea
  static async updateTask(req, res) {
    try {
      const { id } = req.params
      const { texto, completada } = req.body

      if (!texto && completada === undefined) {
        return res.status(400).json({
          success: false,
          message: 'Debe proporcionar al menos un campo para actualizar',
        })
      }

      const updatedTask = await TodoModel.update(id, { texto, completada })

      if (!updatedTask) {
        return res.status(404).json({
          success: false,
          message: 'Tarea no encontrada',
        })
      }

      res.json({
        success: true,
        message: 'Tarea actualizada exitosamente',
        data: updatedTask,
      })
    } catch (error) {
      console.error('Error al actualizar tarea:', error)
      res.status(500).json({
        success: false,
        message: 'Error al actualizar la tarea',
        error: error.message,
      })
    }
  }

  // PATCH /api/tasks/:id/toggle - Alternar completada
  static async toggleTask(req, res) {
    try {
      const { id } = req.params
      const updatedTask = await TodoModel.toggleComplete(id)

      if (!updatedTask) {
        return res.status(404).json({
          success: false,
          message: 'Tarea no encontrada',
        })
      }

      res.json({
        success: true,
        message: 'Estado de tarea actualizado',
        data: updatedTask,
      })
    } catch (error) {
      console.error('Error al alternar tarea:', error)
      res.status(500).json({
        success: false,
        message: 'Error al alternar el estado de la tarea',
        error: error.message,
      })
    }
  }

  // DELETE /api/tasks/:id - Eliminar una tarea
  static async deleteTask(req, res) {
    try {
      const { id } = req.params
      const deleted = await TodoModel.delete(id)

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: 'Tarea no encontrada',
        })
      }

      res.json({
        success: true,
        message: 'Tarea eliminada exitosamente',
      })
    } catch (error) {
      console.error('Error al eliminar tarea:', error)
      res.status(500).json({
        success: false,
        message: 'Error al eliminar la tarea',
        error: error.message,
      })
    }
  }

  // DELETE /api/tasks/completed/all - Eliminar todas las tareas completadas
  static async deleteCompletedTasks(req, res) {
    try {
      const deletedCount = await TodoModel.deleteCompleted()

      res.json({
        success: true,
        message: `${deletedCount} tarea(s) completada(s) eliminada(s)`,
        count: deletedCount,
      })
    } catch (error) {
      console.error('Error al eliminar tareas completadas:', error)
      res.status(500).json({
        success: false,
        message: 'Error al eliminar tareas completadas',
        error: error.message,
      })
    }
  }
}

export default TodoController
