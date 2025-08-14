// src/components/UpdateAddress.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateAddress = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: ""
  });

  // Get current address when page loads
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get("http://localhost:5000/get_address");
        if (res.data.data && res.data.data.length > 0) {
          const current = res.data.data[0]; // assuming only 1 company address
          setFormData({
            email: current.email || "",
            phone: current.phone || "",
            address: current.address || ""
          });
        }
      } catch (err) {
        console.error("Error fetching address:", err);
      }
    };

    fetchAddress();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/update_address", formData);
      alert("Address updated successfully!");
    } catch (err) {
      console.error("Error updating address:", err);
      alert("Failed to update address");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Update Company Address</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Update Address
        </button>
      </form>
    </div>
  );
};

export default UpdateAddress;
