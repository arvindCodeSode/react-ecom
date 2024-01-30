import React, { useState } from "react"
import { json, useNavigate } from "react-router-dom";

const  Login =()=>{
    const [email,setEmail] =  useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    async function loginform(){
        let result =await fetch("http://localhost:4500/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-type":"application/json"
            }
        });
        result = await result.json();
        if(result.auth){
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', result.auth);
            navigate('/')
        }else{
            alert("Invalid login details");
        }

    }
    return(
        <>
            <h1>Login Here</h1>
            <div className="form-wrapper">
                <form>
                    <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>{ setEmail(e.target.value) }} />
                    <input type="password" placeholder="Enter Password" value={password} onChange={ (e) =>{
                        setPassword(e.target.value);
                    }} />
                    <button type="button" onClick={loginform}>Login</button>
                </form>
            </div>

        </>
    )
}

export default Login;