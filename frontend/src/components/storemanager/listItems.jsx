import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditIcon from '@material-ui/icons/Edit';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <Link to="/addProduct" style={{ textDecoration: 'none', color: 'grey' }}>
      <ListItem button>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Add Product" />
      </ListItem>
    </Link>
    <Link to="editProduct" style={{ textDecoration: 'none', color: 'grey' }}>
      <ListItem button>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit Product" />
      </ListItem>
    </Link>
    <Link to="deleteProduct" style={{ textDecoration: 'none', color: 'grey' }}>
      <ListItem button>
        <ListItemIcon>
          <DeleteSharpIcon />
        </ListItemIcon>
        <ListItemText primary="Delete Product" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <Link to="discounts" style={{ textDecoration: 'none', color: 'grey' }}>
      <ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Discounts" />
      </ListItem>
    </Link>
  </div>
);
