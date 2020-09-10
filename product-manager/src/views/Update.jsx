import React, { useEffect, useState } from 'react';
import axios from 'axios';
// navigate to '/' after submit
import { navigate } from '@reach/router';

// for updates
export default props => {
    // empty default Strings for updating
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    // useEffect
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then( res => {
                setTitle(res.data.title); // retrieves state
                setPrice(res.data.price); // retrieves state
                setDescription(res.data.description); // retrieves state
            })
    }, [])
    // update Product, const
    const update = e => {
        e.preventDefault();
        // when updating, use put
        axios.put(`http://localhost:8000/api/products/update/${props._id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res); // console.log response
                navigate('/'); // no validations yet
            });
    }
    // return
    /*
        Form will update a product by id, prev state
        will prepopulate inputs -> {value}
    */
    return(
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={update}>
                <p>
                    <label>Title</label>
                    <input
                        type = "text"
                        name = "title"
                        value = {title}
                        onChange = {e => {setTitle(e.target.value)}}
                    />
                </p>
                <p>
                    <label>Price</label>
                    <input
                        type = "text"
                        name = "price"
                        value = {price}
                        onChange = {e => {setPrice(e.target.value)}}
                    />
                </p>
                <p>
                    <label>Description</label>
                    <input
                        type = "text"
                        name = "description"
                        value = {description}
                        onChange = {e => {setDescription(e.target.value)}}
                    />
                </p>
                <input type="submit" value="update" />
            </form>
        </div>
    );
}