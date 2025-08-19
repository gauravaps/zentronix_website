import { ImSwitch } from "react-icons/im";
import { FaMobileAlt, FaCreditCard, FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";
import ModalForm from "../pages/home/ModalForm";
import ContactForm from "../pages/home/ContactForm";  


const UIUXDesign = () => {
  const [currentImage, setCurrentImage] = useState("/images/uidesign1.jpg");
    const [isModalOpen, setIsModalOpen] = useState(false);


  // Image toggle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "/images/uidesign1.jpg"
          ? "/images/uidesign2.jpg"
          : "/images/uidesign1.jpg"
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
            UI/UX Design <span>Development Services</span>
          </h1>
          
<p>
  At <b>Zentronix Infotech</b>, we specialize in creating 
  <b>intuitive, engaging, and user-centric UI/UX designs</b> that enhance 
  digital experiences and strengthen brand identity. Our goal is to deliver 
  interfaces that are not only visually appealing but also highly functional 
  and seamless across all platforms and devices.
</p>

<p>
  By combining <b>creative design thinking, user research, wireframing, 
  prototyping, and usability testing</b>, we ensure every product we design 
  drives maximum engagement and customer satisfaction. From mobile apps to 
  web platforms, our designs are built to simplify navigation, improve 
  accessibility, and deliver a memorable experience. 
</p>

<p>
  Whether you’re a startup, SMB, or enterprise, our 
  <b>modern and scalable UI/UX solutions</b> help your business stand out, 
  boost conversions, and build long-term trust with your audience in today’s 
  competitive digital space.
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

export default UIUXDesign