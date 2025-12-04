import logo from "./logo.svg";
import "./App.css";
import LogPg from "./components/login page/login.jsx";
import SigPage from "./components/signup page/signup.jsx";
import HomePg from "./components/home page/home.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePg />}></Route>
        <Route path="/login" element={<LogPg />}></Route>
        <Route path="/signup" element={<SigPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
