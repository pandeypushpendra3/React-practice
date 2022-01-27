import React from 'react'
import "./expenses.css"
import {Card} from "./Card"
import {ExpenseItem} from './ExpenseItem'
export const Expenses = (props) => {
    return (
        <Card className="expenses">
        {
          props.item.map(expense=>(
            
            <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
          )

          )
        }
      
    
        </Card>
    )
}
