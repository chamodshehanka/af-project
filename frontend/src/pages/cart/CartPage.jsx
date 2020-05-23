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
import './CartPage.css';
import Axios from 'axios';
import { environment } from '../../configs/environment';

class CartPage extends Component {
  state = {
    items: [
      // {
      //   id: 1,
      //   product: 'Belt Pant',
      //   image:
      //     'https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/gallery/58e1af95f81a0358169935c043984523409a51dc.jpg',
      //   price: 1000,
      //   quantity: 2,
      // },
      // {
      //   id: 2,
      //   product: 'EMBROIDED SHIFT LINEN DRESS',
      //   image:
      //     'https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/gallery/39af33908cae1957c83a96d2d310a2b9ef22cee8.jpg',
      //   price: 4000,
      //   quantity: 2,
      // },
      // {
      //   id: 3,
      //   product: 'Front tie knot top',
      //   image:
      //     'https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/gallery/d3b26487c1297af957dcd41c911877ea1e7534ae.jpg',
      //   price: 1000,
      //   quantity: 2,
      // },
    ],
  };

  componentDidMount() {
    Axios.get(environment.baseURL + 'cart/get/' + 'C001')
      .then((cartData) => {
        console.log(cartData.data.items);
        this.setState({ items: cartData.data.items });
      })
      .catch((err) => console.error(err));
  }

  getSubTotal = () => {
    var subTotal = 0;
    this.state.items.map((item) => (subTotal += item.price * item.quantity));
    return subTotal;
  };

  onRemove = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  };

  updateCart = () => {
    console.log('upate cart pressed');
  };

  render() {
    return (
      <div>
        <h1 className="cart-title">Shopping Cart</h1>
        <Grid container spacing={3}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <TableContainer component={Paper}>
              <Table aria-label="cart table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {this.state.items.map((item) => (
                    <CartItem
                      key={item.productId}
                      item={item}
                      onRemove={this.onRemove.bind(this, item.productId)}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div
              style={{
                paddingRight: '5px',
                margin: 'auto',
                float: 'right',
                fontFamily: 'Cabin',
              }}
            >
              <h3>Subtotal {this.getSubTotal()}.00 LKR</h3>
              Shipping and taxes calculated at checkout
              <br />
              <br />
              <div>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.updateCart.bind(this)}
                >
                  Update Cart
                </Button>{' '}
                <Button color="primary" variant="outlined" href="/delivery">
                  Check Out
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default CartPage;
