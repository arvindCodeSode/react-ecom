import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct =()=>{

    const [productTitle, setProduct]= useState('');
    const [category, setCategory]= useState('');
    const [price, setPrice]= useState('');
    const [companyName, setCompanyName]= useState('');
    const [error, setError]= useState(false);
    let navigate =  useNavigate();
    async function addPro()
    {
        if( !productTitle || !category || !price || !companyName )
        {
            setError(true)
            return false
           
        }else{
            let auth = localStorage.getItem('user');
            let userId = JSON.parse(auth)._id;

            let product = await fetch("http://localhost:4500/product", {
                method:"post",
                body:JSON.stringify({productTitle,category,price,companyName,userId}),
                headers:{
                    "Content-type":"application/json"
                }
            });
            product = await product.json();
            if(product.productTitle){
                navigate('/products');
            }else{
                alert("Error! Please try again")
            }

        }

    }
    return(
        <>
          <h1>Add Product</h1> 
          <div className="form-wrapper">
            <input type="text" value={productTitle} onChange={(e)=> { setProduct(e.target.value) } } placeholder="Enter Product Title" />
            { error && !productTitle ? <span className="error">Enter a valid product name</span>:"" }
            <br />
            <input type="text"  value={category} onChange={(e)=> { setCategory(e.target.value) } } placeholder="Enter Category" />
            { error && !category ? <span className="error">Enter a valid category</span>:"" }
            <br />
            <input type="text"  value={price} onChange={(e)=> { setPrice(e.target.value) } } placeholder="Enter Price" />
            { error && !price ? <span className="error">Enter a valid price</span>:"" }
            <br />
            <input type="text"  value={companyName} onChange={(e)=> { setCompanyName(e.target.value) } } placeholder="Enter Company Name" />
            { error && !companyName ? <span className="error">Enter a valid company name</span>:"" }
            <br />
            <button type="button" onClick={addPro}>Add </button>
          </div>
        </>
    )
}

export default AddProduct;