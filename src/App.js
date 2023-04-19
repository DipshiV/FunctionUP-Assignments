
import './App.css';
import { Button } from './button.js';
import {ReactBenefits} from './react-benefits.js'
import {Logo} from './react_logo.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo/>
        <ReactBenefits/>
        <Button/>
    
      </header>
    </div>
  );
}

export default App;
