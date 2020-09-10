import React, { useState, useEffect } from 'react';
// Link
import { Link } from '@reach/router';
import axios from 'axios';


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
    // delete product
    const { removeFromDom } = props;
    const deleteProduct = (ID) => {
        axios.delete(`http://localhost:8000/api/products/delete/${ID}`)
            .then(res => {
                removeFromDom(ID)
            })
    }
    // useEffect
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
                        <button onClick = {e => {deleteProduct(item._id)}}>
                            DELETE
                        </button>
                    </div>
                );
            })}
        </div>
    )
}