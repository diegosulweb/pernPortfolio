import React from "react";
import { Carousel } from "react-bootstrap";
import Slideshow1 from "../img/slideshow1.png";
import Slideshow2 from "../img/slideshow2.png";
import Slideshow3 from "../img/slideshow3.png";

const ShowRun = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Slideshow1} alt="First slide" />
        <Carousel.Caption>
          <h3>Make your life easier</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slideshow2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slideshow3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ShowRun;
