import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CartItem from './CartItem';

class CartPage extends Component {
  state = {
    items: [
      {
        id: 1,
        product: 'Belt Pant',
        image:
          'https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/gallery/58e1af95f81a0358169935c043984523409a51dc.jpg',
        price: 10,
        quantity: 2,
      },
      {
        id: 2,
        product: 'EMBROIDED SHIFT LINEN DRESS',
        image:
          'https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/gallery/39af33908cae1957c83a96d2d310a2b9ef22cee8.jpg',
        price: 40,
        quantity: 2,
      },
      {
        id: 3,
        product: 'Front tie knot top',
        image:
          'https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/gallery/d3b26487c1297af957dcd41c911877ea1e7534ae.jpg',
        price: 10,
        quantity: 2,
      },
    ],
  };
  render() {
    return (
      <div>
        <h1 className='cart-title' style={{ fontFamily: 'Assistant' }}>
          Shopping Cart
        </h1>
        <Grid container spacing={3}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell></TableCell>
                    <TableCell align='right'>Price</TableCell>
                    <TableCell align='right'>Quantity</TableCell>
                    <TableCell align='right'>Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {this.state.items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div style={{ paddingRight: '5px', margin: 'auto' }}>
              <h3>Subtotal 45.00 LKR</h3>
              <br />
              Shipping and taxes calculated at checkout
              <br />
              <Button color='primary' variant='contained'>
                Update Cart
              </Button>{' '}
              <Button color='primary' variant='outlined'>
                Check Out
              </Button>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default CartPage;
