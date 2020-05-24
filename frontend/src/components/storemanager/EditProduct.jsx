import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Paper from '@material-ui/core/Paper';
import { ProductService } from '../../services'
//ImageGallery

const categories = [
  {
    value: 'Saare',
    label: 'Saare',
  },
  {
    value: 'Casual',
    label: 'Casual',
  },
];

export default function EditProduct() {
  
  const [category, setCategory] = React.useState('');
  const [productId, setProductId] = React.useState('');
  const [productData, setProductData] = React.useState([]);

  const handleSearch = () => {
    setProductData(ProductService.getProductById(productId)) 
    console.log(productId)
    console.log(productData)
    // setValue([
    //   { name: productData.name, },
    //   { category: productData.category, },
    //   { descripton: productData.description, },
    //   { stocks: productData.stocks, },
    //   { price: productData.price, },
    // ]);
    
  };

  const handleSelectChange = (event) => {
    setCategory(event.target.value)
  };

  const onSubmit = (data) => {
    ProductService.EditProduct(data);
    console.log(data);
  };

  const { register, handleSubmit, setValue, reset } = useForm();
 
  return (
    <div>
      <Grid xs={8}>
        <Paper style={{height:'650'}}>
        <Grid item xs={12}style={{marginLeft:'30px', marginRight:'30px', padding:'10px'}}>
            <Typography variant="h5"  align="left" color="textSecondary" gutterBottom>Edit Product Details</Typography>
        </Grid>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>
                <TextField
                  id="searchProduct"
                  name="searchProduct"
                  label="Search Product"
                  fullWidth
                  onChange={ (e) => {
                    setProductId(e.target.value)
                  }}
                  variant="outlined"
                />
            </Grid>
            <Grid item xs={12} align="left" style={{marginLeft:'30px', marginRight:'30px'}}>
              <Button onClick={handleSearch} variant="outlined" color="default">Search</Button>
            </Grid>
            <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>
              <TextField
                required
                id="productName"
                name="name"
                label="Product Name"
                fullWidth
                autoComplete="pname"
                inputRef={register}
                variant="outlined"
              />
              </Grid>
             <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>
                <TextField
                   id="filled-select-currency-native"
                   name="category"
                   select
                   label="Select Category"
                   fullWidth
                   value={category}
                   onChange={handleSelectChange}
                   inputRef={register}
                   SelectProps={{
                     native: true,
                   }}
                   variant="outlined"
                 >
                   {categories.map((option) => (
                     <option key={option.value} value={option.value}>
                     {option.label}
                   </option>
                    ))}>
                </TextField>
              </Grid>
              <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>
              <TextField
                   id="filled-multiline-flexible"
                   name="description"
                   label="Description"
                   multiline
                   rows={4}
                   fullWidth
                   inputRef={register}
                   variant="outlined"
               />
              </Grid>
              <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>
                <TextField
                  required
                  id="stock"
                  name="stocks"
                  label="Stock"
                  fullWidth
                  inputRef={register}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} style={{marginLeft:'30px', marginRight:'30px'}}>
                <TextField
                  required
                  id="price"
                  name="price"
                  label="Price"
                  fullWidth
                  inputRef={register}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}style={{marginLeft:'30px', marginRight:'30px'}}>
              <Typography variant="body1" align="left" color="textSecondary" gutterBottom>Images</Typography>
              <Button variant="outlined" fullWidth color="default">Add Images</Button>
              </Grid> 

              <Grid item xs={12} sm={6}>
                  <Button onClick={() => {
                    reset({
                      name: "",
                      description: "",
                      stocks: "",
                      price: ""
                    },);}} 
                    variant="outlined" 
                    color="default">Clear</Button>
               </Grid> 

              <Grid item xs={12} sm={6} >
              <Button type="submit" variant="outlined" color="secondary">Save Changes</Button>
              </Grid>  
            </Grid>
          </form>
        </Paper>
      </Grid>  
    </div>
    );
  }
