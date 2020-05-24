import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Paper from '@material-ui/core/Paper';
import { ProductService } from '../../services';
//ImageGallery

const categories = [
  {
    value: 'Ladies',
    label: 'Ladies',
  },
  {
    value: 'Under Garments',
    label: 'Under Garments',
  },
  {
    value: 'Men',
    label: 'Men',
  },
  {
    value: 'Kids',
    label: 'Kids',
  },
  {
    value: 'Jwellery',
    label: 'Jwellery',
  },
  {
    value: 'Shoes',
    label: 'Shoes',
  },
];

export default function EditProduct() {
  const [category, setCategory] = React.useState('');
  const [productId, setProductId] = React.useState('');

  const initialState = {
    productId: null,
    name: "",
    category: "",
    description: "",
    stocks: "",
    price: ""
  }
  
  const [productData, setProductData] = React.useState(initialState);

  const handleSearch = () => {
    ProductService.getSearchProducts(productId)
    .then(productData => {
      setProductData(productData);
      console.log(productData);
      setValue([
        { name: productData.name, },
        { category: productData.category, },
        { description: productData.description, },
        { stocks: productData.stocks, },
        { price: productData.price, },
      ]);
    })
    .catch(e => {
      console.log(e);
    });
  
  };

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };

  const onSubmit = (data) => {
    ProductService.EditProduct(data);
    console.log(data);
  };

  const { register, handleSubmit, setValue, reset } = useForm();

  return (
    <div>
      <Grid xs={8}>
        <Paper style={{ height: '650' }}>
          <Grid
            item
            xs={12}
            style={{ marginLeft: '30px', marginRight: '30px', padding: '10px' }}
          >
            <Typography
              variant="h5"
              align="left"
              color="textSecondary"
              gutterBottom
            >
              Edit Product Details
            </Typography>
          </Grid>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                style={{ marginLeft: '30px', marginRight: '30px' }}
              >
                <TextField
                  id="productId"
                  name="productId"
                  placeholder="Search Product"
                  fullWidth
                  onChange={(e) => {
                    setProductId(e.target.value);
                  }}
                  inputRef={register}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                align="left"
                style={{ marginLeft: '30px', marginRight: '30px' }}
              >
                <Button
                  onClick={handleSearch}
                  variant="outlined"
                  color="default"
                >
                  Search
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginLeft: '30px', marginRight: '30px' }}
              >
                <TextField
                  required
                  id="name"
                  name="name"
                  placeholder="Product Name"
                  fullWidth
                  autoComplete="pname"
                  inputRef={register}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginLeft: '30px', marginRight: '30px' }}
              >
                <TextField
                  id="category"
                  name="category"
                  select
                  placeholder="Select Category"
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
                  ))}
                  >
                </TextField>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginLeft: '30px', marginRight: '30px' }}
              >
                <TextField
                  id="description"
                  name="description"
                  placeholder="Description"
                  multiline
                  rows={4}
                  fullWidth
                  inputRef={register}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginLeft: '30px', marginRight: '30px' }}
              >
                <TextField
                  required
                  id="stocks"
                  name="stocks"
                  placeholder="Stock"
                  fullWidth
                  inputRef={register}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginLeft: '30px', marginRight: '30px' }}
              >
                <TextField
                  required
                  id="price"
                  name="price"
                  placeholder="Price"
                  fullWidth
                  inputRef={register}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginLeft: '30px', marginRight: '30px' }}
              >
                <Typography
                  variant="body1"
                  align="left"
                  color="textSecondary"
                  gutterBottom
                >
                  Images
                </Typography>
                <Button variant="outlined" fullWidth color="default">
                  Add Images
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  onClick={() => {
                    reset({
                      name: '',
                      description: '',
                      stocks: '',
                      price: '',
                    });
                  }}
                  variant="outlined"
                  color="default"
                >
                  Clear
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button type="submit" variant="outlined" color="secondary">
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
