import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import Button from "../../components/Button";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      try {
        const response = await fetch("http://localhost:8080/api/v1/users", {
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
        } else {
          setError(response.text());
        }
      } catch (e) {
        console.error(e);
        setError("Error");
      }
    } else {
      setError("Hesla sa nezhoduju");
    }
  };
  return (
    <form onSubmit={handleRegister}>
      <p>{error}</p>
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
      <input
        type="password"
        name="passwordConfirm"
        placeholder="Password Confirmation"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      ></input>
      <br />
      <Button className={"bg-black text-white w-3/4"} type="submit" text="Register" />
    </form>
  );
};

export default Register;
