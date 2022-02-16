import {React,useEffect,useState,useContext} from 'react';
import {useParams,Redirect} from "react-router-dom";
import {AuthContext} from "../AuthContext";
 const UserDetails = () => {

  const{token} = useContext(AuthContext)
    const [users,setUsers] =  useState({});
const {id} = useParams();
console.log(id);
useEffect(()=>{

fetch(`https://reqres.in/api/users/${id}`)
.then(x=>x.json())
.then((d)=>{
    setUsers(d.data);
    console.log(d.data);
});
},[id]);
if(!token){
return <Redirect to="/login" />;
}
   return <div>
{ <>
        <p>{users.first_name}</p>
        <p>{users.last_name}</p>
        <img src={users.avatar} alt="kjhdsfjk" />
        </>
    
}

  </div>;
};
export {UserDetails}