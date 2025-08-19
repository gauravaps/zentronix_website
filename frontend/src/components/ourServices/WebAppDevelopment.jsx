import { ImSwitch } from "react-icons/im";
import { FaMobileAlt, FaCreditCard, FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";
import ModalForm from "../pages/home/ModalForm";
import ContactForm from "../pages/home/ContactForm";  



const WebAppDevelopment = () => {
 const [currentImage, setCurrentImage] = useState("/images/webdevolpment1.jpg");
    const [isModalOpen, setIsModalOpen] = useState(false);


  // Image toggle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "/images/webdevolpment1.jpg"
          ? "/images/webdevolpment2.jpg"
          : "/images/webdevolpment1.jpg"
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
            Web App <span>Development Services</span>
          </h1>
          
  <p>
  At <b>Zentronix Infotech</b>, we specialize in building 
  <b>customized and scalable web applications</b> that empower businesses 
  to digitize their operations and deliver seamless digital experiences. 
  Our solutions are designed to be fast, secure, and user-friendly — ensuring 
  high performance across devices and platforms.
</p>
<p>
  By integrating <b>modern frameworks, smart analytics, and cloud-based 
  technologies</b>, we help brands optimize workflows, improve efficiency, 
  and unlock new opportunities for growth in the competitive digital world. 
  From dynamic dashboards to AI-driven features, we create web apps tailored 
  to your unique business needs.
</p>
<p>
  Whether you’re a startup, SMB, or an enterprise, our 
  <b>scalable and future-ready web applications</b> ensure long-term success, 
  enhanced customer engagement, and a strong online presence in today’s 
  rapidly evolving digital era. 
</p>


          <button className="btn-demo"  onClick={() => setIsModalOpen(true)}>
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

        <button className="btn-started"  onClick={() => setIsModalOpen(true)}>
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

export default WebAppDevelopment