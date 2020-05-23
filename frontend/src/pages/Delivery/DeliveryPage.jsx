import React, { useState } from 'react';
import {
  Grid,
  Container,
  Checkbox,
  Paper,
  TextField,
  Button,
  Divider,
  FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useForm } from 'react-hook-form';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import './DeliveryPage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const DeliveryPage = () => {
  const classes = useStyles();
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [discountCode, setDiscountCode] = useState('');

  const onSubmit = (data) => {
    console.log(data);
  };
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Container>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Cart
          </Link>
          <Link
            color="textPrimary"
            href="/getting-started/installation/"
            onClick={handleClick}
          >
            Delivery
          </Link>
          {/* <Typography color="textPrimary">Payment</Typography> */}
        </Breadcrumbs>

        <h1 className="title">Delivery Details</h1>

        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <p className="form-sub-caption">Contact Information</p>
                  <TextField
                    label="Email"
                    variant="outlined"
                    required
                    fullWidth
                  />
                  <FormControlLabel
                    control={<Checkbox name="newletter" color="primary" />}
                    label="Keep me up to date on news and exclusive offers"
                  />

                  <p className="form-sub-caption">Delivery Address</p>

                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        label="First Name"
                        variant="outlined"
                        required
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        label="Last Name"
                        variant="outlined"
                        required
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <br />
                  <Grid item xs={12}>
                    <TextField label="Company" variant="outlined" fullWidth />
                  </Grid>
                  <br />
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>

                  <br />

                  <Grid item xs={12}>
                    <TextField label="Apartment" variant="outlined" fullWidth />
                  </Grid>

                  <br />

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="City"
                        variant="outlined"
                        required
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        label="Postal Code"
                        variant="outlined"
                        required
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <br />
                  <Grid item xs={12}>
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>
                  <br />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button variant="outlined" color="primary">
                          <ShoppingCartIcon />
                        Return to Cart
                      </Button>
                    </Grid>

                    <Grid item xs={6}>
                      <Button variant="contained" color="primary">
                          <AttachMoneyIcon />
                        Continue to Payment
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <TextField
                  label="Gift Card or Discount Code"
                  variant="outlined"
                  onChange={(e) => {
                    setDiscountCode(e.target.value);
                  }}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  disabled={discountCode === ''}
                >
                  Apply
                </Button>
                <br /> <br />
                <Divider />
                <Grid container spacing={2}>
                  <Grid item xs={2} />
                  <Grid item xs={4} style={{ textAlign: 'left' }}>
                    <h5>Sub Total</h5>

                    <h5>Delivery Fee</h5>
                    <Divider />
                    <h4>Total </h4>
                  </Grid>

                  <Grid item xs={4} style={{ textAlign: 'right' }}>
                    <h5>5000 LKR</h5>

                    <h5>1000 LKR</h5>
                    <Divider />
                    <h4>6000 LKR</h4>
                  </Grid>
                  <Grid item xs={2} />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default DeliveryPage;
