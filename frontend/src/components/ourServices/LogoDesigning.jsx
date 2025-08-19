import { ImSwitch } from "react-icons/im";
import { FaMobileAlt, FaCreditCard, FaChartLine } from "react-icons/fa";
import "../industryPages/Groceryapp.css";
import { useEffect, useState } from "react";
import ModalForm from "../pages/home/ModalForm";
import ContactForm from "../pages/home/ContactForm"; 



const LogoDesigning = () => {
  const [currentImage, setCurrentImage] = useState("/images/logodesign1.jpg");
const [isModalOpen, setIsModalOpen] = useState(false);

  // Image toggle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "/images/logodesign1.jpg"
          ? "/images/logodesign2.jpg"
          : "/images/logodesign1.jpg"
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
            Logo Designing <span>Development Services</span>
          </h1>
 <p>
  At <b>Zentronix Infotech</b>, we specialize in creating 
  <b>unique, memorable, and impactful logo designs</b> that represent 
  your brand’s identity and vision. A logo is the face of your business, 
  and we ensure it communicates your values, builds trust, and makes a 
  lasting impression on your audience. 
  <br /><br />
  With a strong focus on <b>creativity, simplicity, and brand strategy</b>, 
  our expert designers craft logos that are versatile, scalable, and timeless. 
  From modern minimalistic designs to detailed brand-centric visuals, 
  we create logos that work seamlessly across websites, apps, print, and 
  digital platforms.  
  <b>Zentronix Infotech</b> empowers startups, SMEs, and enterprises 
  to build strong brand recognition, boost customer loyalty, and stand 
  out in today’s competitive market with powerful logo designs.
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


export default LogoDesigning