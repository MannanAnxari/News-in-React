import React, { Component } from 'react'
import loading from "./loading.gif"

export default class Spinner extends Component {
    render() {
        let spinnerStyle = {
            // backgroundColor: "red",
            width: "90%",
            opacity: "0.5"
        }

        return (
            <div className='text-center'><img style={spinnerStyle} src={loading} alt="loading" /></div>
        )
    }
}
