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
import { CartService } from '../../services/index';

class CartPage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    Axios.get(environment.baseURL + 'cart/get/' + 'C001')
      .then((cartData) => {
        this.setState({ items: cartData.data.items });
      })
      .catch((err) => console.error(err));
  }

  getSubTotal = () => {
    var subTotal = 0;
    this.state.items.map(
      (item) => (subTotal += item.productPrice * item.quantity)
    );
    return subTotal;
  };

  onRemove = (productId) => {
    CartService.deleteCartItem('C001', productId);
    this.setState({
      items: this.state.items.filter((item) => item.productId !== productId),
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
