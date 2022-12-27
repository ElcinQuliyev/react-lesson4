import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";

import About from "./layout/About.jsx";
import Contact from "./layout/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import { ROUTES } from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Navigate to="/home" />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.contact} element={<Contact />} />
        {
          //route verdikde id ve yunik key verilmelidir
          /* key 0-dan baslaylr  */
        }
      </Routes>
    </>
  );
}

export default App;
