import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column">
      <Row className="flex-grow-1 justify-content-center">
        <Col md={8} lg={6}>
          <h5 className="text-info text-center mt-5">
            Siamo una piccola start-up. Questo è un nostro piccolo progetto per
            permettere agli utenti di visualizzare il meteo in tutto il mondo!
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
