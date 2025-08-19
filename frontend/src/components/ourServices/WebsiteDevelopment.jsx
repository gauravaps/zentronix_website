import { ImSwitch } from "react-icons/im";
import { FaMobileAlt, FaCreditCard, FaChartLine } from "react-icons/fa";
import "../industryPages/Groceryapp.css";
import { useEffect, useState } from "react";
import ModalForm from "../pages/home/ModalForm";
import ContactForm from "../pages/home/ContactForm"; 



const WebsiteDevelopment = () => {
  const [currentImage, setCurrentImage] = useState("/images/website1.jpg");
const [isModalOpen, setIsModalOpen] = useState(false);

  // Image toggle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "/images/website1.jpg"
          ? "/images/website2.jpg"
          : "/images/website1.jpg"
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
            Website  <span>Development Services</span>
          </h1>
  <p>
  At <b>Zentronix Infotech</b>, we craft 
  <b>innovative, scalable, and user-friendly websites</b> 
  that help businesses build a strong digital presence and deliver 
  seamless experiences to their customers. Our expertise spans 
  across corporate websites, eCommerce platforms, portfolio sites, 
  and custom web solutions — ensuring speed, security, and 
  responsiveness across all devices.
  <br /><br />
  With a strong focus on <b>UI/UX design, performance, and innovation</b>, 
  we integrate features like interactive layouts, secure payment gateways, 
  content management systems (CMS), SEO optimization, and advanced analytics 
  to maximize your website’s impact. 
  <b>Zentronix Infotech</b> empowers startups, SMEs, and enterprises 
  to engage audiences, increase conversions, and stay ahead in today’s 
  competitive digital landscape.
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


export default WebsiteDevelopment