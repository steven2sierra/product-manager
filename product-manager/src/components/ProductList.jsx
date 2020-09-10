import React, { useState, useEffect } from 'react';
// Link
import { Link } from '@reach/router';
import axios from 'axios';
// import DeleteButton
import DeleteButton from './DeleteButton';


export default props => {
    const [products,setProducts] = useState([]);
    //let params = useParams();
    // const [products, setProducts] = useState([]);
    // remove text decoration from 'a'
    // style a
    const styleA = {
        textDecoration: "none",
        color: "black"
    }
    // remove from DOM
    const removeFromDom = ID => {
        setProducts(products.filter(product => product._id  !== ID ))
    }
    // delete product, before
    /*
    const { removeFromDom } = props;
    const deleteProduct = (ID) => {
        axios.delete(`http://localhost:8000/api/products/delete/${ID}`)
            .then(res => {
                removeFromDom(ID)
            })
    }
    */
    // useEffect, get from API
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data) )
            .catch(err => console.log(err));
    });
    // return
    return (
        <div>
            {products.map((item, idx)=>{
                return(
                    <div key={idx}>
                        <Link style={styleA} to={`/products/${item._id}`} >{item.title}</Link>
                        <br/>
                        <Link to={`/products/update/${item._id}`} >EDIT</Link>
                        <br/>
                        <DeleteButton ID={item._id} goodCall={() => removeFromDom(item._id) } />
                    </div>
                );
            })}
        </div>
    )
}