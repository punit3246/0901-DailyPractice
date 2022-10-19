import React from 'react'
import {Link,NavLink} from "react-router-dom";
export default function Navbar() {
    
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <div class="container">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                        <Link to="/Home" style={{display:"none"}} id="logo">
                            <header className="App-header">
                                <img src="https://cdn6.f-cdn.com/contestentries/1099542/25186549/598afd06da2cc_thumb900.jpg" className="App-logo" alt="logo" id="img"width={"75px"}/>
                            </header>
                        </Link>
                    </li>
                    
                    <li class="nav-item">
                        <NavLink to="/Home" id="homeBtn" className='nav-link'>Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/About" className='nav-link'>About</NavLink>
                    </li>                    
                    <li class="nav-item">
                         <NavLink to="/Contact" className='nav-link'>Contact</NavLink>
                    </li>
                    
                </ul>
                <Link to="/" className='btn btn-outline-light m-2' id="loginBtn">Login</Link>
                <Link to="/AddUser" className='btn btn-outline-light ' id="addBtn" >Add User</Link>
            </div>
            
        </nav>
    </div>
  )
}
