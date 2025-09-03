import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.png";
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
              <h5 className="heading">
  DISCOVER <span>THE WORLD WITH US</span>
</h5>
<p className="sub_text">
  Embark on unforgettable journeys to breathtaking destinations. Whether you're craving adventure, culture, or relaxation — we've got the perfect getaway waiting for you.
</p>          </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
  DISCOVER <span>THE WORLD WITH US</span>
</h5>
<p className="sub_text">
  Embark on unforgettable journeys to breathtaking destinations. Whether you're craving adventure, culture, or relaxation — we've got the perfect getaway waiting for you.
</p>
   </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
