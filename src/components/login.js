import React from "react";

function LoginPage() {
  const openSlideMenu = () => {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  const closeSlideMenu = () => {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  return (
    <div>
      <head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" type="text/css" href="style.css" />
      </head>
      <body>
        <nav>
          <span className="open-slide">
            <a href="#" onClick={openSlideMenu}>
              <svg height="30px" width="30px">
                <path d="M0,5 30 5" stroke="#fff" strokeWidth="5" />
                <path d="M0,14 30 14" stroke="#fff" strokeWidth="5" />
                <path d="M0,23 30 23" stroke="#fff" strokeWidth="5" />
              </svg>
            </a>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <img src="IMG/1.png" width="100px" />
          <ul className="nav-bar">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="login.html">Login/SignUp</a>
            </li>
          </ul>
          <div id="side-menu" className="side-nav">
            <a href="#" className="btn-close" onClick={closeSlideMenu}>
              &times;
            </a>
            <a href="index.html">Home</a>
            <a href="">Events</a>
            <a href="">Categories</a>
            <a href="login.html">Login/SignUp</a>
          </div>
        </nav>
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
                  <i className="fa fa-envelope icon"></i>
                  <input
                    type="email"
                    onChange={setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                  <br />
                  <br />
                  <i className="fa fa-key icon"></i>
                  <input
                    type="password"
                    onChange={setPassword(e.target.value)}
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
      </body>
    </div>
  );
}
export default LoginPage;
