import { ImSwitch } from "react-icons/im";
import { FaMobileAlt, FaCreditCard, FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";
import ModalForm from "../pages/home/ModalForm";
import ContactForm from "../pages/home/ContactForm";


const EScooterApp = () => {
 const [currentImage, setCurrentImage] = useState("/images/escooter1.jpg");
    const [isModalOpen, setIsModalOpen] = useState(false);


  // Image toggle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "/images/escooter1.jpg"
          ? "/images/escooter2.jpg"
          : "/images/escooter1.jpg"
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
            E-Scooter App <span>Development Services</span>
          </h1>
          

<p>
  At <b> Zentronix Infotech</b>, we specialize in developing 
  <b>feature-rich and scalable e-scooter applications</b> that make 
  ride-sharing and rental services smarter, faster, and more convenient. 
  Our goal is to create apps that are easy to use, secure, and aligned with 
  your business vision for sustainable urban mobility.
</p>

<p>
  From <b> real-time scooter tracking, GPS-based navigation, ride booking & 
  scheduling, QR code unlocking, battery & speed monitoring, and in-app 
  payments</b> to advanced features like IoT integration, geofencing, and 
  analytics dashboards, we deliver customized solutions that help operators 
  manage fleets efficiently and enhance rider experience.
</p>

<p>
  Whether you’re a startup launching an e-scooter sharing platform or an 
  enterprise expanding mobility services, our 
  <b>end-to-end e-scooter app development</b> ensures seamless performance, 
  improved customer satisfaction, and long-term scalability in today’s 
  fast-growing micro-mobility market.
</p>          <button className="btn-demo"  onClick={() => setIsModalOpen(true)}>
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


export default EScooterApp