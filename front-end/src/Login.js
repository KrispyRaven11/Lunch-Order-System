import React from "react";
import logo from "./images/logo.png";
import "./Login.css";
import { Form, Button, FormGroup } from "react-bootstrap";
import { useState } from "react";
import GoogleLogin from "react-google-login";

const Registraion = () => {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="logoContainer">
          <div className="logoContent">
            <img src={logo} width="60rem" height="60rem"></img>
          </div>
          <header>
            <h1>LUNCH ORDER SYSTEM</h1>
          </header>
        </div>
        <div className="mainContent">
          <div className="content">
            <div className="loginContent">
              <div className="loginHeader">
                <h2>
                  <span>Log in</span>
                </h2>
              </div>
              <div className="formContent">
                <Form>
                  <FormGroup>
                    <Form.Control type="text" placeholder="Email" />
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                    />

                    <br />
                    <div className="d-grid gap-2">
                      <Button variant="dark" size="md">
                        Confirm
                      </Button>
                    </div>
                  </FormGroup>
                </Form>
              </div>
              <hr />
              <div className="d-grid gap-2">
                {/* <GoogleLogin>
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Log in with Google" onSuccess={handleLogin}
                  onFailure={handleFailure}
                  cookiePolicy={"single_host_origin"}
                </GoogleLogin> */}
              </div>
              <p>
                Need an Account? <a href="#">Click Here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registraion;
