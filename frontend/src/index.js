import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';


ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/add-product' component={AddProduct} />
        <Route path='/edit/:id' component={EditProduct} />
      </div>
  </Router>,
  document.getElementById('root')
);