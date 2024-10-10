import { createContext  } from "react";

const BioContext = createContext()

const BioProvider = ({children}) =>{

    const myName = "sarthak"
    const age = 20
    const city = "pune"
    const  sayhello = () =>{
         return('hey hello from context file....')
    }

     return(
         <BioContext.Provider value={{myName,age,city,sayhello}}>
            {children}
         </BioContext.Provider>
     )
}

export {BioProvider ,BioContext}
