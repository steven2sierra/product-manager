import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    // return
    return (
        <div>
            <div>
                <p>Test...</p>
                <h2>Title:{product.title}</h2>
                <p>Price:{product.price}</p>
                <p>Description:{product.description}</p>
            </div>
        </div>
    );
} 