import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    // console.log(auth?'hello':'nn')
    function logout(){
        localStorage.removeItem('user');
        navigate('/login')
        
    }
    return(
        <nav>
            <ul className="nav-ul">
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/addproduct">Products</Link></li>   

                <li>{auth?<Link to="/login" onClick={()=>{ logout() } }>Logout</Link>:<Link to="/signup">Signup</Link>} </li>
                    {auth?'':<li><Link to="/login">Login</Link></li>}
                <li><Link to="/mycart">Cart</Link></li>
                
            </ul>
        </nav>
    )
}
export default Navbar;