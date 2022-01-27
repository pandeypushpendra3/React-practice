import {React} from "react"
import "./app.css";
import {Switch ,Route} from "react-router-dom";
import {Crud} from "./crud/index";
import {Update} from "./crud/Update";
import {UseRef} from "./UseRef"
import {Usememo} from "./Usememo"
import {UseContext} from "./useContext";

function App() {


return (

<>
{/* <h3>Crud with json server</h3> */}
{/* <Switch>

<Route exact path ="/" component={Crud} />
<Route exact path ="/update/:id" component={Update} />
</Switch> */} 
{/* //for crud file opening practice with json-server */}

<div>Hello</div>
<h1>useRef</h1>
<UseRef/>
<h2>useMemo</h2>
<Usememo/>
<UseContext/>


</>
)}










export default App;
