import pool from '../config/database.js'

class TodoModel {
  // Obtener todas las tareas
  static async getAll() {
    const [rows] = await pool.query(
      'SELECT * FROM tasks ORDER BY created_at DESC'
    )
    return rows
  }

  // Obtener una tarea por ID
  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id])
    return rows[0]
  }

  // Crear una nueva tarea
  static async create(taskData) {
    const { texto, completada = false } = taskData
    const [result] = await pool.query(
      'INSERT INTO tasks (texto, completada) VALUES (?, ?)',
      [texto, completada]
    )

    return {
      id: result.insertId,
      texto,
      completada,
      created_at: new Date(),
    }
  }

  // Actualizar una tarea
  static async update(id, taskData) {
    const { texto, completada } = taskData
    const fields = []
    const values = []

    if (texto !== undefined) {
      fields.push('texto = ?')
      values.push(texto)
    }
    if (completada !== undefined) {
      fields.push('completada = ?')
      values.push(completada)
    }

    if (fields.length === 0) {
      throw new Error('No hay campos para actualizar')
    }

    fields.push('updated_at = NOW()')
    values.push(id)

    const query = `UPDATE tasks SET ${fields.join(', ')} WHERE id = ?`
    const [result] = await pool.query(query, values)

    if (result.affectedRows === 0) {
      return null
    }

    return await this.getById(id)
  }

  // Alternar estado completada
  static async toggleComplete(id) {
    const [result] = await pool.query(
      'UPDATE tasks SET completada = NOT completada, updated_at = NOW() WHERE id = ?',
      [id]
    )

    if (result.affectedRows === 0) {
      return null
    }

    return await this.getById(id)
  }

  // Eliminar una tarea
  static async delete(id) {
    const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id])

    return result.affectedRows > 0
  }

  // Eliminar todas las tareas completadas
  static async deleteCompleted() {
    const [result] = await pool.query(
      'DELETE FROM tasks WHERE completada = true'
    )

    return result.affectedRows
  }
}

export default TodoModel
