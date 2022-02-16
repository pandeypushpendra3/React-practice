import {React} from "react";
import {useContext} from "react";
import {AppContext} from "../ApiContext"
export const Third=()=>{
    const storedValue = useContext(AppContext)
    return (
        <>
            <h1>Third component :{storedValue}</h1>
        </>
    )
}

// export const Second=()=>{

// console.log(storedValue)