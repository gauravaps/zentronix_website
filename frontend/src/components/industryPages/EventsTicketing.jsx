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
  At <b>Zentronix</b>, we empower event organizers, venues, and businesses with 
  fully dynamic and customized <b>event management and ticketing solutions</b>. 
  Deliver a seamless experience to your audience with features like real-time 
  event booking, secure digital ticketing, QR-based check-ins, and instant 
  notifications — all designed to reduce manual work and boost engagement.
  <br /><br />
  Our advanced event technology simplifies end-to-end management, from ticket 
  sales and seat reservations to audience analytics and payment integration. 
  With <b>smart insights, flexible customization, and robust scalability</b>, 
  Zentronix ensures your platform stands out, builds stronger audience loyalty, 
  and drives higher revenue. Whether you’re hosting concerts, conferences, 
  sports events, or festivals, our solutions are built to scale and ensure 
  long-term success in the digital era.
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
