import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendario from "./modules/Calendar";
import LogIn from "./modules/LogIn";
import NavBar from "./modules/NavBar";
import ProtectedRoutes from "./modules/ProtectedRoutes";
import Vacations from "./modules/Vacations";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route element={<LogIn />} path="/login" />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Vacations />} path="/vacations" />
          <Route element={<Calendario />} path="/calendar" />
        </Route>
      </Routes>
    </Router>
  );
}
