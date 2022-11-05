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
            // console.log(res.data);
            setAllProducts(res.data.products);
        })
        .catch((err) => {
            console.log(err)
        })
    }) 

    return (
        <div>
            <div className="list-container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Item Name</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>     
                            {allProducts.map((product, index) => {
                                return (
                                <tr>
                                    <td key={index}>{(<Link to={`/products/${product._id}`} className="btn btn-link">{product.title}</Link>)}</td>
                                    <td>
                                        <Link to={`/products/edit/${product._id}`} className="btn btn-secondary">Edit</Link>
                                        <button className='btn btn-danger' onClick={(e) => {axios.delete("http://localhost:8000/api/products/" + product._id)}}>Delete</button>
                                    </td>
                                </tr>
                                )
                            })}
                    </tbody>
                </table>
                <ul>
                </ul>
            </div>
        </div>
    )
}
export default AllProducts;

