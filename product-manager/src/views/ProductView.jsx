import React, { useEffect, useState } from "react";
//form and list
import ProductManagerForm from '../components/ProductManagerForm';
import ProductList from '../components/ProductList';
import axios from "axios";

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // useEffect
    useEffect(() =>{
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])
    // removeFromDom
    const removeFromDom = ID => {
        setProducts(products.filter(product => product._id !== ID));
    }
    // const createProduct, creates a product
    const createProduct = product => {
        axios.post(`http://localhost:8000/api/products/new`, product)
            .then(res => {
                setProducts([...products,res.data]);
            })
    }
    // return ProductManagerForm
    return(
        <div>
            <ProductManagerForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr/> {/* thematic break */}
            <h2>All Products</h2>
            {
                loaded && <ProductList products={products} removeFromDom= { removeFromDom }/>
            }
        </div>
    );
}