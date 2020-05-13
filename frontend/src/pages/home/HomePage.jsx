import React, { Component } from 'react';
import Chat from '../../components/common/Chat/Chat';
import LandingContainer from '../../containers/LandingContainer';
import NewArrivalsContainer from '../../containers/NewArrivalsContainer';
import FeatureCard from '../../components/common/FeaturedCard/FeaturedCard';
import FeaturedSection from '../../components/common/FeaturedSection/FeaturedSection';

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <LandingContainer />
        <Chat/>
        <NewArrivalsContainer />
        <FeaturedSection/>
      </div>
    );
  }
}

export default HomePage;
