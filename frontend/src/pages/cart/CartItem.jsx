import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell } from '@material-ui/core';

class CartItem extends Component {
  render() {
    const { id, product, image, price, quantity } = this.props.item;
    return (
      <TableRow key={id}>
        <TableCell>
          <img
            src={image}
            alt={product}
            style={{ width: '150px', height: '150px' }}
          />
        </TableCell>
        <TableCell
          style={{
            fontSize: '25px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        >
          {product}
        </TableCell>
        <TableCell align='right'>{price}.00 LKR</TableCell>
        <TableCell align='right'>{quantity}</TableCell>
        <TableCell align='right'>{price * quantity}.00 LKR</TableCell>
      </TableRow>
    );
  }
}

export default CartItem;
