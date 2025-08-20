import { ImSwitch } from "react-icons/im";
import { FaMobileAlt, FaCreditCard, FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";
import ModalForm from "../pages/home/ModalForm";
import ContactForm from "../pages/home/ContactForm";


const HomeServices = () => {
 const [currentImage, setCurrentImage] = useState("/images/HomeServices1.jpg");
    const [isModalOpen, setIsModalOpen] = useState(false);


  // Image toggle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "/images/HomeServices1.jpg"
          ? "/images/HomeServices2.jpg"
          : "/images/HomeServices1.jpg"
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
            Home Services <span>Development Services</span>
          </h1>
          

<p>
  At <b>Zentronix Infotech</b>, we specialize in building 
  <b> feature-rich and scalable social media applications</b> that connect 
  people, enhance engagement, and drive digital communities. Our goal is to 
  create apps that are user-friendly, interactive, and aligned with your 
  business vision.
</p>

<p>
  From <b> real-time chat, news feeds, content sharing, push notifications, 
  and in-app analytics</b> to advanced features like AI-powered 
  recommendations and secure user authentication, we deliver customized 
  solutions that keep your audience connected and engaged across platforms.
</p>

<p>
  Whether you’re a startup aiming to launch a new social networking platform 
  or an enterprise looking to expand digital presence, our 
  <b> end-to-end social media app development services </b> ensure seamless 
  performance, improved user retention, and long-term scalability in today’s 
  competitive market.
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



export default HomeServices