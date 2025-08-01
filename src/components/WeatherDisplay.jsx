import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const WeatherDisplay = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [meteo, setMeteo] = useState({});
  const [forecast5, setForecast5] = useState([]);

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
        console.log("Meteo attuale:", data);
        setMeteo(data);
      })
      .catch((err) => {
        console.log("Errore caricamento meteo attuale:", err);
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
      .then((data5day) => {
        console.log("Previsioni 5 giorni:", data5day);
        const listagiorni = data5day.list;
        const fivedaysmeteo = [1, 9, 17, 25, 33];
        const mappeddays = fivedaysmeteo
          .map((i) => listagiorni[i])
          .filter(Boolean);
        setForecast5(mappeddays);
      })
      .catch((err) => {
        console.log("Errore caricamento previsioni:", err);
      });
  };

  useEffect(() => {
    Getcitymeteo();
    Getfivedayforecast();
  }, [params.meteocitta]);

  return (
    <Container fluid className="min-vh-100 d-flex flex-column">
      <Row className="justify-content-start mt-5 flex-column flex-grow-1">
        <Col xs={10} md={10} lg={12}>
          <Card className="d-flex mb-5">
            <Card.Body>
              <img
                src={`https://openweathermap.org/img/wn/${meteo.weather?.[0]?.icon}@2x.png`}
                alt="weather icon"
              />
              <Card.Title>Today in {meteo.name}</Card.Title>
              <Card.Text>Current Temperature: {meteo.main?.temp}°C</Card.Text>
              <Card.Text>Min Temperature: {meteo.main?.temp_min}°C</Card.Text>
              <Card.Text>Max Temperature: {meteo.main?.temp_max}°C</Card.Text>
              <Card.Text>Weather: {meteo.weather?.[0]?.description}</Card.Text>
              <Card.Text>
                Coordinates: {meteo.coord?.lat}, {meteo.coord?.lon}
              </Card.Text>
              <Card.Text>Wind speed: {meteo.wind?.speed} m/s</Card.Text>
            </Card.Body>
            <div className="text-center mb-3">
              <Button
                className="w-auto"
                onClick={() => navigate("/")}
                variant="primary">
                Back to Home
              </Button>
            </div>
          </Card>
        </Col>

        {forecast5.map((day) => (
          <Col key={day.dt_txt} xs={10} md={10} lg={12}>
            <Card className="d-flex mb-5">
              <Card.Body>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather?.[0]?.icon}@2x.png`}
                  alt="weather icon"
                />
                <Card.Title>{day.dt_txt.split(" ")[0]}</Card.Title>
                <Card.Text>Min Temperature: {day.main?.temp_min}°C</Card.Text>
                <Card.Text>Max Temperature: {day.main?.temp_max}°C</Card.Text>
                <Card.Text>Humidity: {day.main?.humidity}%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WeatherDisplay;
