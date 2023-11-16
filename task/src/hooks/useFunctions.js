import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import tareasArray from "../tareas";

export default function useFunctions() {
  const [tareas, setTareas] = useState(tareasArray);

  const complete = (id) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completed: !tarea.completed };
        }
        return tarea;
      })
    );
  };


  const tareasIncompletas = () =>{
  return tareas.filter((tarea) => !tarea.completed).length;
  } 

  const deleteTask = (id) => {
    setTareas([...tareas].filter((tarea) => tarea.id !== id));
  };

  const clearAllTask = () => {
    setTareas([]);
  };

  const addNewTask = (newTitle, newDescription) => {
    let newItem = {
      id: uuidv4(),
      title: newTitle,
      description: newDescription,
      completed: false,
    };
    setTareas([...tareas, newItem]);
  };

  const editTask = (id, newTitle, newDescription) => {
    setTareas((tareaAnterior) =>
      tareaAnterior.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, title: newTitle, description: newDescription };
        }
        return tarea;
      })
    );
  };

  useEffect(() => {
    const storageTareas = localStorage.getItem("tareas");
    if (storageTareas) {
      setTareas(JSON.parse(storageTareas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log("Tareas guardadas en el local storage", tareas);
  }, [tareas]);

  return {
    tareas,
    complete,
    deleteTask,
    addNewTask,
    editTask,
    clearAllTask,
    tareasIncompletas
  };
}