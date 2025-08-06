// src/components/ContactForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast ,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    how_soon: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, service, how_soon, budget, message } = formData;

    if (!firstName.trim()) return "First name is required";
    if (!lastName.trim()) return "Last name is required";
    if (!email.trim()) return "Email is required";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return "Please enter a valid email";

    if (!phone.trim()) return "Phone number is required";
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) return "Phone number must be exactly 10 digits";

    if (!service.trim()) return "Service selection is required";
    if (!budget.trim()) return "Budget selection is required";
    if (!how_soon.trim()) return "Project start time selection is required";
    if (!message.trim()) return "Project message is required";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/createquery", formData);
      toast.success(res.data.message || "Query submitted");
      // reset
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        how_soon: "",
        budget: "",
        message: "",
      });
      // close modal after success (optional small delay)
      setTimeout(() => onClose?.(), 700);
    } catch (err) {
      console.error("Submit Error:", err);
      toast.error(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form modal-contact-form" onSubmit={handleSubmit}>
              <ToastContainer position="top-right" autoClose={3000} />

      <div className="form-row">
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      </div>

      <div className="form-row">
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} />
      </div>

      <div className="form-row">
        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="">Select a Service</option>
          <option>Mobile Application Development</option>
          <option>Web Development</option>
          <option>Customised Open Source Project</option>
          <option>Consulting - Cloud and DevOps</option>
          <option>UI / UX Design</option>
          <option>IOT / AI/ML or Wearable</option>
          <option>Mobile Games Development</option>
          <option>QA Services</option>
          <option>Other</option>
        </select>

        <select name="budget" value={formData.budget} onChange={handleChange}>
          <option value="">Select Budget</option>
          <option>$5k-$10k</option>
          <option>$10k-$25k</option>
          <option>$25k-$30k</option>
          <option>$30k-$40k</option>
          <option>$40k-$50k</option>
          <option>$50k-$100k</option>
          <option>$100k+</option>
          <option>Not sure</option>
        </select>
      </div>

      <div className="form-row">
        <select name="how_soon" value={formData.how_soon} onChange={handleChange}>
          <option value="">How soon do you want to start?</option>
          <option>Right now</option>
          <option>In a few weeks</option>
          <option>In a few months</option>
          <option>Not sure</option>
        </select>
      </div>

      <textarea name="message" placeholder="Brief about the project" value={formData.message} onChange={handleChange}></textarea>

      <div className="modal-form-actions">
        <button type="button" className="btn-secondary" onClick={() => onClose?.()}>Cancel</button>
        <button type="submit" disabled={loading}>{loading ? "Sending..." : "Get in Touch"}</button>
      </div>
    </form>
  );
};

export default ContactForm;
