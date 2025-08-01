import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      navigate(`/details/${city}`); // permette alla pagina con la città nell’URL
    }
  };

  return (
    <Container>
      <Row className="justify-content-center m-2">
        <Col xs={12} md={6} lg={6}>
          <Form onSubmit={handleSearch}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Pick your city!"
                  className="mr-sm-2 mx-3"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
