import React, { Component } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import CategoryList from '../../components/client/CategoryList';
import { CategoryService } from '../../services';
import Axios from 'axios';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
    };
  }

  async componentDidMount() {
    await Axios.get('http://localhost:4000/api/category/list')
      .then((e) => {
        var array = e.data;
        this.setState({ categoryList: array });
        console.log(array);
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <Container maxWidth={'100%'}>
        <Grid
          container
          style={{
            height: '60vh',
            backgroundImage:
              'url(' +
              'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' +
              ')',
            backgroundPosition: 'auto',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1>Our Shop</h1>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper>
              <CategoryList categories={this.state.categoryList} />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper>xs</Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default ShopPage;
