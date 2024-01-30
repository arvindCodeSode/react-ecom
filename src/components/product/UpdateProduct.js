import React, { useEffect, useState } from "react"
import {  useParams, useNavigate } from "react-router-dom";

const UpdateProduct =()=>{

    const nagivate  = useNavigate();
    const [productTitle,setProduct]= useState('');
    const [category,setCategory]= useState('');
    const [price,setPrice]= useState('');
    const [companyName,setCompanyName]= useState('');
    const [error, setError] = useState(false);
    // const [userId,setUserId]= useState();
    const useparam = useParams();
    const {id} = useparam;


    useEffect( ()=>{
        getProduct();
    },[])
    async function getProduct(){
        let result = await fetch(`http://localhost:4500/product/${id}`);
        result = await result.json();
        setCategory(result.category);
        setCompanyName(result.companyName);
        setProduct(result.productTitle);
        setPrice(result.price);
        // setUserId(result.userId)
    }
    async function updatePro(){
        if(!productTitle || !category || !companyName || !error){
            setError(true);
            return false;
        }else{
            let result = await fetch(`http://localhost:4500/product/${id}`,{
                method:'put',
                body:JSON.stringify({productTitle,companyName,price,category}),
                headers:{
                    "Content-type":"application/json"
                }
            });
            result = result.json();
            if(result){
                nagivate('/products');
            }else{
                alert('Error');
            }
        }
    }
    return(
        <React.Fragment>
            <h1>Update Product</h1>
            <div className="form-wrapper">
                <input type="text" placeholder="Enter Product Title"
                value={productTitle} onChange={(e)=>{setProduct(e.target.value)}} />
                { error && !productTitle ? <span>Enter A valid product title</span>:"" }
                <br />
                
                <input type="text" placeholder="Enter Category"
                value={category} onChange={(e)=>{setCategory(e.target.value)}} />
                { error && !category ? <span>Enter A valid category</span>:"" }
                <br />

                <input type="text" placeholder="Enter Price"
                value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                { error && !price ? <span>Enter A valid price</span>:"" }
                <br />

                <input type="text" placeholder="Enter Company Name"
                value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}} />
                { error && !companyName ?  <span>Enter A valid Category</span>:"" }
                <br />
                <button type="button" onClick={updatePro}>Update</button>
            </div>
        </React.Fragment>
    )
}

export default UpdateProduct;