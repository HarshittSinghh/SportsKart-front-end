import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faVenusMars,
  faCircle,
  faMap,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    sports: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, sports, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Contect-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        sports: sports,
        password: password,
        cpassword: cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Regestration");
    } else {
      window.alert("Registration Successfull");
      console.log("Successfully Registration");

      history.pushState("/login");
    }
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
          <div id="add_err2"></div>
          <center>
            <h3>Sign Up</h3>
          </center>
          <div style={{ padding: "50px 30px" }}>
            <center>
              <form className="form" method="post">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name "
                  autoComplete="off"
                  value={user.name}
                  onChange={handleInputs}
                />
                <br />
                <br />
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInputs}
                />
                <br />
                <br />
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  maxLength="10"
                  placeholder="Phone Number"
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInputs}
                />
                <br />
                <br />

                <FontAwesomeIcon icon={faCircle} className="icon" />
                <input
                  type="text"
                  id="sports"
                  name="sports"
                  maxLength="30"
                  placeholder="Intrested Sports"
                  autoComplete="off"
                  value={user.sports}
                  onChange={handleInputs}
                />
                <br />
                <br />
                <FontAwesomeIcon icon={faKey} className="icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInputs}
                />
                <br />
                <br />
                <FontAwesomeIcon icon={faKey} className="icon" />
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  value={user.cpassword}
                  onChange={handleInputs}
                />
                <br />
                <br />
                <input
                  type="submit"
                  value="Register"
                  id="Register"
                  onClick={postData}
                />
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
};

export default SignupPage;
