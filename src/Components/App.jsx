import "../Styles/App.css";
import man from "../Image//PersonaEscritorio.png"

function App() {
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
              type={"text"}
              value=""
            />
          </div>
          <button className="buttonCreateTask">Create task</button>
          <img className="imageMen" src={man} alt="Man adding a task" />
        </section>
        <section className="contenedorTasks">
          <h1 className="tittleYourTasks">Your tasks</h1>
          <h3 className="completeTittle">Completed</h3>
          <div className="contenedorInput">
            <input className="inputSearchTasks" type="search" name="" id="" />
            <label>Search</label>
          </div>
          <div className="boxComponentTasks"></div>
        </section>
      </main>
    </>
  );
}

export default App;
