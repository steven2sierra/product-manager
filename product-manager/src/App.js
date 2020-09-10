import React from 'react';
// import logo from './logo.svg';
import './App.css';
// views
import ProductView from './views/ProductView';
import Detail from './views/Detail';
import Update from './views/Update';
// router
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductView path="/"/>
        <Detail path="products/:_id"/>
        <Update path="products/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
