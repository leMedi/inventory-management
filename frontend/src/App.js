import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="status-header">
        <div className="indicator"></div>
        <div className="title">Inventory Management Demo.</div>
        <div className="subtitle">Made with ReactJs, NodeJs, MongoDB and Love</div>
      </div>
    );
  }
}

export default App;
