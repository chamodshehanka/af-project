import React, { Component } from 'react';
import Axios from 'axios';
import { environment } from '../../configs/environment';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
  Hidden,
  Grid,
  ButtonBase,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './WishList.css';

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

  removeItem = () => {
    this.props.handleDelete(this.state.productId);
  };

  render() {
    return (
      <div className="root">
        <Card style={{ padding: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className="productImage">
                <img
                  className="imgProduct"
                  alt="Product Image"
                  src={this.state.image}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {this.state.productId}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {this.state.description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={this.removeItem}
                  style={{ color: 'red' }}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  style={{ color: 'green' }}
                  aria-label="add to shopping cart"
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default WishListItem;
