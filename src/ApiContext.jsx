import {createContext} from "react";

const AppContext = createContext();
console.log(AppContext);

export const AppContextProvider =({children})=>{
    return (
        <AppContext.Provider value="test">
            {children}
        </AppContext.Provider>
    )};