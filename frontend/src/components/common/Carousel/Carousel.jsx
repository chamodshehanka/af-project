import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.css";

class Carousel extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container-fluid">
          <OwlCarousel
            items={1}
            className="owl-theme"
            loop
            nav
            margin={4}
            autoPlay={true}
            nav={false}
          >
            <div>
              <img
                className="img"
                src={
                  "https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/banners/4f587420069060f35438cdb84b8e11273b054d6d.jpg"
                }
                alt="Landing Images"
              />
            </div>

            <div>
              <img
                className="img"
                src={
                  "https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/banners/7ac0e3b09c981296236a27e92e613be8c98bb6aa.jpg"
                }
                alt="Landing Images"
              />
            </div>

            <div>
              <img
                className="img"
                src={
                  "https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/banners/49d4b9979f0f8e8feee32a595796156abe64ee96.png"
                }
                alt="Landing Images"
              />
            </div>

            <div>
              <img
                className="img"
                src={
                  "https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/banners/e242fbef31680c194bf85ee2be46bb7824d02e0f.jpg"
                }
                alt="Landing Images"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Carousel;
