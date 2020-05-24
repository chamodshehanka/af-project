import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './storeManagerTable';
import { environment } from '../../configs/environment';
import './tableStyle.css';

export default class storeManagerList extends Component {
  constructor(props) {
    super(props);
    this.state = { storeManagerList: [] };
  }

  componentDidMount() {
    axios
      .get(environment.baseURL + 'storeManager/list')
      .then((response) => {
        this.setState({ storeManagerList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.storeManagerList.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Store Manager List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
