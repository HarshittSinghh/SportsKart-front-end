import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

// Function to fetch user data from the database
const fetchUserDataFromDatabase = async (userId) => {
  // Example: Fetch user data from an API endpoint
  const response = await fetch(`/api/users/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};

function ProfileCard(props) {
  const location = useLocation();
  const navigate = useNavigate();

  // State to store user data
  const [userData, setUserData] = useState(null);

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchUserDataFromDatabase(location.state.userId);
        setUserData(response); // Assuming response contains user data including the name
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [location.state.userId]);

  // Function to handle logout
  const handleLogout = () => {
    // Example: Clear user authentication state, navigate to login page, etc.
    navigate("/login");
  };

  // Render the profile card
  return (
    <div className="profile-card-container">
      <header>
        <img
          src={
            "https://pbs.twimg.com/profile_images/1519135357115244550/8Gu_bPQ9_400x400.jpg"
          }
          alt={userData ? userData.name : "Profile Picture"}
        />
      </header>
      <h1 className="bold-text">
        {userData ? userData.name : "Loading..."}{" "}
        <p>
          Hello <span style={{ color: "red" }}>{location.state.id}</span> and
          welcome to your Profile..!!
        </p>
      </h1>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <br />
      <br />
    </div>
  );
}

export default ProfileCard;
