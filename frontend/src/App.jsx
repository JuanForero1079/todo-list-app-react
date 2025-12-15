import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import TodoItem from "./TodoItem";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "http://localhost:3000/api/tasks";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTareas();
  }, []);

  const fetchTareas = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      if (result.success && Array.isArray(result.data)) {
        setTareas(result.data);
      } else {
        setTareas([]);
        toast.error("Error al cargar las tareas");
      }
    } catch (error) {
      console.error(error);
      setTareas([]);
      toast.error("Error al conectar con el servidor");
    }
  };

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
        if (result.success && result.data) {
          setTareas([...tareas, result.data]);
          setInput("");
          toast.success("Tarea agregada");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al agregar la tarea");
    } finally {
      setLoading(false);
    }
  };

  const guardarEdicion = async (id, nuevoTexto) => {
    if (!nuevoTexto.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto: nuevoTexto }),
      });
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data) {
          setTareas(
            tareas.map((t) => (t.id === id || t._id === id ? result.data : t))
          );
          toast.success("Tarea editada");
        } else {
          toast.error("No se pudo actualizar la tarea");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al editar la tarea");
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}/toggle`, { method: "PATCH" });
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data) {
          setTareas(
            tareas.map((t) => (t.id === id || t._id === id ? result.data : t))
          );
          toast.success(result.data.completada ? "Tarea completada" : "Tarea pendiente");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar la tarea");
    }
  };

  const eliminarTarea = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (response.ok) {
        setTareas(tareas.filter((t) => t.id !== id && t._id !== id));
        toast.success("Tarea eliminada");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar la tarea");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center p-6 transition-colors duration-500">
      <ToastContainer position="top-right" autoClose={2000} pauseOnHover />
      <h1 className="text-5xl font-extrabold text-blue-700 mb-8 text-center drop-shadow-lg">
        Lista de Tareas
      </h1>

      <div className="flex gap-4 w-full max-w-lg mb-8">
        <input
          type="text"
          placeholder="Escribe una tarea..."
          className="flex-1 p-4 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all text-gray-700 font-medium"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarTareas()}
        />
        <button
          onClick={agregarTareas}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all disabled:opacity-50"
        >
          {loading ? "..." : "Agregar"}
        </button>
      </div>

      <div className="w-full max-w-lg flex flex-col gap-4">
        {tareas.length === 0 ? (
          <p className="text-center text-gray-500 mt-10 italic animate-pulse">
            No hay tareas. ¡Agrega una!
          </p>
        ) : (
          tareas.map((tarea) => (
            <TodoItem
              key={tarea.id || tarea._id}
              tarea={tarea}
              toggleComplete={toggleComplete}
              eliminarTarea={eliminarTarea}
              guardarEdicion={guardarEdicion}
            />
          ))
        )}
      </div>
    </div>
  );
}
