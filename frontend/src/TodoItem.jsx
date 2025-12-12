import React, { useState } from "react";

export default function TodoItem({ tarea, toggleComplete, eliminarTarea, editarTarea }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(tarea.texto || tarea.text || "");

  const guardar = () => {
    editarTarea(tarea._id || tarea.id, text);
    setEdit(false);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => toggleComplete(tarea._id || tarea.id)}
          className="w-5 h-5 accent-blue-600"
        />

        {edit ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-1 rounded"
          />
        ) : (
          <span className="text-gray-700 font-medium">
            {text}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {edit ? (
          <button onClick={guardar} className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Guardar
          </button>
        ) : (
          <button onClick={() => setEdit(true)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
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
