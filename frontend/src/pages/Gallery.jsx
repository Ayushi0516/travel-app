import React from "react";
import { Col, Container, Row } from "reactstrap";
import { MasonryImagesGallery } from "../components/Image-gallery/MasonryImagesGallery";

export const Gallery = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
