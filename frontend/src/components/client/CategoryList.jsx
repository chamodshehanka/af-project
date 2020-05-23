import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CategoryList = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  var displayList = (props) => {
    if (!props.categories.length) return '';

    return props.categories.map((category, index) => (
      <div key={index}>
        <ListItem button onClick={(event) => handleListItemClick(event, index)}>
          <ListItemText primary={category.name} />
          <Divider></Divider>
        </ListItem>
      </div>
    ));
  };

  return (
    <div className={classes.root}>
      <List component="nav">
        <h2>Category List</h2>
        {displayList(props)}
      </List>
    </div>
  );
};

export default CategoryList;
