import {Provider} from 'react-redux';
import store from './redux/Store';
import AddToDo from './components/AddToDo';
import './App.css';

import TodoList from './components/ToDoList';

function App() {
  return (
    <Provider store={store}>
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
    <AddToDo/>
    <TodoList/>
    </div>
    </Provider>
  );
}

export default App;
