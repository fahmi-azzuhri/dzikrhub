import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alquran from "./pages/Alquran";
import Dzikir from "./pages/Dzikir";
import AsmaulHusna from "./pages/AsmaulHusna";
import Doa from "./pages/Doa";
import Home from "./pages/Home";
export default function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alquran" element={<Alquran />} />
          <Route path="/doa" element={<Doa />} />
          <Route path="/asmaul-husna" element={<AsmaulHusna />} />
          <Route path="/dzikir" element={<Dzikir />} />
        </Routes>
      </Router>
    </div>
  );
}
