import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const AllProducts = (props) => {

    const {allProducts, setAllProducts} = props;

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/products")
    //         .then(response=>response.data)
    //         .then(response=> setAllProducts(response.products))
    //         .catch(err=>console.log(err))
    // }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            setAllProducts(res.data.products);
        })
        .catch((err) => {
            console.log(err)
        })
    }) 

    return (
        <div>
            <div className="list-container">
                <ul>
                    {allProducts.map((product, index) => {
                        return (<li key={index}>{(<Link to={`/products/${product._id}`}>{product.title}</Link>)}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}
export default AllProducts;

