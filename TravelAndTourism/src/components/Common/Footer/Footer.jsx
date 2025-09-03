import React, { useState, useEffect } from "react";
import "../Footer/footer.css";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      <footer className="pt-5">
        <Container>
          <Row>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3">Quick Links</h4>
              <ListGroup variant="flush">
                <ListGroup.Item as="div">
                  <NavLink to="/">Home</NavLink>
                </ListGroup.Item>
                <ListGroup.Item as="div">
                  <NavLink to="/about">About</NavLink>
                </ListGroup.Item>
                <ListGroup.Item as="div">
                  <NavLink to="/tour-listings">Packages</NavLink>
                </ListGroup.Item>
                <ListGroup.Item as="div">
                  <NavLink to="/contact">Contact</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3">Social Media</h4>
              <ListGroup variant="flush">
                <ListGroup.Item as="div">
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="div">
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="div">
                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3">Policies</h4>
              <ListGroup variant="flush">
                <ListGroup.Item as="div">
                  <NavLink to="/terms">Terms & Conditions</NavLink>
                </ListGroup.Item>
                <ListGroup.Item as="div">
                  <NavLink to="/privacy">Privacy Policy</NavLink>
                </ListGroup.Item>
                <ListGroup.Item as="div">
                  <NavLink to="/refund">Refund Policy</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md="3" sm="12" className="location mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3">Contact Info</h4>
              <div className="d-flex align-items-center">
                <p className="pb-2">Dehradun, Uttarakhand, India</p>
              </div>
              <div className="d-flex align-items-top my-2">
                <i className="bi bi-envelope me-3"></i>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:info@northernindiatrip.com"
                  className="d-block"
                >
                  info@northernindiatrip.com
                </a>
              </div>
              <div className="d-flex align-items-top">
                <i className="bi bi-telephone me-3"></i>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="tel:+919876543210"
                  className="d-block"
                >
                  (+91) 9876543210
                </a>
              </div>
              <div className="d-flex align-items-top mt-2">
                <i className="bi bi-clock me-3"></i>
                <span>Mon–Sat: 9 AM – 8 PM</span>
              </div>
            </Col>
          </Row>

          <Row className="py-2 bdr mt-3">
            <Col className="col copyright">
              <p className="text-light">
                © 2025 Northern India Trip. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      <div
        id="back-top"
        onClick={scrollTop}
        className={visible ? "active" : ""}
      >
        <i className="bi bi-arrow-up"></i>
      </div>
    </>
  );
};

export default Footer;






