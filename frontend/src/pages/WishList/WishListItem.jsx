import React, { Component } from 'react';
import Axios from 'axios';
import { environment } from '../../configs/environment';
import { Card } from '@material-ui/core';

class WishListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: props.productId,
      description: '',
      image: '',
    };
  }

  async componentDidMount() {
    const data = {
      productId: 'P001',
    };
    console.log(data);
    await Axios.get(environment.baseURL + 'product/get/' + this.state.productId)
      .then((e) => {
        console.log(e.data);
        this.setState({ image: e.data.imageUrl });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <Card>
        <h2>{this.state.productId}</h2>
        <img src={this.state.image}></img>
      </Card>
    );
  }
}

export default WishListItem;
