import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import styles from './SearchBar.module.css';
export default function SearchBar({ setResults }) {
    const [input, setInput] = useState("");
    const handleChange = (event) => {
       setInput(event.target.value);
       fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
       .then((response) => response.json())
       .then((json) => {
           const results = json.states.filter((state) => {
               return (
                event.target.value && state && state.state_name && state.state_name.toLowerCase().includes(event.target.value)
               );
           });
           console.log(results)
           setResults(results)
       });
    }
    return (
        <div className={styles.wrapper}>
            <FaSearch id={styles.icon} />
            <input value={input} placeholder="Search Google or type a url" onChange={handleChange} />
            <MdKeyboardVoice id={styles.voice} />
        </div>
    )
}