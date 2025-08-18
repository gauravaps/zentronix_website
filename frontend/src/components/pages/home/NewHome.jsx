import React from "react";
import "./NewHome.css";

const NewHome = () => {
  return (
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
  );
};

export default NewHome;
