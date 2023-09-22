import React, { useEffect } from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import { Subtitle } from "../shared/Subtitle";
import { SearchBar } from "../shared/SearchBar";
import { ServiceList } from "../services/ServiceList";
import { FeaturedTourList } from "../components/Featured-tours/FeaturedTourList";
import experienceImg from "../assets/images/experience.png";
import { MasonryImagesGallery } from "../components/Image-gallery/MasonryImagesGallery";
import { Testimonial } from "../components/Testimonial/Testimonial";
import { Newsletter } from "../shared/Newsletter";
import { TEXT } from "../utils/text";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="world" />
                </div>
                <h1>
                  {TEXT.TRAVELING}
                  <span className="highlight"> {TEXT.MEMORIES}</span>
                </h1>
                <p>
                  {TEXT.TRAVELING_PARA}
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="place" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="people" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">{TEXT.WHAT_WE_SERVE}</h5>
              <h2 className="services__title">{TEXT.WE_OFFER}</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">{TEXT.OFFER}</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  {TEXT.WITH_OUR_EXPERIENCE} <br /> {TEXT.WE_WILL_SERVE_YOU}
                </h2>
                <p>
                  {TEXT.TRAVELING_PARA}
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>{TEXT.TWELVE_K}</span>
                  <h6>{TEXT.SUCCESSFUL_TRIP}</h6>
                </div>

                <div className="counter__box">
                  <span>{TEXT.TWO_K}</span>
                  <h6>{TEXT.REGULAR_CLIENTS}</h6>
                </div>

                <div className="counter__box">
                  <span>15</span>
                  <h6>{TEXT.YEARS_EXPERIENCE}</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery_title">
                {TEXT.VISIT}
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">{TEXT.OUR_FANS}</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};
