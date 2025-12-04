import "./login.css";
import Nav from "../navbar/navbar";
import { Link } from "react-router-dom";

function loginPage() {
  return (
    <>
      <Nav />
      <div className="conatiner">
        <section action="" id="loginForm" class="formstyling">
          <h1 class="headingstyling">Login</h1>
          <input
            class="inputstyling"
            type="email"
            id="loginEmail"
            placeholder="Your Email"
          />
          <input
            class="inputstyling"
            type="password"
            id="loginPassword"
            placeholder="Password"
          />
          <button onclick="loginInfo()" class="buttonstyling">
            <Link to="/">
              <a href="#">LOGIN</a>
            </Link>
          </button>
          <p class="parastyling">
            Don't have an account ?
            <Link to="/signup">
              <a
                onclick="forAnchorTagOfRegister()"
                class="linkstyling"
                href="#"
              >
                Resgister
              </a>
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}

export default loginPage;
