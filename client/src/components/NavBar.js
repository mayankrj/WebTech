import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return ( 
    <nav className = "navbar navbar-expand-lg navbar-light bg-info" >
        <div className = "container" >
            <Link to = "/" className = "navbar-brand" > NVM Shop </Link>
            <div className = "collapse navbar-collapse justify-content-end" id = "navbarNav" >
                <ul className = "navbar-nav" >
                <li className = "nav-item active" >
                <Link to = "/" className = "nav-link" > Home </Link> 
                </li> 
                <li className = "nav-item" >
                <Link to = "/about" className = "nav-link" > About </Link>
                </li > 
                <li className = "nav-item" >
                <Link to = "/login" className = "nav-link" > Login </Link>
                </li >
                <li className = "nav-item" >
                <Link to = "/products" className = "nav-link" > Products </Link>
                </li >
                <li className = "nav-item" >
                <Link to = "/cart" className = "nav-link" > Cart </Link>
                </li >
                </ul>
            </div> 
        </div> 
    </nav >
  )
}

export default NavBar;