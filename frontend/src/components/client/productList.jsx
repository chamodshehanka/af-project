import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductItem from './productItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
}));

var displayList = (props) => {
  if (!props.products.length) return '';

  return props.products.map((p, index) => (
    <ProductItem key={index} product={p}></ProductItem>
  ));
};
const ProductList = (props) => {
  const classes = useStyles();

  return <div className={classes.root}>{displayList(props)}</div>;
};

export default ProductList;
