import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
import { TEXT } from "../utils/text";

export const Newsletter = () => {
  return (
    <Container className="newsletter">
      <Row>
        <Col lg="6">
          <div className="newsletter__content">
            <h2>{TEXT.SUBSCRIBE_DETAILS}</h2>

            <div className="newsletter__input">
              <input type="email" placeholder="Enter your email" />
              <button className="btn newsletter__btn">{TEXT.SUBSCRIBE}</button>
            </div>

            <p>
             {TEXT.TRAVELING_PARA}
            </p>
          </div>
        </Col>
        <Col lg='6'>
          <div className="newsletter__img">
            <img src={maleTourist} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
