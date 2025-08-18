import { ImSwitch } from "react-icons/im";
import { FaMobileAlt, FaCreditCard, FaChartLine } from "react-icons/fa";
import "./FoodDelivery.css";
import { useEffect, useState } from "react";
import ModalForm from "../pages/home/ModalForm";
import ContactForm from "../pages/home/ContactForm";



const EventsTicketing = () => {
 const [currentImage, setCurrentImage] = useState("/images/ticket3.png");
     const [isModalOpen, setIsModalOpen] = useState(false);

 
   // Image toggle every 2 seconds
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentImage((prev) =>
         prev === "/images/ticket3.png"
           ? "/images/ticket2.jpg"
           : "/images/ticket3.png"
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
             Events and Ticketing  App <span>Development Services</span>
           </h1>
           <p>
             At <b>Zentronix</b>, we help businesses transform and automate their
             operations with a fully dynamic and customized food ordering and delivery
             system. Deliver a seamless experience to your customers, drivers, and
             administrators while reducing operational costs and boosting overall revenue.
             Our advanced technology empowers restaurants and cloud kitchens to stay ahead
             in the highly competitive food delivery market.
             <br /><br />
             With smart analytics, real-time tracking, and flexible customization,
             Zentronix ensures your brand stands out from competitors and builds stronger
             customer loyalty. Whether you’re a startup or an established enterprise, our
             solutions are designed to scale with your growth and create long-term
             success in the digital era.
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
 

export default EventsTicketing
