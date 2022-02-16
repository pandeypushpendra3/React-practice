import {React,useState,createContext} from "react";

export const AppContext = createContext();
// console.log(AppContext);

export const AppContextProvider =({children})=>{

    const [state,setState] = useState("")
    return (
        <AppContext.Provider value={{state}}>
            {children}
        </AppContext.Provider>
    )};