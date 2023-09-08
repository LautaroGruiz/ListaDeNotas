import "../Styles/App.css";
import man from "../Image//PersonaEscritorio.png";
import TodoCounter from "./TodoCounter";
import { useState } from "react";
import TaskItem from "./TaskItem";

function App() {
  const [addedTask, setAddedTask] = useState("");

  const handleTaskChange = (e) => {
    e.preventDefault();
    setAddedTask(e.target.value);
  };
  const addTasks = () => {
    console.log(addedTask);
    setAddedTask('');
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
          <button onClick={addTasks} className="buttonCreateTask">
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
            <TaskItem />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
