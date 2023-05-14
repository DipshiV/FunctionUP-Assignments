import React,{useState,useEffect} from 'react';
import CreateTask from './components/Molecules/Inputform';
import Title from './components/Atoms/Header';
import './App.css';
import ToDoList from './components/Organisms/Todo';
function App() {
 
  const [todos,setTodos]=useState([]);
  const [tasksRemaining, setTasksRemaining] = useState(0);

  useEffect(() => { setTasksRemaining(todos.filter(task => !task.completed).length) }, [todos]);
const completeTask = index => {
    const newTasks = [...todos];
    newTasks[index].completed = true;
    setTodos(newTasks);
};
const addTask = title => {
  const newTasks = [...todos, { title, completed: false }];
  setTodos(newTasks);
};


const deleteTask = index => {
    const newTasks = [...todos];
    newTasks.splice(index, 1);
    setTodos(newTasks);
};
  return ( 
  <div className='container'>
  <div className='app-wrapper'>
  <div><Title/></div>
  <div className="header" >Pending tasks ({tasksRemaining})</div>
  <div className='task'>
  {todos.map((todo, index) => (
   <ToDoList
   todos={todo}
   index={index}
   completeTask={completeTask}
   deleteTask={deleteTask}
   key={index}
   />
   
))}
   </div>
   <div className='create-task'>
   <CreateTask  addTask={addTask}/>
   </div>
    </div>
    </div>
    
  ); }

export default App;
