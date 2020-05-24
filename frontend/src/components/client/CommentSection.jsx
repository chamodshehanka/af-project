import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { CommentService } from '../../services';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const CommentSection = (props) => {
  const classes = useStyles();
  //const [value, setValue] = React.useState(props.comment);

  const onSubmit = (data) => {
    console.log(data);
    console.log(props.clientId);
    console.log(props.productId);
    CommentService.addComment(props.clientId, props.productId, data.comment);
  };
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h2>Submit Your Review</h2>
      <Card className={classes.root}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="comment"
            label="Comment"
            name="comment"
            autoFocus
            multiline
            rows={4}
            inputRef={register}
          />
          <Button type="submit">Post</Button>
        </form>
      </Card>
    </div>
  );
};

export default CommentSection;
