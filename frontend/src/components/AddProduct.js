import React, { Component } from 'react';
import ProductService from './ProductService';

class AddProduct extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert(this.state.value);
      event.preventDefault();
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
                    <form action="">
                        
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input"/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input"/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Price</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input"/>
                            </div>
                        </div>

                        <div class="control">
                            <button className="button is-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            
        );
    }
}

export default AddProduct;