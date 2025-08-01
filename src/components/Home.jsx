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
    <>
      <h3 className="m2 mt-5 text-info text-center">
        BENVENUTO SU QUICKWEATHER!
      </h3>
      <h5 className="m2- text-info text-center">
        Cerca il meteo della cittá che ti serve qui sotto!
      </h5>
      <Container>
        <Row className="justify-content-center m-2 mt-5">
          <Col xs={12} md={6} lg={6}>
            <Form
              className="d-flex justify-content-center"
              onSubmit={handleSearch}>
              <Form.Control
                type="text"
                placeholder="Pick your city!"
                className="mr-sm-2 mx-3"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <Button type="submit">Search</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
