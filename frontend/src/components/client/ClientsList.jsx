import React, { Component } from 'react';
import { ClientService } from '../../services';

class ClientsList extends Component {
  state = {};

  componentDidMount() {
    console.log(ClientService.getAllClients());
  }

  render() {
    return <div>{ClientService.getAllClients()}</div>;
  }
}

export default ClientsList;
