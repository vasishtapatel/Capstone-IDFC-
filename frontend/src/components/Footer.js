import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container style={{ maxWidth: "1680px" }}>
        <Row>
          <Col
            className="text-center"
            style={{
              background: "#000000",
              color: "white",
              paddingBottom: "2rem",
              marginBottom: "0.3rem",
            }}
          >
            Contact Us Email:vasishtapatel3579@gmail.com || Phone No:799542283
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
