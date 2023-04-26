import { Fragment,useState } from "react";
export default function Counter(){
    const [count , setCount] = useState(1)
   
    function handleIncrement () {
        setCount(count+1);
    
    }
        
    function handleDecrement (){
        if(count>0){
        setCount(count-1);
        }
    }
    const mystyle1 = {
        color: "white",
        backgroundColor: "Green",
        padding: "10px",
        fontFamily: "Arial",
        width: "100px",
        
        
      };
    const mystyle2 = {
        color: "white",
        backgroundColor: "Red",
        padding: "10px",
        fontFamily: "Arial",
        width: "100px",
        marginLeft: "20px"
        
      };
return(<Fragment>
   
    <h3>count:{count}</h3>
  
    <button style={mystyle1} onClick={handleIncrement}>Increment</button>
    <button style={mystyle2} onClick={handleDecrement}>Decrement</button>
    
    </Fragment>
  
);
}

