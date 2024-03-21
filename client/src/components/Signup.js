import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => alert(err));
  };

  return (
    <>
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
            <h3>Sign Up</h3>
          </center>
          <div style={{ padding: "50px 30px" }}>
            <center>
              <form action="/register" onSubmit={handleSubmit} className="form">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <FontAwesomeIcon icon={faKey} className="icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <input type="submit" value="Register" id="Register" />
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
    </>
  );
}
export default Signup;
