import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, Link, useNavigate} from 'react-router-dom';

const ProductDetail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data.product);
            })
            .catch(err => console.log(err))
    }, []);

    const handleDelete = () => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data)
                navigate("/")
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <h1>Title: {product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <div>
            <button class="btn btn-danger" onClick={handleDelete}>Delete this Product</button>
            <Link to={`/`}>Go Back</Link>
            </div>
        </div>
    );
}

export default ProductDetail;