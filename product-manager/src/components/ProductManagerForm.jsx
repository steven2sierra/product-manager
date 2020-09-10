import React, { useState } from 'react';
// import axios
import axios from 'axios';

// Reusing components requires props
export default props => {
    // REUSING COMPONENTS
    // initial title, initial price, initial description
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    // keep track of what is being typed via useState hook
    const [title, setTitle] = useState(initialTitle); // default is empty // not anymore, update
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    
    // handler for when form is submitted
    const submitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();
        // form submission function
        onSubmitProp({title,price,description});
        /*
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        */
    }
    
    // onChange to update title, price, and description
    return(
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title</label>
                    <input type="text" value={title} onChange = {e => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label>
                    <input type="text" value={price} onChange = {e => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" value={description} onChange = {e => setDescription(e.target.value)}/>
                </p>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );

}
