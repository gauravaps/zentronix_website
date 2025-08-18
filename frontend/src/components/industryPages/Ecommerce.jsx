import React, { useState, useEffect } from "react";
import { ImSwitch } from "react-icons/im";
import { FaMobileAlt, FaCreditCard, FaChartLine } from "react-icons/fa";
import "./Groceryapp.css";

const Ecommerce = () => {
  const [currentImage, setCurrentImage] = useState("/images/Ecommerce1.jpg");

  // Image toggle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "/images/Ecommerce1.jpg"
          ? "/images/commerce2.jpg"
          : "/images/Ecommerce1.jpg"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grocery-app">
      {/* Hero Section */}
      <section className="grocery-hero">
        <div className="grocery-hero-left">
          <img
            src={currentImage}
            alt="Grocery delivery mobile app"
            className="grocery-hero-image"
          />
        </div>
        <div className="grocery-hero-right">
          <h1>
            E-Commerce App <span>Development Services</span>
          </h1>
       <p>
  At <b>Zentronix</b>, we empower businesses to launch and grow their 
  <b> eCommerce stores</b> with a fully dynamic and customized online shopping 
  and delivery system. Deliver a seamless shopping experience to your 
  customers with features like smart product catalog management, real-time 
  order tracking, and multiple secure payment options — while helping you 
  reduce operational costs and maximize revenue.
  <br /><br />
  Our advanced eCommerce solutions are designed for fashion, electronics, 
  grocery, and multi-category online stores, enabling them to stay ahead 
  in the fast-growing digital marketplace. With flexible customization, 
  inventory management, and customer analytics, <b>Zentronix</b> ensures your 
  brand stands out, builds customer loyalty, and scales effortlessly as your 
  business grows.
</p>



          <button className="grocery-btn-demo">
            <ImSwitch className="grocery-btn-icon" />
            BOOK A FREE DEMO
          </button>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="grocery-offer">
        <h2>
          What <span>We Offer</span>
        </h2>
        <div className="grocery-offer-cards">
          <div className="grocery-card">
            <FaMobileAlt className="grocery-card-icon" />
            <h3>Custom App Development</h3>
            <p>
              Build a custom, branded food ordering and delivery app for Android
              and iOS, or choose a hybrid solution, with the exact features you
              desire.
            </p>
          </div>
          <div className="grocery-card">
            <FaCreditCard className="grocery-card-icon" />
            <h3>Flexible Payment</h3>
            <p>
              Choose to pay with cash, debit, or credit cards through various
              payment gateways or e-wallets using the app’s built-in payment
              features.
            </p>
          </div>
          <div className="grocery-card">
            <FaChartLine className="grocery-card-icon" />
            <h3>Business Analytics</h3>
            <p>
              Gain insights into customer interactions, behaviors, sales, app
              performance, and more to improve your services and offer better app
              experiences.
            </p>
          </div>
        </div>

        <button className="grocery-btn-started">
          <ImSwitch className="grocery-btn-icon" />
          GET STARTED
        </button>
      </section>
    </div>
  );
};

export default Ecommerce;
