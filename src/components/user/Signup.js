import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SignUp =()=>{

    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate("/");
        }
    })

    async function submitForm(){
        console.log(name,email,password,username);
        let result = await fetch('http://localhost:4500/register',{
            method:"post",
            body:JSON.stringify({name,email,username,password}),
            headers:{
                "Content-type":"application/json"
            }
        });
        result = await result.json();
        if(result.name){
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');
        }else{
            alert('Invalid login details');
        }
    }
    return(
        <>
        <h1>SignUp Here</h1>
        <div className="form-wrapper">
            <form >
                <input type="text" value={name} onChange={(e)=> { setName(e.target.value) } } placeholder="Enter Name" /><br />
                <input type="text" value={username} onChange={(e)=> { setUsername(e.target.value) } } placeholder="Enter  Username Name" /><br />
                <input type="email" value={email} onChange={(e)=> { setEmail(e.target.value) } } placeholder="Enter Email" /> <br/>
                <input type="password" value={password} onChange={(e)=> { setPassword(e.target.value) } } placeholder="Enter Password" /> <br/>
                <br />
                <button type="button" onClick={submitForm}>Register</button>
            </form>
        </div>
        </>
    )
}

export default SignUp;