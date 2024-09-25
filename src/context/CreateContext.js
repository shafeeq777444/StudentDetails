import React, { createContext, useState } from "react";


export const contextprovider = createContext();
export const ProviderContext = ({ children }) => {
    const[details,setDetails]=useState([])
    const addDetails=(name,age,batch)=>{
        setDetails([...details,{name,age,batch}])
    }
    return (
        <contextprovider.Provider value={{addDetails,details,setDetails}}>
            {children}
        </contextprovider.Provider>
    );
};
