import express from 'express'
import TodoController from '../controllers/TodoController.js'

const router = express.Router()

/**
 * @route   GET /api/tasks
 * @desc    Obtener todas las tareas
 * @access  Public
 */
router.get('/', TodoController.getAllTasks)

/**
 * @route   GET /api/tasks/:id
 * @desc    Obtener una tarea por ID
 * @access  Public
 */
router.get('/:id', TodoController.getTaskById)

/**
 * @route   POST /api/tasks
 * @desc    Crear una nueva tarea
 * @access  Public
 */
router.post('/', TodoController.createTask)

/**
 * @route   PUT /api/tasks/:id
 * @desc    Actualizar una tarea
 * @access  Public
 */
router.put('/:id', TodoController.updateTask)

/**
 * @route   PATCH /api/tasks/:id/toggle
 * @desc    Alternar estado completada de una tarea
 * @access  Public
 */
router.patch('/:id/toggle', TodoController.toggleTask)

/**
 * @route   DELETE /api/tasks/:id
 * @desc    Eliminar una tarea
 * @access  Public
 */
router.delete('/:id', TodoController.deleteTask)

/**
 * @route   DELETE /api/tasks/completed/all
 * @desc    Eliminar todas las tareas completadas
 * @access  Public
 */
router.delete('/completed/all', TodoController.deleteCompletedTasks)

export default router
