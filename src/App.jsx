import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DescripcionPrueba from "./Pages/DescripcionPrueba";
import Profiles from "../src/Pages/Profiles";
import Login from "./Pages/Login";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/perfiles" element={<Profiles />} />
          <Route path="/pelicula/:id" element={<DescripcionPrueba />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
