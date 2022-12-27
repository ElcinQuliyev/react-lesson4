import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { ROUTES } from "./routes";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Navigate to="/home" />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.contact} element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
