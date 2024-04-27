// Login.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/", {
        email,
        password,
      });

      if (res.data === "success") {
        navigate("/profile", { state: { id: email } }); // Redirect to home if login successful
      } else if (res.data === "notexist") {
        alert("User not found. Please sign up.");
        navigate("/signup");
      } else if (res.data === "invalidpassword") {
        alert("Wrong password. Please try again.");
      } else {
        alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred! Please try again later!:", error);
    }
  }

  return (
    <div>
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
            <br />
            <br />
            <h3>Login</h3>
          </center>
          <div style={{ padding: "50px 30px" }}>
            <center>
              <form onSubmit={submit}>
                <FontAwesomeIcon icon={faEnvelope} className="fa icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <br />
                <br />
                <FontAwesomeIcon icon={faKey} className="fa icon" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <br />
                <br />
                <input type="submit" value="Signin" />
                <br />
                <br />
                <br />
                <Link to="/signup">Create an Account</Link>
              </form>
            </center>
          </div>
        </section>
      </section>
      <section className="sec-7" id="int">
        <center>
          <p style={{ color: "#777", fontSize: "15px" }}>
            &copy; 2024 SPORTS | DESIGNED BY SPORTS TEAM
          </p>
        </center>
      </section>
    </div>
  );
}

export default Login;
