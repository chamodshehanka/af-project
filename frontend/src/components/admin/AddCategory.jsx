import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { CategoryService } from '../../services';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AddCategory() {
  const classes = useStyles();

  const onSubmit = (data) => {
    console.log(data);
    CategoryService.addCategory(data);
    reset({
      name: '',
      description:'',
      image:'',
      featured: '',
      productCount: '',
    });
  };

  const { reset, errors, register, handleSubmit } = useForm();

  return (
    <div>
      <h2>Add new Category</h2>

      <form
        className={classes.root}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          id="name"
          label="Category Name"
          name="name"
          autoComplete="name"
          required
          style={{ margin: 8 }}
          placeholder="Enter Category Name"
          fullWidth
          margin="normal"
          inputRef={register({
            required: 'Required',
          })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {errors.name && 'Category name is required.'}

        <TextField
          id="description"
          label="Description"
          name="description"
          autoComplete="description"
          required
          style={{ margin: 8 }}
          placeholder="Enter short description"
          fullWidth
          margin="normal"
          inputRef={register({
            required: 'Required'
          })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {errors.description && errors.description.message}

        <TextField
          id="image"
          label="Category Image"
          name="image"
          autoComplete="image"
          required
          style={{ margin: 8 }}
          placeholder="Enter Category Image"
          fullWidth
          margin="normal"
          inputRef={register({
            required: 'Required'
          })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {errors.image && errors.image.message}

      <FormControl className={classes.formControl}>
        <select 
        name="featured"
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"  
        displayEmpty
        className={classes.selectEmpty} 
        ref={register}>
        <option value={true}>True</option>
        <option value={false}>False</option>
      </select>
      </FormControl> 

        {/* <FormControl className={classes.formControl}>
        <InputLabel>Featured Category</InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"  
          displayEmpty
          className={classes.selectEmpty}
          name="featured" 
          ref={register}
        >
          <MenuItem value={true}>True</MenuItem>
          <MenuItem value={false}>False</MenuItem>
        </Select>
      </FormControl> */}
          <br /><br /><br /><br />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add
        </Button>
      </form>
    </div>
  );
}
