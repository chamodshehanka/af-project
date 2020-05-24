import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import ProdcutDetails from '../../components/client/ProductDetails';
import RatingComponent from '../../components/client/Rating';
import Axios from 'axios';
import CommentSection from '../../components/client/CommentSection';

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 'P001',
      product: {},
      clientId: 'C003',
      rating: 0,
      comment: {},
      ratings: [],
      comments: [],
    };
  }

  async componentWillMount() {
    const data = {
      clientId: this.state.clientId,
      productId: this.state.productId,
    };

    await Axios.get(
      'http://localhost:4000/api/product/get/' + this.state.productId
    )
      .then((e) => {
        console.log(e.data);
        this.setState({ product: e.data });
      })

      .catch((err) => console.error(err));

    await Axios.post('http://localhost:4000/api/rating/getByUser', data)
      .then((e) => {
        this.setState({ rating: e.data.rating });
      })
      .catch((err) => console.error(err));

    await Axios.post('http://localhost:4000/api/comment/get', data)
      .then((e) => {
        this.setState({ comment: e.data.comment });
      })
      .catch((err) => console.error(err));
  }
  render() {
    if (!this.state.rating || !this.state.clientId || !this.state.product)
      return <div></div>;
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper>
            <ProdcutDetails
              clientId={this.state.clientId}
              product={this.state.product}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper>
            <RatingComponent
              clientId={this.state.clientId}
              productId={this.state.productId}
              rating={this.state.rating}
            />
            <CommentSection
              clientId={this.state.clientId}
              productId={this.state.productId}
              comment={this.state.comment}
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    );
  }
}

export default ProductView;
