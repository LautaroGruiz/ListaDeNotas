import "../Styles/App.css";
import man from "../Image//PersonaEscritorio.png";
import TodoCounter from "./TodoCounter";
import { useState } from "react";
import TaskItem from "./TaskItem";

function App() {
  const [addedTask, setAddedTask] = useState("");
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas

  const handleTaskChange = (e) => {
    e.preventDefault();
    setAddedTask(e.target.value);
  };

  const addTask = () => {
    if (addedTask.trim() !== "") {
      // Verifica que la tarea no esté vacía
      setTasks([...tasks, addedTask]); // Agrega la tarea al estado de tareas
      setAddedTask(""); // Limpia el input
    }
  };
  return (
    <>
      <main className="mainApp">
        <section className="contenedorCrearTasks">
          <h2 className="CreateNewTask">Create new task</h2>
          <div className="cajaInputAgregarTask">
            <label className="tittleTaskName">Task name</label>
            <input
              placeholder="Add the task"
              className="AddTaksInput"
              value={addedTask}
              onChange={handleTaskChange}
            />
          </div>
          <button onClick={addTask} className="buttonCreateTask">
            Create task
          </button>
          <img className="imageMen" src={man} alt="Man adding a task" />
        </section>
        <section className="contenedorTasks">
          <h1 className="tittleYourTasks">Your tasks</h1>
          <TodoCounter />
          <div className="contenedorInput">
            <input
              className="inputSearchTasks"
              type="search"
              onChange={(event) => {
                console.log(event.target.value);
              }}
              name=""
              id=""
            />
            <label>Search</label>
          </div>
          <div className="boxComponentTasks">
            {/* Mapea las tareas y crea un componente TaskItem para cada una */}
            {tasks.map((taskText, index) => (
              <TaskItem key={index} taskText={taskText} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
