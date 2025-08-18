import React, { useState, useEffect } from "react";
import "./NewHome.css";

const NewHome = () => {
  // 🔹 State for second section image
  const [currentImage, setCurrentImage] = useState("/images/about1.png");

  // 🔹 Image toggle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "/images/about1.png" ? "/images/about2.jpg" : "/images/about1.png"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ---------------- First Section ---------------- */}
      <section className="newhome-hero-section">
        {/* Background Animated Shapes */}
        <div className="newhome-bg-shapes">
          <div className="newhome-circle"></div>
          <div className="newhome-circle newhome-small"></div>
          <div className="newhome-square"></div>
          <div className="newhome-square newhome-small"></div>
        </div>

        <div className="newhome-hero-container">
          {/* Left Content */}
          <div className="newhome-hero-text">
            <h1>
              Modern Website Development <br /> & Software Company.
            </h1>
            <p>
              Empower your business with <b>Zentronix Infotech</b>’s expert web
              development, mobile app creation, and impactful digital solutions.
              Drive growth and stay ahead with our scalable, innovative, and
              future-ready technology services. We specialize in delivering
              customized IT solutions that align with your unique business goals.
              From modern UI/UX design to secure cloud integration, we ensure
              seamless digital transformation. Our team of professionals is
              committed to quality, innovation, and client satisfaction, helping
              you unlock new opportunities in the digital era.
            </p>
            <button className="newhome-hero-btn">Get Started</button>
          </div>

          {/* Right Image */}
          <div className="newhome-hero-image">
            <img src="/images/hero.png" alt="new_home" />
          </div>
        </div>
      </section>

      {/* ---------------- Second Section ---------------- */}
      <section className="newhome-about-section">
        <div className="newhome-about-container">
          {/* Left Image (with auto toggle + animation) */}
          <div className="newhome-about-image">
            <img src={currentImage} alt="about_zentronix" />
          </div>

          {/* Right Text */}
          <div className="newhome-about-text">
            <h2>Why Choose Us</h2>
            <h1>We are a premium IT solutions provider.</h1>
            <p>
  At <b>Zentronix Infotech</b>, we believe that success starts with
  the right strategy — and we bring that to every project we take on.
  Our goal-oriented development approach empowers your business to
  lead confidently in your industry, regardless of size or complexity.
  From startups to enterprises, we deliver solutions that are not just
  functional, but also future-ready and growth-focused. 
  <br /><br />
  With a dedicated team of experts, cutting-edge technology, and
  customer-centric practices, we ensure your digital transformation
  journey is smooth and impactful. Our solutions are designed to
  maximize efficiency, accelerate growth, and build long-term
  competitive advantage for your business.
</p>

            <button className="newhome-about-btn">About More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewHome;
