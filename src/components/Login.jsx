import {React,useContext,useState} from "react";
import {AuthContext} from "../AuthContext"
export const Login = () => {
    const {handleToken} = useContext(AuthContext);
    const[name,setName] =useState("");
    const[password,setPassword] = useState("");
// const{handleToken} = useContext(AuthContext);


    return (
        <>
            <input type="text" placeholder="Enter your name" onChange={e=>setName(e.target.value)}/>
    <input type="password" placeholder="Enter your Password" onChange={e=>setPassword(e.target.value)}/>       
    <button onClick={()=>{
        fetch("https://reqres.in/api/login",{
          method:"POST",
          headers: {
              "Content-Type":"application/json",
          },
          body:JSON.stringify({email:name,password})}).then(d=>d.json()).then(({token})=>{handleToken(token)})
       }}>Login</button>
        </>
    )
}


