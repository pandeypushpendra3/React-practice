import {React,useState,useContext} from "react"
import {FComponent} from "./FComponent";
// import {CComponent} from "./CComponent"
import {CounterContext} from "./CounterContext"
const UseContext=()=>{
const [counter ,setCounter] = useState(0);
const increment=()=>{
    setCounter(counter +1);
}
const decrement=()=>{
    if(counter>0)
    setCounter(counter -1);
   
}


    return (
        <>
   <h2>useContext</h2>
   <h2>{counter}</h2>
   <button onClick={increment}>Increment</button>
   <button onClick={decrement}>Decrement
   </button>
<hr></hr>
<CounterContext.Provider value ={{counter,setCounter}}>
 <FComponent  />

</CounterContext.Provider>



        </>
    )


}
export {UseContext}