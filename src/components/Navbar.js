import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

export class Navbar extends Component {
    static propTypes = {}

    
    render() { 


        // let element = document.getElementsByClassName("navLinks");
        // var element = document.querySelectorAll("a");
        // // var element = document.getElementById("text");
        // element.classList.add("active");
        // console.log("Added"); 
       
        //   var header = document.getElementById("myDIV");
        //   var navLinks = header.getElementsByClassName("navLinks");
        //   for (var i = 0; i < navLinks.length; i++) {
        //     navLinks[i].addEventListener("click", function () {
        //       navLinks[0].classList.remove("active");
        //       var current = document.getElementsByClassName("active");
      
        //       if (current.length > 0) {
      
      
        //         current[0].className = current[0].className.replace(" active", "");
        //       }
        //       this.className += " active";
        //     });
        //   }

        return (
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label ><Link to="/" className="logo">{this.props.title}</Link></label>
                <ul id='myDIV'>
                    <Link className="active navLinks" to="/">Home</Link>  
                    <Link className='navLinks'  to="/business">business</Link>  
                    <Link className='navLinks'  to="/entertainment">entertainment</Link>  
                    <Link className='navLinks'  to="/general">general</Link>  
                    <Link className='navLinks'  to="/health">health</Link>  
                    <Link className='navLinks'  to="/science">science</Link>  
                    <Link className='navLinks'  to="/sports">sports</Link>  
                    <Link className='navLinks'  to="/technology">technology</Link>   
                </ul>
                {/* <ul id='myDIV'>
                    <a class="active navLinks" href="#">Home</a>
                    <a class=' navLinks' href="#">business</a>
                    <a class='navLinks' href="#">entertainment</a>
                    <a class='navLinks' href="#">general</a>
                    <a class='navLinks' href="#">health</a>
                </ul> */}

            </nav>

        )

    }
}

export default Navbar