import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const WeatherDisplay = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [meteo, setMeteo] = useState({});

  const endpointmeteo = `https://api.openweathermap.org/data/2.5/weather?q=${params.meteocitta}&appid=403ed90126e767832d550156e2a1b337&units=metric&lang=en`;

  const endpointfivedays = `https://api.openweathermap.org/data/2.5/forecast?q=${params.meteocitta}&appid=403ed90126e767832d550156e2a1b337&units=metric&lang=en`;

  const Getcitymeteo = () => {
    fetch(endpointmeteo)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore recupero meteo");
        }
      })
      .then((data) => {
        console.log("📦 Meteo attuale:", data);
        setMeteo(data);
      })
      .catch((err) => {
        console.log("❌ Errore caricamento meteo attuale:", err);
      });
  };

  const Getfivedayforecast = () => {
    fetch(endpointfivedays)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore recupero previsioni");
        }
      })
      .then((data) => {
        console.log("📆 Previsioni 5 giorni:", data);
      })
      .catch((err) => {
        console.log("❌ Errore caricamento previsioni:", err);
      });
  };

  useEffect(() => {
    Getcitymeteo();
    Getfivedayforecast();
  }, [params.meteocitta]);

  return (
    <Container>
      <Row className="justify-content-start m-5">
        <Col xs={10} md={10} lg={12}>
          <Card className="d-flex ">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{meteo.name}</Card.Title>
              <Card.Text>Current Temperature: {meteo.main?.temp}C°</Card.Text>
              <Card.Text>Min Temperature: {meteo.main?.temp_min}C°</Card.Text>
              <Card.Text>Max Temperature: {meteo.main?.temp_min}C°</Card.Text>
              <Card.Text>
                Current Weather: {meteo.weather?.[0]?.description}
              </Card.Text>
              <Card.Text>
                Latitude : {meteo.coord?.lat} & Longitude : {meteo.coord?.lon}
              </Card.Text>
              <Card.Text>Wind speed :{meteo.wind?.speed}</Card.Text>
            </Card.Body>
            <Button onClick={() => navigate("/")} variant="primary">
              back to home
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherDisplay;
