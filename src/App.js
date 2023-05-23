import React,{useState} from 'react';
import SearchBar from './components/Organisms/SearchBar';
import './App.css';
import DisplayResult from './components/molecules/DisplayResult';
function App() {
  const [results,setResults]=useState([])
  return (
    <div className="App">
    <div className='Search-bar'>
    <SearchBar setResults={setResults}/>
    <DisplayResult results={results}/>
    </div>
    </div>
  );
}
export default App;
