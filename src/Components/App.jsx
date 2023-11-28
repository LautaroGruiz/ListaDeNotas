import "../Styles/App.css"
import man from "../Image/PersonaEscritorio.png";
import  { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

function App() {
  const [addedTask, setAddedTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [currentTasks, setCurrentTasks] = useState([]);
  const [searchString, setSearchString] = useState('');

  const handleTaskChange = (e) => {
    e.preventDefault();
    setAddedTask(e.target.value);
  };

  const addTask = () => {
    if (addedTask.trim() !== '') {
      const updatedTasks = [...tasks, addedTask];
      setTasks(updatedTasks);
      setAddedTask('');
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const updateCurrentTasks = (tasksArray, filter) => {
    const filteredTasks = tasksArray.filter(
      (task) =>
        task.toLowerCase().includes(filter.toLowerCase())
    );
    setCurrentTasks(filteredTasks);
  };

  const handleChangeSearchString = (e) => {
    setSearchString(e.target.value);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    updateCurrentTasks(storedTasks, searchString);
  }, [searchString]);

  useEffect(() => {
    updateCurrentTasks(tasks, searchString);
  }, [searchString, tasks]);

  return (
    <>
      <main className="mainApp">
        <section className="contenedorCrearTasks">
          <h2 className="CreateNewTask">Crea una nota</h2>
          <div className="cajaInputAgregarTask">
            <label className="tittleTaskName">Nombre de la nota</label>
            <input
              placeholder="Escribe aqui"
              className="AddTaksInput"
              value={addedTask}
              onChange={handleTaskChange}
            />
          </div>
          <button onClick={addTask} className="buttonCreateTask">
            Crear nota
          </button>
          <img className="imageMen" src={man} alt="Man adding a task" />
        </section>
        <section className="contenedorTasks">
          <h1 className="tittleYourTasks">Tus notas</h1>
          <h3 className="completeTittle">Aqui veras las notas que agregues</h3>
          <div className="contenedorInput">
            <input
              className="inputSearchTasks"
              type="text"
              onChange={handleChangeSearchString}
              value={searchString}
            />
            <label>Buscar</label>
          </div>
          <div className="boxComponentTasks">
            {currentTasks.map((taskText, index) => (
              <TaskItem key={index} taskText={taskText} onDelete={() => deleteTask(index)} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
