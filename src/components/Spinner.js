import React, { Component } from 'react'
import loading from "./loading.gif"

const Spinner = () => {
 
        let spinnerStyle = {
            // backgroundColor: "red",
            width: "40%",
            opacity: "0.5",
            marginBottom: "2rem"
        }

        return (
            <div className='text-center'><img style={spinnerStyle} src={loading} alt="loading" /></div>
     )
    
}
export default Spinner