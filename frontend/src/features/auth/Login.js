import React, { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { AuthContext } from "../../App";

const user = {
  // id: "677440b5ecd1d91e40338aa5",
  username: "john_doe",
  password: "securepassword",
  // firstName: "John",
  // lastName: "Doe",
  // email: "john.doe@example.com",
  // phoneNumber: "1234567890",
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loggedIn, setLoggedIn] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const jwtToken = await response.text();
        setError("dobre je: " + { jwtToken });
        Cookies.set("jwt", jwtToken, { expires: 30 });
        setLoggedIn(true);
        setError(Cookies.get("jwt"));
        navigate("/");
      } else if (response.status === 401) {
        setError("Bad credentials");
      }
    } catch (e) {
      console.error("Login error:", e);
      setError("An error occurred. Please try again.");
    }
  };
  return loggedIn ? (
    <h1>Vitaj</h1>
  ) : (
    <div>
      <h1>Login</h1>
      <p>{error}</p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Login;
