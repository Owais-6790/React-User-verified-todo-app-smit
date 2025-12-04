import { Link } from "react-router-dom";
import Nav from "../navbar/navbar";
import "./home.css";

export default function home() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="heading">
          <h1>This is Home Page</h1>
          <Link to="/login">
            <a href="">Go To Login Page</a>
          </Link>
        </div>
      </div>
    </>
  );
}
