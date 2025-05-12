import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const ProfilePage = () => {

  const [user, setUser] = useState(null)
  const [createdAgo, setCreatedAgo] = useState(null)

  useEffect(() => {
    const fetchProtectedData = async () => {
      const response = await fetch("http://localhost:8080/api/v1/users/john_doe", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
          "Content-Type": "application/json",
        },
      });

      const userData = await response.json();
      setUser(userData);
      if (userData) {
        const timestamp = Date.now() / 1000;
        setCreatedAgo((timestamp - userData.id.timestamp) / 60 / 60 / 24);
      }
    }

    fetchProtectedData();
  }, [])

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main>
        <BreadCrumb />

        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
            <img
              src={`https://ui-avatars.com/api/?name=${user.username}`}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto border-4 border-gray-300"
            />
            <h2 className="text-xl font-semibold mt-4">{user.username}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{"Created " + Math.round(createdAgo) + " days ago."}</p>
            <p className="mt-2 text-sm text-gray-700">{user.firstName + " " + user.lastName}</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all">
              Edit Profile
            </button>
          </div>
        </div >

      </main >
      <Footer className="" />
    </>
  );
}

export default ProfilePage;
