
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movies from './components/Movies';
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './components/Navbar';
import { Provider} from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/> 
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Cart' element={<Cart/>}> </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
     
    </div>
  );
}

export default App;
