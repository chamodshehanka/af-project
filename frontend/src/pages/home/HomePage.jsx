import React, { Component } from 'react';
import Chat from '../../components/common/Chat/Chat';
import LandingContainer from '../../containers/LandingContainer';
import NewArrivalsContainer from '../../containers/NewArrivalsContainer';
import FeaturedSection from '../../components/common/FeaturedSection/FeaturedSection';
import Footer from '../../components/common/Footer/Footer';
import { ClientService } from '../../services';
import jwt_decode from 'jwt-decode';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }
  componentDidMount() {
    const token = ClientService.getCurrentUser();
    const decode = jwt_decode(token);
    this.setState({
      email: decode.email,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <LandingContainer />
        <Chat />
        <NewArrivalsContainer />
        <FeaturedSection />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
