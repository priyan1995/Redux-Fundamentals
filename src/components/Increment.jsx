import React from "react";
import { useSelector } from "react-redux";

export const Increment = () => {
    

     const value = useSelector((state)=>{
        const incVal = state.increment;

        return incVal;
     })

     console.log(value)


    return(
        <>
        <h2>Click the button to increment value</h2>
        <h3>{value}</h3>
        
        </>
    )
}