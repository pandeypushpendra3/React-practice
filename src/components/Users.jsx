import {React,useState,useEffect} from 'react';
import {Link} from "react-router-dom";
export const Users = () => {
 const [users,setUsers] =  useState([]);

useEffect(()=>{

fetch("https://reqres.in/api/users").then(x=>x.json()).then((d)=>{
    setUsers(d.data);
});



},[])

return (<>
<div>Users</div>
<div style={{height:"300px"}}>{
    users.map((e,i)=><>
  <p key={i}><Link to= {`/user/${e.id}`}>users:{e.id}</Link></p>

</>)}

</div>
  </>
  )
  
  ;
};
