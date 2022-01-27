import {React,useContext} from "react";
import {CounterContext} from "./CounterContext";

function FComponent(){

const {counter,setCounter} = useContext(CounterContext);
// console.log(useContext(Cou))
    return (
<div style={{"border":"1px solid black"}}>
  <h1>Function Component</h1>
  <h2>{counter}</h2>
  <button onClick={()=>setCounter(counter +1)}>Increment</button>
  <hr></hr>
  <FChild />
</div>
)
}

const FChild=()=>{
    const  {counter ,setCounter}  = useContext(CounterContext);
    const decrement=()=>{
        if(counter>0)
        setCounter(counter -1);
       
    }
    return (
        <div style={{"border":"1px solid black"}}>
            <h1>Function child component</h1>
            <h2>{counter}</h2>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export {FComponent}