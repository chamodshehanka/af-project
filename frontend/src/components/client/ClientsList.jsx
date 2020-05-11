import React, { Component } from 'react';
import { ClientService } from '../../services';

class ClientsList extends Component {
  state = {};
  render() {
    return <div>{ClientService.getAllClients()}</div>;
  }
}

export default ClientsList;
