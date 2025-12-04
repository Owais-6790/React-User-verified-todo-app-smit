import "./signup.css";
import Nav from "../navbar/navbar";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Nav />
      <div className="conatiner">
        <section id="signUp" class="formstyling">
          <h1 class="headingstyling">Register</h1>
          <input
            class="inputstyling"
            type="text"
            id="userName"
            placeholder="Your Name"
          />
          <input
            class="inputstyling"
            type="email"
            id="userEmail"
            placeholder="Your Email"
          />
          <input
            class="inputstyling"
            type="number"
            id="userNumber"
            placeholder="Your Number"
          />
          <input
            class="inputstyling"
            type="password"
            id="userPassword"
            placeholder="Password"
          />
          <button onclick="signUpInfo()" class="buttonstyling">
            <Link to="/login">SIGN UP</Link>
          </button>
          <p class="parastyling">
            Already have an account ?
            <Link to="/login">
              <a class="linkstyling" href="#">
                Login in
              </a>
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}

export default Signup;
