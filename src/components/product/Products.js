import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Products =()=>{
 
    const  [ products, setProduct ]= useState([]);
    useEffect( () =>{
        getProducts();

    },[] );

    const getProducts = async ()=>{
        let result = await fetch('http://localhost:4500/product',{
            headers:{
                "authorization":`bearer ${localStorage.getItem('token')}dd`
            }
        });
        result = await result.json();
        console.log(result);
        if(result.length>0){
            setProduct(result);
        }else{
            alert("Invalid JWT token")
            setProduct([]);
        }
    }
    async function  deleteProduct(id){
        let result = await fetch(`http://localhost:4500/product/${id}`,{
            method:'delete'
        });
        result = await result.json();
        if(result){
            alert("product deleted successfully");
            getProducts();
        }else{
            alert("Error! Please try again");
        }
    }
    async function searchProduct(evenet){
        let key = evenet.target.value;
        if(key.length>0)
        {
            let result = await fetch(`http://localhost:4500/search/${key}`);
            result = await result.json();
            console.log(result);
            if(result){
                setProduct(result);
            }else{
                getProducts();
            }
        }else{
            getProducts();

        }

    }   
    
    return(
        <>
        <h1>Products</h1>
            <Button variant="primary"><Link to='/addproduct'>Add Product</Link></Button>
            <input type="text" className="product-search" placeholder="Search Product "
             onChange={searchProduct} />
            <div className="product-wrapper">
                <ul>
                    <li> Sr. No </li>
                    <li> Product Title </li>
                    <li> Product Price </li>
                    <li> Product Category </li>
                    <li> Product Company </li>
                    <li> Action </li>
                </ul>
                {
                    products.map( ( item,index )=>{
                        return(
                            <ul>
                            <li> {index+1} </li>
                            <li> {item.productTitle} </li>
                            <li> {item.price} </li>
                            <li> {item.category} </li>
                            <li> {item.companyName} </li>
                            <li> 
                                <button onClick={()=>{ deleteProduct(item._id) }}>Delete</button>
                                <button><Link to={'/updateProduct/'+item._id}>Update Product</Link></button>
                                <button><Link to={'/product/'+item._id}>Product</Link></button>
                            </li>
                        </ul>
                        )
                        
                    })
                }
                
            </div>
        </>

    )
}

export default Products;