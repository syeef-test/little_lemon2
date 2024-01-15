import { useState } from "react";

import Button from "react-bootstrap/Button";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Layouts/Header.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
