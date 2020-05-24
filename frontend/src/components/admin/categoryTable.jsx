import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { environment } from '../../configs/environment';

class categoryTable extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .get(
        environment.baseURL + 'category/delete' + this.props.obj.storeManagerId
      )
      .then(console.log('Deleted'))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.description}</td>
        <td>{this.props.obj.featured}</td>
        <td>
          <Link to={'/edit/' + this.props.obj._id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default categoryTable;
