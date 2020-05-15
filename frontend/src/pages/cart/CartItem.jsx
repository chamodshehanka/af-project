import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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
          {product} <br />
          <Button
            color='default'
            onClick={() => this.props.onRemove(this.props.item.id)}
          >
            Remove <DeleteIcon color='action' />
          </Button>
        </TableCell>
        <TableCell align='right'>{price}.00 LKR</TableCell>
        <TableCell align='right'>{quantity}</TableCell>
        <TableCell align='right'>{price * quantity}.00 LKR</TableCell>
      </TableRow>
    );
  }
}

export default CartItem;
