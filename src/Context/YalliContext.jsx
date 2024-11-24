import { createContext, useState } from "react";

export const YalliContext =createContext();
const ContextYalli =({children})=>{
    const [currentUser,setCurrentUser]=useState(true)
    return (
        <YalliContext.Provider value={{setCurrentUser,currentUser}}>
            {children}
        </YalliContext.Provider>
    )
}

export default ContextYalli;