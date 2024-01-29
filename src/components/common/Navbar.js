import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    
    return(
        <nav>
            <ul className="nav-ul">
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/addproduct">Products</Link></li>                  
                <li><Link to="/singup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/mycart">Cart</Link></li>
                
            </ul>
        </nav>
    )
}
export default Navbar;