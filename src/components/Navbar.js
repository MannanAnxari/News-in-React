import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = (props) => {

    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label ><Link to="/" className="logo">{props.title}</Link></label>
            <ul id='myDIV'>
                <Link className="active navLinks" to="/">Home</Link>
                <Link className='navLinks' to="/business">business</Link>
                <Link className='navLinks' to="/entertainment">entertainment</Link>
                <Link className='navLinks' to="/general">general</Link>
                <Link className='navLinks' to="/health">health</Link>
                <Link className='navLinks' to="/science">science</Link>
                <Link className='navLinks' to="/sports">sports</Link>
                <Link className='navLinks' to="/technology">technology</Link>
            </ul>
        </nav>
    )
}

export default Navbar