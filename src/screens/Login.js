import React, { useState } from "react";
import {Link, useNavigate}  from 'react-router-dom'
const Login = () => {
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json(); // Await response.json()
      console.log(json);
      if (!json.success) {
        alert("Enter Valid Credentials");
      } else {
        alert("Signup successful!");
        localStorage.setItem("userEmail",credentials.email)
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"))
        navigate("/")
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("An error occurred. Please try again later.");
    }
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <Link className="m-3" to="/signup">
          Do Not Have account??   Click Here !!
        </Link>
      </form>
    </div>
  );
};

export default Login;
