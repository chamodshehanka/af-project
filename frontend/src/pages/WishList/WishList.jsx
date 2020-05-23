import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Axios from 'axios';
import WishListItem from '../../components/client/WishListItem';

class WishList extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      clientId: 'C003',
      items: [],
    };
  }

  async componentDidMount() {
    await Axios.get(
      'http://localhost:4000/api/wishList/get/' + this.state.clientId
    )
      .then((e) => {
        var array = e.data.items;
        this.setState({ clientId: 'C003', items: array });
        console.log(array);
      })
      .catch((err) => console.error(err));
  }

  handleRemove(props) {
    const data = {
      productId: props,
      clientId: 'C003',
    };
    console.log(data);
    Axios.post('http://localhost:4000/api/wishList/delete', data)
      .then((e) => {
        console.log(e);
        var array = e.data.items;
        this.setState({ items: array });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <Container>
        <h1 style={{ fontFamily: 'Pacifico' }}>Wish List</h1>
        {this.displayWishList(this.state.items)}
      </Container>
    );
  }

  displayWishList = (items) => {
    if (!items.length) return '';

    return items.map((item, index) => (
      <div key={index}>
        <WishListItem
          productId={item.productId}
          handleDelete={this.handleRemove}
        ></WishListItem>
      </div>
    ));
  };
}

export default WishList;
