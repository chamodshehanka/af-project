import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { mainListItems, secondaryListItems } from '../../components/storemanager/listItems';
import AddProduct from '../../components/storemanager/AddProduct';
import EditProduct from '../../components/storemanager/EditProduct';
import DeleteProduct from '../../components/storemanager/DeleteProduct';
import Discount from '../../components/storemanager/Discount';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },

  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    alignItems: 'left',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 650,
  },

}));

export default function ProductPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
  <Router>  
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
        
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Switch>
             <Route exact path = '/addProduct'>
               <AddProduct />
             </Route>
             <Route exact path = '/editProduct'>
               <EditProduct />
             </Route>
             <Route exact path = '/deleteProduct'>
               <DeleteProduct />
             </Route>
             <Route exact path = '/discounts'>
              <Discount />
             </Route>
            </Switch>
          </Grid>
        </Container>
      </main>
    </div>
  </Router>
  );
}
