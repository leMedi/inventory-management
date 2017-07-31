import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ProductService from './components/ProductService';
import TableRow from './components/TableRow';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {value: '', products: ''};
      this.addProductService = new ProductService();
    }
    componentDidMount(){
      axios.get('http://localhost:4200/products')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
      if(this.state.products instanceof Array){
        return this.state.products.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        })
      }
    }


  render() {
    return (
      <div>
        <div className="status-header">
          <div className="indicator"></div>
          <div className="title">Inventory Management Demo.</div>
          <div className="subtitle">Made with ReactJs, NodeJs, MongoDB and Love</div>
        </div>

        <div className="container">
            <table className="table is-fullwidth is-striped">
              <thead>
                <tr>
                  <td>No.</td>
                  <td>Title</td>
                  <td>Description</td>
                  <td>Price (MAD)</td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      </div>
      
    );
  }
}

export default App;
