import {React} from "react";
import {CounterContext} from "./CounterContext";
function CComponent({counter}){



    return (
<div style={{"border":"1px solid black"}}>
  <h1>class Component</h1>
  <h2>{counter}</h2>
  <CounterContext.Consumer>
{(value)=>{
    return <h2>{value}</h2>
}}

  </CounterContext.Consumer>
  <hr></hr>
</div>
)
}

export {CComponent}