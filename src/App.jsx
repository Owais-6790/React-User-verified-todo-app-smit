import "./App.css";
import LogPg from "./components/login page/login.jsx";
import SigPage from "./components/signup page/signup.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navigate from "./components/firstscreennavigation/navigate.jsx";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setcurrentUser] = useState(
    localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null,
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate />}></Route>
        <Route path="/login" element={<LogPg />}></Route>
        <Route path="/signup" element={<SigPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
