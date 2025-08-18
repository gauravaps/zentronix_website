import { ImSwitch } from "react-icons/im";
import { FaMobileAlt, FaCreditCard, FaChartLine } from "react-icons/fa";
import "./Groceryapp.css";
import { useEffect, useState } from "react";
import ModalForm from "../pages/home/ModalForm";
import ContactForm from "../pages/home/ContactForm"; 



const FitnessApp = () => {
const [currentImage, setCurrentImage] = useState("/images/fitness1.jpg");
    const [isModalOpen, setIsModalOpen] = useState(false);


  // Image toggle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "/images/fitness1.jpg"
          ? "/images/fitness2.jpg"
          : "/images/fitness1.jpg"
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
            Fitness App <span>Development Services</span>
          </h1>
    <p>
  At <b>Zentronix Infotech</b>, we design and develop 
  <b>innovative fitness and wellness mobile applications</b> that are 
  engaging, user-friendly, and highly reliable. Our customized fitness 
  app development services empower gyms, trainers, and health startups 
  to deliver a personalized and connected experience to fitness enthusiasts. 
  <br /><br />
  With a strong focus on <b>automation, scalability, and innovation</b>, 
  our solutions include features like real-time workout tracking, 
  personalized diet and exercise plans, wearable device integration, 
  live virtual training, and progress analytics. 
  <b>Zentronix Infotech</b> enables fitness businesses to boost member 
  engagement, improve retention, and scale effortlessly in today’s 
  fast-growing digital fitness market.
</p>



          <button className="grocery-btn-demo"  onClick={() => setIsModalOpen(true)}>
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

        <button className="grocery-btn-started"  onClick={() => setIsModalOpen(true)}>
          <ImSwitch className="grocery-btn-icon" />
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

export default FitnessApp