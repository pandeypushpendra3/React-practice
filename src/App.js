import {React,useState,useEffect} from "react"
import "./app.css";
import {  Link,Switch ,Route} from "react-router-dom";
import {Crud} from "./crud/index";
import {Update} from "./crud/Update";
import {UseRef} from "./UseRef"
import {Usememo} from "./Usememo"
import {UseContext} from "./useContext";
import {ReactReducer } from "./ReactReducer";
import { Header } from "./containers/Header";
import { Product } from "./containers/Product";
import { ProductDetail } from "./containers/ProductDetail";
import {First} from "./components/First"
import { AuthContext } from "./AuthContext";
import {useContext} from "react";
import { Homepage } from "./components/Homepage";
import { Aboutpage } from "./components/Aboutpage";
import { ContactUs } from "./components/ContactUs";
import { Users } from "./components/Users";
import {UserDetails} from "./components/UserDetails";
// const AppContext = createContext();
// console.log(AppContext);
import {Login} from "./components/Login";
function App() {
//   const [name,setName]= useState("")
// const[movie,setMovie] = useState([]);
// const[loading,setLoading]= useState(true);
//     const getData= async ()=>{
//       if(name.length>=5 || name.length<4 || name[0] <0 || name[0] >2){
//       console.log(name)
//         setLoading(false)

//       }
//       else if(name.length=== 4 || 
//         name[0] >=1 ||name[0]==2  ||name[1]==0||name[1]==9){
          
//         const res = await fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${name}`);
//         const d = await res.json();
//         console.log(d.data ) ;
//         setLoading(true)
//         setMovie(d.data);
//       }
//       // else if(){
//       //   setLoading(false)
//       // }

       
//       //  render();
// }
//     useEffect(()=>{
// getData();
// setLoading(true)
// // setName("")
//     },[])
//     // const render=()=>{
     
//     // }


  return(
    <div style={{margin:"auto",width:"500px",height:"500px",border:"1px solid black"}}>
  {/* <div  style={{margin:"auto",width:"500px",height:"50px",border:"1px solid black","display":"flex",justifyContent:"space-around"}} >
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact us</Link>
     <Link to="/users">Users</Link>
     <Link to="/login">Login</Link>

   </div>

       <Route exact path="/" >
       <Homepage/></Route>
                         
       <Route path="/about" >
       <Aboutpage/></Route>
       <Route path="/contact" >
       <ContactUs/></Route>  

  <Route path="/users" >
  <Users /></Route> 

  <Route  path="/user/:id">
  <UserDetails/>
  </Route>   

  <Route path="/login">
<Login/>
  </Route> */}
{/* {/* <input type="number" value={name} placeholder="Enter year" onChange={(e)=>setName(e.target.value)}/>
<button onClick={getData} >Search</button>
     <div>
       { loading?( movie.map((e,i)=>{
         console.log(movie)
        
          return (
            <div key={i}>
            <h3>{e.Title}</h3>
            {/* <h2>{e.length}</h2> */}
          {/* </div> */}
          {/* ) */}
         
        
       
      {/* //  })):( */}
         {/* <> */}
          {/* //  <div>Result not found</div> */}
         {/* </> */}
      {/* //  ) */}
     {/* </div> */}
     
     
     
     
     </div>
  )
}








export default App;
