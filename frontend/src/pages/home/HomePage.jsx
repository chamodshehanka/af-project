import React, { Component } from 'react';
import Chat from '../../components/common/Chat/Chat';
import LandingContainer from '../../containers/LandingContainer';
import NewArrivalsContainer from '../../containers/NewArrivalsContainer';

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <LandingContainer />
        <Chat/>
        <NewArrivalsContainer />
      </div>
    );
  }
}

export default HomePage;
