import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.description}
          </td>
          <td>
            <span className="tag is-primary is-medium">{this.props.obj.price}</span>
          </td>
          <td>
            <button className="button is-warnin">Edit</button>
          </td>
          <td>
            <button className="button is-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;