import {React,useState,useEffect} from "react";
import{FormElement} from "./Form"
import {updateName,getName} from"./api";

import {Loading} from "./Loading"

const Update =({history,match})=>{
    const [name,setName] = useState("");
const [loading,setLoading] = useState(false);
const [success,setSuccess] = useState("")
useEffect(()=>{
loadName()
},[])
const loadName=()=>{
getName(match.params.id).then((d)=>{
setName(d.data.name)
});
}

const handleSubmit=(e)=>{
e.preventDefault();
setLoading(true);
updateName(match.params.id,{name}).then((res)=>{
setLoading(false);
setName("");
setSuccess(`${name} is updated`);
// history.push("/");
}).catch((err)=>{
    setLoading(false);
    if(err.response.status== 400){
        setSuccess(`${err}is showing`)
    }
})



}
return (
    <>
        <div>
                    {loading?<Loading/>:(<h4>Update Name</h4>)}
                <FormElement handleSubmit={handleSubmit}
name={name} setName={setName}/>
                
                </div>
          <h4>{success}</h4>
          <button onClick={()=>history.push("/")}> Click to home </button>
    </>
)
}


export {Update}