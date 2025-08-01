import NavbarMeteo from "./components/NavbarMeteo";
import Searchbar from "./components/Searchbar";
import WeatherDisplay from "./components/WeatherDisplay";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavbarMeteo />
      <Searchbar />
      <WeatherDisplay />
    </>
  );
}

export default App;
