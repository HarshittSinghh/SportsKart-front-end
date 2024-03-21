import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === success) {
          navigate("/Home");
        }
      })
      .catch((err) => alert(err));
  };

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
            <h3>Login</h3>
          </center>
          <div style={{ padding: "50px 30px" }}>
            <center>
              <form>
                <FontAwesomeIcon icon={faEnvelope} className="fa icon" />
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  required
                />
                <br />
                <br />
                <FontAwesomeIcon icon={faKey} className="fa icon" />
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  required
                />
                <br />
                <br />
                <input type="checkbox" /> Remember Me
                <br />
                <br />
                <input type="submit" value="Sign up" />
                <br />
                <br />
                <br />
                <a href="register.html">Create an Account</a>
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
};

export default LoginPage;
