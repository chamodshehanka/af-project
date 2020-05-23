import React, { Component } from 'react';
import ClientsList from '../../components/client/ClientsList';
import { Button } from '@material-ui/core';
import Axios from 'axios';

class ClientPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <ClientsList />

        <Button
          onClick={() => {
            Axios.post('http://localhost:4000/api/client/get', { id: 'C001' })
              .then((result) => {
                console.log(result.data);
              })
              .catch((err) => console.error(err));
          }}
        >
          Get Client
        </Button>
      </div>
    );
  }
}

export default ClientPage;
