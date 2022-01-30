import {React,useState,useReducer} from "react";


const initialState= 0;


function reducer(state,action){


// return two things state and action state shiw the data 
// in state and action show the dispatch our action;

switch (action,type) {
    case "increment":
        return state +1;
     
        case "decrement":
        return state -1;
        default :
        return "error"
}

}
const ReactReducer=()=>{

// const [counter,setCounter] = useState(0);
const [state,dispatch] = useReducer(reducer,initialState)
// const increment=()=>{
//     setCounter(counter +1)
// }
// const decrement=()=>{
//     setCounter(counter -1)
// }


    return (
        <>
        <h2 style={{textAlign:"center"}}>Hello</h2>
        <h1>useReducer Hook</h1>
        <h2>{state}</h2>
        <button onClick={()=>dispatch({type:"increment"})}>Imcrement</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
        {/* <button onClick={()=>setCounter(0)}>Reset</button> */}
        </>
        )

}

export {ReactReducer}