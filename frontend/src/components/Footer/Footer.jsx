import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { TEXT } from "../../utils/text";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

export const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <Link to='/'><img src={logo} alt="" /></Link>
              <p>{TEXT.FOOTER_PARA}.</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link target="_blank" to="https://www.linkedin.com/in/ayushi-gupta-b98676236/">
                    <i class="ri-linkedin-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link target="_blank" to="https://github.com/Ayushi0516">
                    <i class="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link target="_blank" to="https://twitter.com">
                    <i class="ri-twitter-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link target="_blank" to="https://medium.com/@ayushigupta0516">
                    <i class="ri-medium-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__links-title">{TEXT.DISCOVER}</h5>

            <ListGroup>
              {quick__links?.map((item, index) => (
                <ListGroupItem key={index} className="quick__links ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__links-title">{TEXT.QUICK_LINKS}</h5>

            <ListGroup>
              {quick__links2?.map((item, index) => (
                <ListGroupItem key={index} className="quick__links ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__links-title">{TEXT.CONTACT}</h5>

            <ListGroup className="footer__quick-links">
              
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-map-pin-fill"></i>
                    </span>
                    {TEXT.ADDRESS}
                  </h6>
                  <p className="mb-0">{TEXT.CONTACT_CITY}</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-mail-fill"></i>
                    </span>
                    {TEXT.EMAIL}
                  </h6>
                  <p className="mb-0">{TEXT.EMAIL_ADDRESS}</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-phone-fill"></i>
                    </span>
                    {TEXT.PHONE}
                  </h6>
                  <p className="mb-0">{TEXT.PHONE_NUMBER}</p>
                </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className="text-center pt-5">
            <p className="love">{TEXT.MADE_WITH} <i className="ri-heart-fill"></i> {TEXT.IN} {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
