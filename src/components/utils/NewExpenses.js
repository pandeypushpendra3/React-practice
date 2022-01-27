import {React }from 'react'
import "./newExpenses.css"
import {ExpenseForm }from './ExpenseForm'
export const NewExpenses = (props) => {
  
        const saveExpenseDataHandler=(enteredExpenseData)=>{


            const expenseData={...enteredExpenseData,id:Math.random().toString()
            }
            props.onAddExpense(expenseData)
            console.log(expenseData)//we are getting random id with data

// console.log(enteredExpenseData)
        }

    
    
    return (
        <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            
        </div>
    )
}
