import React, { useState } from 'react';
// import axios
import axios from 'axios';

export default () => {
    // keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); // default is empty
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    // handler for when form is submitted
    const submitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
    // onChange to update title, price, and description
    return(
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title</label>
                    <input type="text" onChange = {e => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label>
                    <input type="text" onChange = {e => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" onChange = {e => setDescription(e.target.value)}/>
                </p>
                <input type="submit" value="Submit Product"/>
            </form>
        </div>
    );

}
