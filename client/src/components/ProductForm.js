import React, { useState } from "react";
import axios from 'axios';

const ProductForm = (props) => {

    const {allProducts, setAllProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            setAllProducts([...allProducts, res]);
        })
        .catch(err=>console.log(err))
        
    }

    return (
        <form id="productForm" onSubmit={handleSubmit}>
            <p>
                <label>Title</label><br/>
                
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                
                <input type="number" min="0.01" step=".01" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;