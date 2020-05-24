import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import { WishListService } from '../../services';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
  },
  image: {
    width: '30vw',
    height: '60vh',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ProdcutDetails = (props) => {
  const classes = useStyles();

  const handleWishList = () => {
    WishListService.addToWishList(props.clientId, props.product.productId);
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={props.product.imageUrl}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.product.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.product.description}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  style={{
                    cursor: 'pointer',
                    backgroundColor: 'green',
                    color: 'white',
                    width: '10rem',
                  }}
                  onClick={handleWishList()}
                >
                  Add To Cart
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  style={{
                    cursor: 'pointer',
                    backgroundColor: 'purple',
                    color: 'white',
                    width: '10rem',
                  }}
                  onClick={handleWishList()}
                >
                  WishList Product
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                ${props.product.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProdcutDetails;
