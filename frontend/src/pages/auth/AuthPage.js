import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Login from "./Login";
import Register from "./Register"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../../components/Button";
import { AuthContext, UserIdContext, PopupContext } from "../../App";

const AuthPage = ({ login }) => {
  const [loginState, setLoginState] = useState(login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loggedIn, setLoggedIn] = useContext(AuthContext);
  const [userId, setUserId] = useContext(UserIdContext);
  const [popupMessage, setPopupMessage] = useContext(PopupContext);
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
        Cookies.set("jwt", jwtToken, { expires: 30 });
        setLoggedIn(true);
        navigate("/");
        setPopupMessage("Succesfully logged in!")
      } else if (response.status === 401) {
        setPopupMessage("Bad credentials");
      }
    } catch (e) {
      console.error("Login error:", e);
      setPopupMessage("An error occurred. Please try again.");
    }
  };

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
          Cookies.set("jwt", jwtToken, { expires: 30 });
          navigate("/");
          setPopupMessage("Succesfully registered!")
        } else {
          setPopupMessage(response.text());
        }
      } catch (e) {
        console.error(e);
        setPopupMessage("Error");
      }
    } else {
      setPopupMessage("Passwords do not match!");
    }
  };

  return (<>
    <Header />

    <main className="flex flex-col justify-center items-center py-[20vh]">
      {/* <div className="flex">
        <button className={`px-4 py-2 cursor-pointer text-2xl font-[integral] border-r ${loginState ? "font-bold" : ""}`} onClick={() => setLoginState(true)}>Login</button>
        <button className={`px-4 py-2 cursor-pointer text-2xl font-[integral] ${!loginState ? "font-bold" : ""}`} onClick={() => setLoginState(false)} >Register</button>
      </div> */}
      <h2 className="mb-8">{loginState ? "Login" : "Register"}</h2>
      <div className="">
        <form onSubmit={loginState ? handleLogin : handleRegister} className="flex  flex-col items-center">
          <div className="mb-4 flex flex-col w-56">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              className="px-4 py-2 border border-gray-200 rounded-xl"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4 flex flex-col w-56">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-xl"
            />
            {loginState && <small className="text-right cursor-pointer text-gray-600">Forgot Password?</small>}
          </div>


          {!loginState &&
            <div className="mb-4 flex flex-col w-56">
              <label for="passwordConfirm">Password Confirmation</label>
              <input
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-xl"
              ></input>

            </div>
          }
          <Button className={"bg-black text-white w-3/4 mb-1 mt-4"} type="submit" text="Login" />
          {loginState ?
            <div className="flex gap-2">
              <span>Don't have an account?</span>
              <button className="text-blue-500 cursor-pointer hover:underline" type="button" onClick={() => setLoginState(false)}>Register</button>
            </div>
            :
            <div className="flex gap-2">
              <span>Already have an account?</span>
              <button className="text-blue-500 cursor-pointer hover:underline" type="button" onClick={() => setLoginState(true)}>Login</button>
            </div>
          }
        </form>
      </div>
    </main>

    <Footer />
  </>);
}

export default AuthPage;
