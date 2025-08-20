import React, { useState, useEffect } from "react";
import { ImSwitch } from "react-icons/im";
import { FaMobileAlt, FaCreditCard, FaChartLine } from "react-icons/fa";
import "./FoodDelivery.css";
import ModalForm from "../pages/home/ModalForm";
import ContactForm from "../pages/home/ContactForm";




const PickupDelivery = () => {
  const [currentImage, setCurrentImage] = useState("/images/delivery-platform1.png");
      const [isModalOpen, setIsModalOpen] = useState(false);

  
    // Image toggle every 2 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) =>
          prev === "/images/delivery-platform1.png"
            ? "/images/delivery-platform2.png"
            : "/images/delivery-platform1.png"
        );
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="food-delivery">
        {/* Hero Section */}
        <section className="hero1">
          <div className="hero1-left">
            <img
              src={currentImage}
              alt="Food delivery mobile app"
              className="hero1-image"
            />
          </div>
          <div className="hero1-right">
            <h1>
              Pickup and Delivery App <span>Development Services</span>  
            </h1>
<p>
  At <b>Zentronix</b>, we empower businesses to streamline and automate their
  logistics with a fully customized <b>Pickup and Delivery system</b>. Enhance your
  customer experience with on-time deliveries, smart route optimization, and
  seamless coordination between customers, drivers, and administrators.
  <br /><br />
  Our advanced solutions ensure reduced operational costs, faster turnaround
  times, and improved efficiency across your supply chain. With features like
  real-time tracking, flexible customization, and powerful analytics,
  <b>Zentronix</b> helps your brand stay competitive, boost customer satisfaction,
  and scale effortlessly in the growing logistics market.
</p>
  
            <button className="btn-demo" onClick={() => setIsModalOpen(true)}>
              <ImSwitch className="btn-icon" />
              BOOK A FREE DEMO
            </button>
          </div>
        </section>
  
        {/* What We Offer Section */}
        <section className="offer">
          <h2>
            What <span>We Offer</span>
          </h2>
          <div className="offer-cards">
            <div className="card">
              <FaMobileAlt className="card-icon" />
              <h3>Custom App Development</h3>
              <p>
                Build a custom, branded food ordering and delivery app for Android
                and iOS, or choose a hybrid solution, with the exact features you
                desire.
              </p>
            </div>
            <div className="card">
              <FaCreditCard className="card-icon" />
              <h3>Flexible Payment</h3>
              <p>
                Choose to pay with cash, debit, or credit cards through various
                payment gateways or e-wallets using the app’s built-in payment
                features.
              </p>
            </div>
            <div className="card">
              <FaChartLine className="card-icon" />
              <h3>Business Analytics</h3>
              <p>
                Gain insights into customer interactions, behaviors, sales, app
                performance, and more to improve your services and offer better app
                experiences.
              </p>
            </div>
          </div>
  
          <button className="btn-started" onClick={() => setIsModalOpen(true)}>
            <ImSwitch className="btn-icon" />
            GET STARTED
          </button>
        </section>

        {/* Modal with contact form */}
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="modal-title">
          Get Started — Tell us about your project
        </h2>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </ModalForm>
      </div>
    );
  };
  
  

export default PickupDelivery