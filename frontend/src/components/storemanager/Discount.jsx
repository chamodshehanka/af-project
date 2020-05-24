import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { ProductService } from '../../services'

export default function Discount() {

  const [productId, setProductId] = React.useState('');

  const handleSearch = () => {
    ProductService.getProductById(productId);
    // console.log(data);
  };

  //const { register, handleSubmit, reset } = useForm();

    return (
      <div>
        <Grid xs={8}>
          <Paper style={{height:'400px'}}>
        
            <Grid item xs={12}style={{marginLeft:'30px', marginRight:'30px', padding:'10px'}}>
                <Typography variant="h5"  align="left" color="textSecondary" gutterBottom>Add Discounts</Typography>
            </Grid>
            
            <Grid container spacing={3}>
              <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>
                <TextField
                  id="searchProduct"
                  name="searchProduct"
                  label="Search Product"
                  onChange={ (e) => {
                    setProductId(e.target.value)
                  }}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} align="left" style={{marginLeft:'30px', marginRight:'30px'}}>
                <Button onclick={handleSearch} variant="outlined" color="default">Search</Button>
              </Grid>
  
              <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>
                <Typography align="left" color="textSecondary" variant="h6">Searched Product</Typography>
              </Grid>
  
              <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>
                <TextField
                  id="discount"
                  name="discount"
                  label="Discount"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
  
              <Grid item xs={12} align="left" style={{marginLeft:'30px', marginRight:'30px'}}>
                  <Button variant="outlined" color="secondary">Add Discount</Button>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
