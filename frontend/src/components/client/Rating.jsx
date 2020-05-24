import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card } from '@material-ui/core';
import Axios from 'axios';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const RatingComponent = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.rating);
  const [hover, setHover] = React.useState(-1);

  const submitRating = (r) => {
    const data = {
      clientId: props.clientId,
      productId: props.productId,
      rating: r,
    };
    Axios.push('http://localhost:4000/api/rating/add', data)
      .then((e) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Rating has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.error(err));
  };

  const changeRating = (r) => {
    const data = {
      clientId: props.clientId,
      productId: props.productId,
      rating: r,
    };
    console.log(data);
    Axios.put('http://localhost:4000/api/rating/update', data)
      .then((e) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Rating has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h2>Submit Your Rating</h2>
      <Card className={classes.root}>
        <Rating
          className="card"
          name="simple-controlled"
          value={value}
          precision={0.5}
          size="large"
          onChange={(event, newValue) => {
            if (value === 0) {
              submitRating(newValue);
              setValue(newValue);
            } else {
              changeRating(newValue);
              setValue(newValue);
            }
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && <Box ml={2}>{hover !== -1 ? hover : value}</Box>}
      </Card>
    </div>
  );
};

export default RatingComponent;
