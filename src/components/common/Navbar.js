import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    // console.log(auth?'hello':'nn')
    function logout(){
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login')
        
    }
    return(
        <nav>
            {
                auth?
                <ul className="nav-ul">
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>   
                <li><Link to="/login" onClick={()=>{ logout() } }>Logout</Link> </li>
                <li><Link to="/mycart">Cart</Link></li>
                
            </ul>
                :
                <ul className="nav-ul">
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link> </li>
                <li><Link to="/login">Login</Link></li>
            </ul>

            }
            
        </nav>
    )
}
export default Navbar;