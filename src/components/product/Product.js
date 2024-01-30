import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const Product =()=>{
    const useparam = useParams();
    const {id} = useparam;
    const  [ products, setProduct ]= useState([]);
    useEffect( () =>{
        getProducts();

    },[] );

    const getProducts = async ()=>{
        let result = await fetch(`http://localhost:4500/product/${id}`);
        result = await result.json();
        console.log(result);
        setProduct(result);
    }
    console.log(products);
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
    
    return(
        <>
        <h1>Products</h1>
            <Button variant="primary"><Link to='/addproduct'>Add Product</Link></Button>
            <div className="product-wrapper">
                <ul>
                    <li> Sr. No </li>
                    <li> Product Title </li>
                    <li> Product Price </li>
                    <li> Product Category </li>
                    <li> Product Company </li>
                    <li> Action </li>
                </ul>

                            <ul>
                            <li> {1} </li>
                            <li> {products.productTitle} </li>
                            <li> {products.price} </li>
                            <li> {products.category} </li>
                            <li> {products.companyName} </li>
                            <li> 
                                <button onClick={()=>{ deleteProduct(products._id) }}>Delete</button>
                                <button><Link to={'/updateProduct/'+products._id}>Update Product</Link></button>
                               
                            </li>
                        </ul>
                     
                
            </div>
        </>

    )
}

export default Product;