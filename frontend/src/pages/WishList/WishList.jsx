import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { environment } from '../../configs/environment';
import Axios from 'axios';
import { WishListService } from '../../services';
import WishListItem from './WishListItem';

class WishList extends Component {
  constructor(props) {
    super(props);
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
        console.log(e);
        var array = e.data.items;
        this.setState({ items: array });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return <Container>{this.displayWishList(this.state.items)}</Container>;
  }

  displayWishList = (items) => {
    if (!items.length) return '';

    return items.map((item, index) => (
      <div key={index}>
        <WishListItem productId={item.productId}></WishListItem>
      </div>
    ));
  };
}

export default WishList;
