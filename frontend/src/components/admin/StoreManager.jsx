import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { AdminService } from '../../services';
import _uniqueId from 'lodash/uniqueId';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function StoreManager() {
  const classes = useStyles();

  const onSubmit = (data) => {
    console.log(data);
    AdminService.addStoreManager(data);
    reset({
      name: '',
      email: '',
      contactNo: '',
      password: '',
    });
  };
  const [id] = useState(_uniqueId('prefix-'));

  const { reset, errors, register, handleSubmit } = useForm();
  return (
    <div>
      <h2>Add new Manager</h2>

      <form
        className={classes.root}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          id="storeManagerId"
          type="hidden"
          name="storeManagerId"
          margin="normal"
          value={id}
          inputRef={register({
            required: 'Required',
          })}
        />

        <TextField
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          required
          style={{ margin: 8 }}
          placeholder="Enter full Name"
          fullWidth
          margin="normal"
          inputRef={register({
            required: 'Required',
          })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {errors.name && 'Name is required.'}

        <TextField
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          required
          style={{ margin: 8 }}
          placeholder="Enter Email Address"
          fullWidth
          margin="normal"
          inputRef={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address',
            },
          })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {errors.email && errors.email.message}

        <TextField
          id="contactNo"
          label="Contact Number"
          name="contactNo"
          autoComplete="contactNo"
          required
          style={{ margin: 8 }}
          placeholder="Enter Contact Number"
          fullWidth
          margin="normal"
          inputRef={register({
            required: 'Required',
            minLength: {
              value: 10,
              message: 'Contact number must have at least 10 characters',
            },
          })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {errors.contactNo && errors.contactNo.message}

        <TextField
          id="password"
          label="Password"
          name="password"
          required
          style={{ margin: 8 }}
          placeholder="Enter password"
          type="password"
          autoComplete="current-password"
          fullWidth
          margin="normal"
          inputRef={register({
            required: 'You must specify a password',
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
          })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {errors.password && errors.password.message}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Register
        </Button>
      </form>
    </div>
  );
}
