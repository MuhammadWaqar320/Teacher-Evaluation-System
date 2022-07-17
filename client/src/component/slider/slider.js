import React from 'react'
import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/bg14.jpg";
import img2 from "../../assets/images/bg16.jpg";
import img3 from "../../assets/images/bg12.jpg";

const Slider = () => {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="slider-content">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="slider-content">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="slider-content">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Slider