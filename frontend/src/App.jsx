import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TodoItem from "./TodoItem";

const API_URL =
  "https://todo-list-app-react-production.up.railway.app/api/tasks";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Cargar tareas al inicio
  useEffect(() => {
    fetchTareas();
  }, []);

  // Obtener todas las tareas del backend
  const fetchTareas = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      // El backend devuelve { success, count, data }
      if (result.success && Array.isArray(result.data)) {
        setTareas(result.data);
      } else {
        console.error("Error en la respuesta:", result);
        setTareas([]);
        toast.error("Error al cargar las tareas");
      }
    } catch (error) {
      console.error("Error al cargar tareas:", error);
      setTareas([]);
      toast.error("Error al conectar con el servidor");
    }
  };

  // Agregar nueva tarea
  const agregarTareas = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto: input }),
      });

      if (response.ok) {
        const result = await response.json();
        // El backend devuelve { success, data: nuevaTarea }
        if (result.success && result.data) {
          setTareas([...tareas, result.data]);
          setInput("");
          toast.success("Tarea agregada");
        }
      }
    } catch (error) {
      console.error("Error al agregar tarea:", error);
      toast.error("Error al agregar la tarea");
    } finally {
      setLoading(false);
    }
  };

  // Alternar completada/pendiente
  const toggleComplete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}/toggle`, {
        method: "PATCH",
      });

      if (response.ok) {
        const result = await response.json();
        // El backend devuelve { success, data: tareaActualizada }
        if (result.success && result.data) {
          setTareas(
            tareas.map((tarea) => (tarea.id === id ? result.data : tarea))
          );
          toast.success(
            result.data.completada ? "Tarea completada" : "Tarea pendiente"
          );
        }
      }
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
      toast.error("Error al actualizar la tarea");
    }
  };

  // Eliminar tarea
  const eliminarTarea = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
        toast.success("Tarea eliminada");
      }
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
      toast.error("Error al eliminar la tarea");
    }
  };

  // Editar tarea
  const editarTarea = async (id) => {
    const tareaAEditar = tareas.find((t) => t.id === id);
    if (tareaAEditar) {
      setInput(tareaAEditar.texto);
      await eliminarTarea(id);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 ">
      <h1 className="text-3xl font-bold mb-5 text-center">
        MI LISTA DE TAREAS REACT
      </h1>
      <div className="flex gap-3 mb-4">
        <input
          placeholder="Escribe una tarea"
          className="flex-1 p-3 shadow-md rounded"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && agregarTareas()}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={agregarTareas}
          disabled={loading}
        >
          {loading ? "..." : "agregar tarea"}
        </button>
      </div>
      <div>
        {tareas.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">
            No hay tareas. ¡Agrega una!
          </p>
        ) : (
          tareas.map((tarea) => (
            <TodoItem
              key={tarea.id}
              tarea={tarea}
              toggleComplete={toggleComplete}
              eliminarTarea={eliminarTarea}
              editarTarea={editarTarea}
            />
          ))
        )}
      </div>
    </div>
  );
}
