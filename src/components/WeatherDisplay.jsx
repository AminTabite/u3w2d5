import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function WeatherDisplay() {
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
}

export default WeatherDisplay;
