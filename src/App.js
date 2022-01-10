import {React,useState} from "react"

// import './App.css';
import {Expenses} from "./components/Expenses";
import {NewExpenses} from "./components/NewExpenses"
let Dummy_Expense =[{
  id:"e1",
  title:"school Fee",
  amount:250,
  date:new Date(2022,1,1)
},
{
  id:"e2",
  title:"Books",
  amount:230,
  date:new Date(2021,12,12)
},

{
id:"e3",
title:"Basket",
amount:200,
date:new Date(2021,12,2)
}
,
{
  id:"e2",
  title:"Books",
  amount:230,
  date:new Date(2021,12,12)
},];


function App() {

const [expenses,setExpenses]= useState(Dummy_Expense)
const addExpenseHandler=
(expense)=>{
  const updatedExpense=[expense,...expenses];
  setExpenses(updatedExpense)
} 

return (
<div>
     <NewExpenses onAddExpense={addExpenseHandler} />
     <Expenses item ={expenses}/>
    </div>
  );
}

export default App;
