// src/components/pages/profile/UpdateProfile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./UpdateProfile.css";

const UpdateProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    image: ""
  });

  // Fetch current user details
  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      navigate("/login", { replace: true });
      return;
    }

    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        password: "",
        image: user.image || ""
      });
    }
  }, [isLoading, isAuthenticated, user, navigate]);
    

  const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (name === "image" && files && files.length > 0) {
    const file = files[0];
    setFormData({ ...formData, image: file });

    // preview purpose only
    const reader = new FileReader();
    reader.onloadend = () => {
      document.querySelector(".profile-preview").src = reader.result;
    };
    reader.readAsDataURL(file);
  } else {
    setFormData({ ...formData, [name]: value });
  }
};
 
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("password", formData.password);

    if (formData.image instanceof File) {
      formDataToSend.append("image", formData.image); // file binary
    }

    await axios.put(
      `http://localhost:5000/api/update-profile/${user.id}`,
      formDataToSend,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert("Profile updated successfully!");
    navigate(-1);
  } catch (err) {
    console.error("Error updating profile:", err.response?.data || err);
    alert("Failed to update profile");
  }
};


  const handleCancel = () => {
    navigate(-1);
  };

  if (isLoading) return <div style={{ padding: 24 }}>Loading...</div>;

  return (
    <div className="update-profile-container">
      <div className="update-profile-card">
        <div className="update-profile-header">
          <h2>Update Your Profile</h2>
          <FaTimes className="cancel-icon" onClick={handleCancel} />
        </div>

        <form onSubmit={handleSubmit} className="update-profile-form">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Password (leave blank to keep same):</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <label>Profile Image:</label>
          {formData.image && (
            <img
              src={formData.image}
              alt="Profile Preview"
              className="profile-preview"
            />
          )}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
