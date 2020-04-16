import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },

    display: 'flex',
    flexWrap: 'wrap',
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

class SignUp extends Component {
  state = {};

  render() {
    return (
      <>
        <div className='container'>
          <br />
          <form className={useStyles.root} noValidate autoComplete='off'>
            <div>
              <TextField label='First Name' variant='outlined' />{' '}
              <TextField label='First Name' variant='outlined' />
            </div>

            <div>
              <TextField label='Email' type='email' variant='outlined' />
            </div>

            <div className={useStyles.root}>
              <TextField label='Phone Number' variant='outlined' />
            </div>

            <div>
              <Button variant='contained' color='primary'>
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;
