import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useForm } from 'react-hook-form';
import { ProductService } from '../../services';

export default function DeleteProduct() {
  const onSubmit = (data) => {
    ProductService.deleteProduct(data);
    console.log(data.target);
  };

  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Grid xs={8}>
        <Paper style={{ height: '320px' }}>
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
              Delete Products
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
                  id="searchProduct"
                  name="searchProduct"
                  label="Search Product"
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
                  align="left"
                  color="textSecondary"
                  variant="h6"
                ></Typography>
              </Grid>

              <Grid
                item
                xs={12}
                align="left"
                style={{ marginLeft: '30px', marginRight: '30px' }}
              >
                <Button type="submit" variant="outlined" color="secondary">
                  Delete Product
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
