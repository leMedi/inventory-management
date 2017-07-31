import React, { Component } from 'react';
import axios from 'axios';
import ProductService from './ProductService';


class EditItem extends Component {

  constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: ''
        };

        this.addProductService = new ProductService();

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:4200/products/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({ 
                        title: response.data.title, 
                        description: response.data.description, 
                        price: response.data.price 
                    });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }
  handleChange2(event) {
    this.setState({description: event.target.value});
  } 
  handleChange3(event) {
    this.setState({price: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addProductService.updateData({
            title: this.state.title,
            description: this.state.description,
            price: this.state.price
        }, this.props.match.params.id);
    this.props.history.push('/');
  }

  render() {
    return (
            <div>
                <div className="status-header">
                    <div className="indicator"></div>
                    <div className="title">Add New Product.</div>
                    <div className="subtitle">Fill in the information please.</div>
                </div>

                <div className="status-uptime">
                </div>

                <div className="status-list">
                    <form onSubmit={this.handleSubmit}>
                        
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input className="input" type="text" value={this.state.title} onChange={this.handleChange} placeholder="Text input" name="title"/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <input className="input" type="text" value={this.state.description} onChange={this.handleChange2} placeholder="Text input" name="description"/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Price</label>
                            <div className="control">
                                <input className="input" type="text" value={this.state.price} onChange={this.handleChange3} placeholder="Text input" name="price"/>
                            </div>
                        </div>

                        <div className="control">
                            <button className="button is-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>

    );
  }
}

export default EditItem;