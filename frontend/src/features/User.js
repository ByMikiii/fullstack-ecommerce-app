import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { AuthContext } from "../App";

const User = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        };

        const response = await axios.get(
          `http://localhost:8080/api/v1/users/${username}`,
          { headers }
        );
        setUserData(response.data);
      } catch (err) {
        setLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Username:</strong> {userData.username}
      </p>
      <p>
        <strong>First Name:</strong> {userData.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {userData.lastName}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {userData.phoneNumber}
      </p>
    </div>
  );
};

export default User;
