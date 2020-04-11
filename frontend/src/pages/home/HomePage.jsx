import React, { Component } from "react";
import Chat from "../../components/common/Chat/Chat";
import NavBar from "../../components/common/Navbar/Navbar";
import LandingContainer from "../../containers/LandingContainer";
import NewArrivalsContainer from "../../containers/NewArrivalsContainer";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <LandingContainer />
        <Chat style={{ position: "relative", zIndex: "9999" }} />
        <NewArrivalsContainer />
      </div>
    );
  }
}

export default HomePage;
