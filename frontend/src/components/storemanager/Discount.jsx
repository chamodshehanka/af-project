import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Paper from '@material-ui/core/Paper';
import { ProductService } from '../../services'

export default function Discount() {

  const [productId, setProductId] = React.useState('');

  const initialState = {
    productId: null,
    price: ""
  }

  const [productData, setProductData] = React.useState(initialState);

  const handleSearch = () => {
    console.log(productId);
    ProductService.getSearchProducts(productId)
    .then(productData => {
      setProductData(productData);
      console.log(productData);
      setValue([
        { searchedProduct: productData.productId, },
        { price: productData.price, },
 
      ]);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const onSubmit = (data) => {
    
    let amount = (data.discount/100) * data.price;
    let balance = (data.price - amount);
    console.log(balance);
  };

  const { register, handleSubmit, setValue } = useForm();

    return (
      <div>
        <Grid xs={8}>
          <Paper style={{height:'470px'}}>
        
            <Grid item xs={12}style={{marginLeft:'30px', marginRight:'30px', padding:'10px'}}>
                <Typography variant="h5"  align="left" color="textSecondary" gutterBottom>Add Discounts</Typography>
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid item container spacing={3}>
                <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>
                  <TextField
                    id="productId"
                    name="productId"
                    label="Search Product"
                    onChange={ (e) => {
                      setProductId(e.target.value)
                    }}
                    fullWidth
                    variant="outlined"
                  />
              </Grid>
              <Grid item xs={12} align="left" style={{marginLeft:'30px', marginRight:'30px'}}>
                <Button onClick={handleSearch} variant="outlined" color="default">Search</Button>
              </Grid>
                
              <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>

                <TextField 
                  align="left" 
                  id="price" 
                  name="price"  
                  marginLeft="none"
                  variant="outlined"
                  inputRef={register}
                  placeholder="Product Price"
                  InputProps={{
                    readOnly: true,
                  }}
                  helperText="Product Price"
                  />
              </Grid>
              <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>
              <TextField
                  id="discount"
                  name="discount"
                  label="Discount"
                  inputRef={register}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
                
              <Grid item xs={12} align="left" style={{marginLeft:'30px', marginRight:'30px'}}>
                  <Button type="submit" variant="outlined" color="secondary">Add Discount</Button>
              </Grid>
                  
              </Grid>
            </form>
          </Paper>
        </Grid>
      </div>
    );
  }
