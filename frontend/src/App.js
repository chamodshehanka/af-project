import React from 'react';
import 'typeface-roboto';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './routes/appRoutes';
import NavBar from './components/common/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Router>
    </div>
  );
}

export default App;
