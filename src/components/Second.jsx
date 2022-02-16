import {React} from "react";
import {Third} from "./Third" 
import {useContext} from "react";
import {AppContext} from "../ApiContext"
export const Second=()=>{
const storedValue = useContext(AppContext)
console.log(storedValue)
return (
        <>
            <h1>Second</h1>
            <Third />
        </>
    )
}