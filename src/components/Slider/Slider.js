
import React, { Component } from "react";
import Slider from "react-slick";

import example from '../Home/Git.png'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            {/* <img src={example}/> */}
            <iframe width="420" height="315"
              src="https://youtu.be/wvbdKwsP6nk">
            </iframe>
          </div>
          <div>
            {/* <img src={example}/> */}

          </div>
          
        </Slider>
      </div>
    );
  }
}