import Task from "./Task";
import AddTask from "./AddTask";
import useFunctions  from "../hooks/useFunctions";
import ClearAll from "./ClearAll";
import TaskPending from "./TaskPending";


function TaskList() {
const {tareas, complete, deleteTask, addNewTask, editTask, clearAllTask, tareasIncompletas} = useFunctions()

  return (
    <div>
      <AddTask addNewTask={addNewTask} />
      {tareas.map((tarea) => (
        <Task
          key={tarea.id}
          tarea={tarea}
          complete={complete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
      <ClearAll clearAllTask={clearAllTask}/>
      <TaskPending tareasIncompletas={tareasIncompletas}/>

    </div>
  );
}

export default TaskList;