import React , {useState} from "react";
import B from "./B";
import myContext from "./Context";

function A(props) {
    
    const[state,setState] =useState("")
    const [data,setData] =useState("")

  return (
    <div>
      <h2>A Comp</h2>
      <input type="text" placeholder="Enter Text"  onChange={(e)=>{setState(e.target.value)}}/>
      <button onClick={()=>{setData(state)}}>Send Data</button>
      <hr></hr>
      <myContext.Provider value={data}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
