import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from 'axios';
import { environment } from '../../configs/environment';

class CartItem extends Component {
  componentDidMount() {
    Axios.get(
      environment.baseURL + '/product/get/' + this.props.item.productId
    ).then((data) => {
      // this.setState({item: {image}})
      console.log(data);
    });
  }

  render() {
    const {
      productId,
      product,
      image,
      productPrice,
      quantity,
    } = this.props.item;

    return (
      <TableRow key={productId}>
        <TableCell>
          <img
            src={image}
            alt={product}
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
          {product} <br />
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
