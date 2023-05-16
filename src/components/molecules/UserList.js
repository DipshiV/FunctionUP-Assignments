import React from "react";
export default function List({text,id,onSelect}){
    return( <div> {text}
      
            <button style={{ background: "red",width:"100px" ,borderRadius:"20px",marginLeft:"40px",marginTop:"20px" ,padding:"7px"}} onClick={() => {onSelect(id);}}>complete</button>
        
    </div> )
};