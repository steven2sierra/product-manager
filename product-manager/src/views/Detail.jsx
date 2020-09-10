import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    // product, setProduct
    const [product, setProduct] = useState({});
    // useEffect
    useEffect(() => {
        console.log(props._id);
        axios.get(`http://localhost:8000/api/products/`+ props._id)
            .then(res => {
                console.log(res);
                setProduct(res.data)
            })
            .catch(err => console.log(err));
            // console.log(res);
    }, [props._id]);
    // style Link
    const styleLink = {
        textDecoration: "none",
        color: "black"
    }
    // return
    return (
        <div>
            <div>
                <h2>Title: {product.title}</h2>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <button>
                    <Link style={styleLink} to={`/products/update/${props._id}`} >EDIT</Link>
                </button>
            </div>
        </div>
    );
} 