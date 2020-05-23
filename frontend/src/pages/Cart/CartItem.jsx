import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from 'axios';
import { environment } from '../../configs/environment';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: props.item.productId,
      name: '',
      image: '',
      productPrice: props.item.productPrice,
      quantity: props.item.quantity,
    };
  }

  componentDidMount() {
    Axios.get(
      environment.baseURL + '/product/get/' + this.props.item.productId
    ).then((e) => {
      this.setState({ image: e.data.imageUrl, name: e.data.name });
    });
  }

  render() {
    const { productId, name, image, productPrice, quantity } = this.state;

    return (
      <TableRow key={productId}>
        <TableCell>
          <img
            src={image}
            alt={name}
            style={{ width: '150px', height: '150px' }}
          />
        </TableCell>
        <TableCell
          style={{
            fontSize: '18px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontFamily: 'Cabin',
          }}
        >
          {name} <br />
          <Button
            color="default"
            onClick={() => this.props.onRemove(this.props.item.productId)}
          >
            Remove <DeleteIcon color="action" />
          </Button>
        </TableCell>
        <TableCell align="right">{productPrice}.00 LKR</TableCell>
        <TableCell align="right">{quantity}</TableCell>
        <TableCell align="right">{productPrice * quantity}.00 LKR</TableCell>
      </TableRow>
    );
  }
}

export default CartItem;
