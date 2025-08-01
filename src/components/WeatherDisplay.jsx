import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const WeatherDisplay = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [meteo, setMeteo] = useState(null);

  const endpointmeteo = `https://api.openweathermap.org/data/2.5/weather?q=${params.meteoid}&appid=403ed90126e767832d550156e2a1b337&units=metric&lang=it`;

  const endpointfivedays = `https://api.openweathermap.org/data/2.5/forecast?q=${params.meteoid}&appid=403ed90126e767832d550156e2a1b337&units=metric&lang=it`;

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
  }, [params.meteoid]);

  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>dati</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default WeatherDisplay;
