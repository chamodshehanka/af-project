import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './categoryTable';
import { environment } from '../../configs/environment';

export default class categoryList extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryList: [] };
  }

  componentDidMount() {
    axios
      .get(environment.baseURL + 'category/list')
      .then((response) => {
        this.setState({ categoryList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.categoryList.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  
  render() {
    return (
      <div>
        <h3 align="center">Category List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>description</th>
              <th>featured</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
