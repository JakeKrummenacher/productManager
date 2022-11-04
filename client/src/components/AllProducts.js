import React, { useEffect, useState } from 'react'
import axios from 'axios';
const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response=>response.data)
            .then(response=> setProducts(response.products))
            .catch(err=>console.log(err))
    }, []);


    return (
        <div>
            <div className="list-container">
                <ul>
                    {products.map((product, index) => {
                        return (<li key={index}>{(product.title)}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}
export default AllProducts;

