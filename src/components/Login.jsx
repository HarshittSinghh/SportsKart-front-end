import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons"; // Import necessary icons
import "./style.css"; // Import CSS for styling if needed
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="sec-4">
      <section className="login">
        <div className="title">
          <center>
            <h1>My Account</h1>
          </center>
          <center>
            <h4>Home / My Account</h4>
          </center>
        </div>
        <center>
          <h3>Login</h3>
        </center>
        <div style={{ padding: "50px 30px" }}>
          <center>
            <form>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input type="email" placeholder="Email" required />
              <br />
              <br />
              <FontAwesomeIcon icon={faKey} className="icon" />
              <input type="password" placeholder="Password" required />
              <br />
              <br />
              <input type="checkbox" /> Remember Me
              <br />
              <br />
              <input type="submit" value="Sign up" />
              <br />
              <br />
              <br />
              <NavLink nav-link to="/signup">
                Create an Account
              </NavLink>
            </form>
          </center>
        </div>
      </section>
      <section className="sec-7" id="int">
        <center>
          <p style={{ color: "#777", fontSize: "15px" }}>
            &copy; 2024 SPORTS | DESIGNED BY SPORTS TEAM
          </p>
        </center>
      </section>
    </section>
  );
};

export default LoginPage;
