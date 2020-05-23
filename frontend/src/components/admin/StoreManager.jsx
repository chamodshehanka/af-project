import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { AdminService } from '../../services';

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
  };
 
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h2>Add new Manager</h2>
      <form 
        className={classes.root} 
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >

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
          ref={register}
          InputLabelProps={{
            shrink: true,
          }}
        />
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
          ref={register}
          InputLabelProps={{
            shrink: true,
          }}
        />
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
          ref={register}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="password"
          label="Password"
          name="password"
          autoComplete="password"
          required
          style={{ margin: 8 }}
          placeholder="Enter password"
          type="password"
          autoComplete="current-password"
          fullWidth
          margin="normal"
          ref={register}
          InputLabelProps={{
            shrink: true,
          }}
        />
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
