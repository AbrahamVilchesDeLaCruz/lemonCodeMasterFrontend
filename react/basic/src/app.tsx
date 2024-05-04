import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { RickyMortyPage } from "./rickMorty";
import { HomePage } from "./home";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:org/:id" element={<DetailPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/rickMorty" element={<RickyMortyPage />} />
      </Routes>
    </Router>
  );
};
