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
            document.getElementById("title-input").value = "";
            document.getElementById("price-input").value = null;
            document.getElementById("desc-input").value = "";
            setAllProducts([...allProducts, res]);
        })
        .catch(err=>console.log(err))
        
    }

    return (
        <form id="productForm" onSubmit={handleSubmit}>
            <p>
                <label>Title</label><br/>
                
                <input id="title-input" type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                
                <input id="price-input" type="number" min="0.01" step=".01" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                
                <input id="desc-input" type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input className="btn btn-primary" type="submit"/>
        </form>
    )
}

export default ProductForm;