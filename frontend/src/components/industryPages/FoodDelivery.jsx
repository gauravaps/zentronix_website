import React from "react";
import { ImSwitch } from "react-icons/im";
import "./FoodDelivery.css";

const FoodDelivery = () => {
  return (
    <div className="food-delivery">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <img
            src="/images/food_delivery.jpg"
            alt="Food delivery mobile app"
            className="hero-image"
          />
        </div>
        <div className="hero-right">
          <h1>
            Food Delivery App <span>Development Services</span>
          </h1>
          <p>
            Automate your operations with a dynamic and customized food ordering
            and delivery system and offer a smooth experience to your customers,
            drivers, and administrators. Save on your restaurant operational
            costs, grow revenue, and differentiate your business from your
            competitors in the intensely competitive food ordering and delivery
            market.
          </p>
          <button className="btn-demo">
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
            <img src="/images/custom.png" alt="Custom App" className="card-icon"/>
            <h3>Custom App Development</h3>
            <p>
              Build a custom, branded food ordering and delivery app for Android
              and iOS, or choose a hybrid solution, with the exact features you
              desire.
            </p>
          </div>
          <div className="card">
            <img src="/images/payment.png" alt="Payment" className="card-icon"/>
            <h3>Flexible Payment</h3>
            <p>
              Choose to pay with cash, debit, or credit cards through various
              payment gateways or e-wallets using the app’s built-in payment
              features.
            </p>
          </div>
          <div className="card">
            <img src="/images/analytics.png" alt="Analytics" className="card-icon"/>
            <h3>Business Analytics</h3>
            <p>
              Gain insights into customer interactions, behaviors, sales, app
              performance, and more to improve your services and offer better app
              experiences.
            </p>
          </div>
        </div>

        <button className="btn-started">
          <ImSwitch className="btn-icon" />
          GET STARTED
        </button>
      </section>
    </div>
  );
};

export default FoodDelivery;
