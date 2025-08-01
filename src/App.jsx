import NavbarMeteo from "./components/NavbarMeteo";
import Home from "./components/Home";
import WeatherDisplay from "./components/WeatherDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarMeteo />
        <Routes>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/details/:meteocitta"
            element={<WeatherDisplay />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
