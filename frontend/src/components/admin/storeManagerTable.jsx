import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class storeManagerTable extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.contactNo}</td>
        <td>
          <Link to={'/edit/' + this.props.obj._id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default storeManagerTable;
