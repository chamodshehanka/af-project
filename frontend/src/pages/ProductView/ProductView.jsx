import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import ProdcutDetails from '../../components/client/ProductDetails';

class ProductView extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper>
            <ProdcutDetails />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper>xs=12 sm=6</Paper>
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
