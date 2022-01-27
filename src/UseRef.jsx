import {React,useRef,useState,useEffect} from "react";


const UseRef=()=>{

const [name,setName] = useState("");
const [counter,setCounter] = useState(0);

const inputEl = useRef("");
console.log(inputEl)
const previosCounterRef = useRef([]);
useEffect(()=>{
    previosCounterRef.current = counter;
},[counter]);


const resetInput=()=>{
    setName("");
    inputEl.current.focus();
};

    return (
        <>
<div>
<input  ref={inputEl} name="name" autoComplete="off" type="text" 
value={name}
    onChange={(e)=> setName(e.target.value)}/>
<button onClick={resetInput}>Reset</button>
</div>
<div>My name is {name}</div>
<div>
    <h1>Random Counter:{counter}</h1>
    {typeof previosCounterRef.current !== "undefined" && (
        <h2>Previos Counter :{previosCounterRef.current}</h2>
    )}
    <button onClick={(e)=>setCounter(Math.ceil(Math.random()*100))}>Generate Number </button>
</div>
        </>
    )
}

export {UseRef}