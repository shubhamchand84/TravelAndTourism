import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import Banner from "../../components/Banner/Banner";
import AdvanceSearch from "../../components/AdvanceSearch/AdvanceSearch";
import Features from "../../components/Features/Features";
import Gallery from "../../components/Gallery/Gallery";
import Cards from "../../components/Cards/Cards";
import PopularCard from "../../components/Cards/PopularCard";

import ImageGallery from "../../components/ImageMemory/ImageGallery";

import { destinationsData, popularsData } from "../../utils/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 1, infinite: false, dots: true, autoplay: true },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: false, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, autoplay: true, prevArrow: false, nextArrow: false },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, prevArrow: false, nextArrow: false },
      },
    ],
  };

  return (
    <>
      <Banner />
      <AdvanceSearch />
      <Features />

      {/* Admin Login Section removed */}

      {/* Top Destinations */}
      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Top Destinations For Your Next Vacation</h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinationsData.map((destination, inx) => (
                  <Cards destination={destination} key={inx} />
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Popular Activities */}
      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Popular Activities</h1>
              </div>
            </Col>
          </Row>
          <Row>
            {popularsData.map((val, inx) => (
              <Col md={4} sm={6} xs={12} className="mb-5" key={inx}>
                <PopularCard val={val} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call To Action */}
      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h5 className="title">Plan Your Next Adventure</h5>
              <h2 className="heading">Ready to Create Unforgettable Memories?</h2>
              <p className="text">
                Discover breathtaking destinations and unique experiences that you'll cherish for a lifetime. Start your journey with us today!
              </p>
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a href="tel:6398312365" className="secondary_btn bounce" rel="noopener noreferrer">
                Contact Us!
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Photo Gallery</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Memory Upload + Gallery (Only once now) */}
      <section className="memory_gallery py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Share Your Travel Memories</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <ImageGallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
