import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/Ri";


function Task({ tarea, complete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(tarea.title);
  const [editedDescription, setEditedDescription] = useState(tarea.description);

  const getStyle = () => {
    return {
      textDecoration: tarea.completed ? "line-through" : "none",
    };
  };

  const handleEdit = (event) => {
    event.stopPropagation();
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(tarea.id, editedTitle, editedDescription);
    setIsEditing(false);
    setIsEditing(false);
  };

  return (
    <div style={getStyle()} className="tareasStyle">
      {isEditing ? (
        <div>
          <input
            className="editarTareas"
            id="input"
            type="text"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
          />
          <input
            className="editarTareas"
            id="input"
            type="text"
            value={editedDescription}
            onChange={(event) => setEditedDescription(event.target.value)}
          />
          <button onClick={handleSave} className="botonGuardar">
            Save
          </button>
        </div>
      ) : (
        <div>

          <div className="title">
            <input
              id="nombre"
              type="checkbox"
              checked={tarea.completed}
              onChange={() => complete(tarea.id)}
              className="cajitaDeCheck"
            />
            {tarea.title}
          </div>

          <div className="description">
            {tarea.description}
            <FaEdit alt="editar" className="lapiz" onClick={handleEdit} />
            <RiDeleteBin6Line
              alt="borrar"
              className="papelera"
              onClick={() => deleteTask(tarea.id)}
            />
          </div>
         
        </div>
      )}
    </div>
  );
}

export default Task;