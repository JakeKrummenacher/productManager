import React, { useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import AllProducts from "../components/AllProducts";

const Main = (props) => {

    const [ allProducts, setAllProducts ] = useState([]);

    return (
        <div>
            <h1>Create New Product:</h1>
            <ProductForm allProducts = {allProducts} setAllProducts={setAllProducts} />
            <hr/>
            <h1>View Existing Products:</h1>
            <AllProducts allProducts = {allProducts} setAllProducts = {setAllProducts} />
        </div>
    )
}

export default Main;