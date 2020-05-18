import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import FeatureCard from '../FeaturedCard/FeaturedCard';

class FeaturedSection extends Component {
  render() {
    return (
      <Grid container spacing={4}>
        <Grid item md={3}>
          <FeatureCard />
        </Grid>
        <Grid item md={3}>
          <FeatureCard />
        </Grid>
        <Grid item md={3}>
          <FeatureCard />
        </Grid>
        <Grid item md={3}>
          <FeatureCard />
        </Grid>
      </Grid>
    );
  }
}

export default FeaturedSection;
