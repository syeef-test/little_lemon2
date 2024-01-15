import { useState } from "react";

import Button from "react-bootstrap/Button";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Layouts/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
