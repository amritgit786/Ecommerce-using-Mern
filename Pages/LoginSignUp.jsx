import React, { useState } from "react";
import "./CSS/LoginSignup.css";
const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    console.log("Login");
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        responseData = data;
        if (responseData.success) {
          localStorage.setItem("auth_token", responseData.token);

          window.location.replace("/");
        } else {
          alert("Login Failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const signup = async () => {
    console.log("Sign Up ");
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        responseData = data;
        if (responseData.success) {
          localStorage.setItem("auth_token", responseData.token);

          window.location.replace("/");
        } else {
          alert("Registration Failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandle}
              placeholder="Your Name"
            />
          ) : (
            ""
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandle}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandle}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Alreday have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Don't have an account?{" "}
            <span onClick={() => setState("Sign Up")}>Create an Account</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
