import React, { useState } from "react";

export default function TodoItem({ tarea, toggleComplete, eliminarTarea, guardarEdicion }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(tarea.texto || tarea.text || "");

  // Guardar la edición
  const guardar = () => {
    if (text.trim() === "") return; // No permitir texto vacío
    guardarEdicion(tarea._id || tarea.id, text); // Llamamos a la función del App.js
    setEdit(false);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md">
      <div className="flex items-center gap-4 flex-1">
        {/* Checkbox para marcar completada */}
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => toggleComplete(tarea._id || tarea.id)}
          className="w-5 h-5 accent-blue-600"
        />

        {/* Texto de la tarea o input para editar */}
        {edit ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && guardar()}
            className="border p-1 rounded w-full"
            autoFocus
          />
        ) : (
          <span
            className={`text-gray-700 font-medium truncate ${
              tarea.completada ? "line-through text-gray-400" : ""
            }`}
          >
            {tarea.texto}
          </span>
        )}
      </div>

      {/* Botones */}
      <div className="flex gap-2 ml-4">
        {edit ? (
          <button
            onClick={guardar}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Guardar
          </button>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
          >
            Editar
          </button>
        )}

        <button
          onClick={() => eliminarTarea(tarea._id || tarea.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
