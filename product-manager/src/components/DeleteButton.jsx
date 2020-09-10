import React from 'react';
import axios from 'axios';

export default props => {
    // retrieve ID for callback
    const {ID, goodCall} = props;
    const deleteProduct = e => {
        axios.delete(`http://localhost:8000/api/products/delete/` + ID)
            .then(res => {
                goodCall();
            })
    }
    // return
    return(
        <button onClick={deleteProduct}>
            DELETE
        </button>
    );
}