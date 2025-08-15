import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail, MdPhone, MdLanguage } from 'react-icons/md';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [companyInfo, setCompanyInfo] = useState({
      email: "",
      phone: "",
      address: "",
      website: "www.zentronixinfotech.com/",
    });
  

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    how_soon: '',
    budget: '',
    message: '',
  });

  // ✅ Fetch company address/email/phone from backend
  
    const fetchAddress = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/get_address");
        if (res.data.data && res.data.data.length > 0) {
          const current = res.data.data[0];
          setCompanyInfo({
            email: current.email || "",
            phone: current.phone || "",
            address: current.address || "",
            website: "www.zentronixinfotech.com/",
          });
        }
      } catch (err) {
        console.error("Error fetching company info:", err);
      }
    };
  
    useEffect(() => {
      fetchAddress();
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, service, how_soon, budget, message } = formData;

    if (!firstName.trim()) return "First name is required";
    if (!lastName.trim()) return "Last name is required";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.(com|in|tech|yahoo|online|org|info|shop|net|co\.in)$/;
    if (!emailRegex.test(email)) return "Please enter a valid email";

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
      const res = await axios.post('http://localhost:5000/api/createquery', formData);
      toast.success(res.data.message);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        how_soon: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      console.error("Submit Error:", error);
      toast.error(error.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const openingHours = [
    { day: 'Monday', time: '10:30 AM - 8 PM' },
    { day: 'Tuesday', time: '10:30 AM - 8 PM' },
    { day: 'Wednesday', time: '10:30 AM - 8 PM' },
    { day: 'Thursday', time: '10:30 AM - 8 PM' },
    { day: 'Friday', time: '10:30 AM - 8 PM' },
    { day: 'Saturday', time: '10:30 AM - 8 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });

  return (
    <div className="contact-page">
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="contact-heading">Let’s Start a Conversation Today!</h1>
      <p className="contact-subheading">
        Submit your details, and we’ll connect with you to explore the best-fit solution that drives success.
      </p>

      <div className="contact-container">
        <div className="contact-form-section">
          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
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

            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Get in Touch'}
            </button>
          </form>
        </div>

        {/* Right Info Section */}
        <div className="map-wrapper">
          <div className="opening-time">
            <h3>OPENING TIME</h3>
            <ul>
              {openingHours.map(({ day, time }) => (
                <li key={day} className={day === currentDay ? 'active-day' : ''}>
                  <span>{day}</span>
                  {time === 'Closed' ? <span style={{ color: "blue" }}>{time}</span> : <span>{time}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-address-block">
            <h3>Address</h3>
            <ul>
              <li>
                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLocationDot className="gradient-icon" /> {companyInfo.address}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`}>
                  <MdEmail className="gradient-icon" /> {companyInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${companyInfo.phone}`}>
                  <MdPhone className="gradient-icon" /> +91-{companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdLanguage className="gradient-icon" /> {companyInfo.website}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-wrapper">
        <div className="map-container">
          <iframe
            title="Company Location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&output=embed`}
            className="map-frame"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
