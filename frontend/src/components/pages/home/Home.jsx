import React, { useEffect, useState } from "react";
import { ImSwitch } from "react-icons/im";
import "./Home.css";

const Home = () => {
  // State for count animation
  const [years, setYears] = useState(0);
  const [pros, setPros] = useState(0);
  const [projects, setProjects] = useState(0);
  const [industries, setIndustries] = useState(0);

  // Animate numbers on mount
  useEffect(() => {
    const animateValue = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setter(count);
        if (count >= target) clearInterval(interval);
      }, 30);
    };

    animateValue(setYears, 5);
    animateValue(setPros, 50);
    animateValue(setProjects, 100);
    animateValue(setIndustries, 30);
  }, []);

  return (
    <>
      {/* ===== First Section ===== */}
      <section className="hero-section">
        <div className="hero-inner container">
          <header className="hero-header">
            <h1 className="hero-title">
              Drive Business Success Through{" "}
              <span className="accent">Digital Excellence!</span>
            </h1>
          </header>

          <div className="hero-copy">
            <p className="hero-desc">
              We build cutting-edge web and mobile solutions to help you stay
              relevant in a competitive market. Deliver exceptional digital
              experiences to your customers that add real business value.
            </p>

            <div className="hero-cta-wrap">
              <button className="cta-button" type="button" aria-label="Get started">
                <span className="cta-icon">
                  <ImSwitch />
                </span>
                <span className="cta-text">LET'S GET STARTED</span>
              </button>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            src="/images/for_home_page.png"
            alt="Mobile app showcase"
            className="hero-image"
          />
        </div>
      </section>

      {/* ===== Second Section ===== */}
      <section className="vision-section">
        <div className="container">
          <h2 className="vision-title">
            Your Digital Vision, <span className="accent">Our Expertise.</span>
          </h2>
          <p className="vision-desc">
            Our team of agile web and mobile developers, proficient in modern technologies,
            can create powerful websites, web portals, progressive web applications, and
            mobile apps. We are here to help your business thrive in the intense market
            competition. Our team takes a proactive approach to building a prospective
            digital solution on both architectural and business levels.
            <br /><br />
            We believe in delivering innovative solutions that empower businesses to scale
            efficiently. With a focus on user-centric design and performance optimization,
            we ensure that every project exceeds client expectations and drives measurable results.
          </p>

          <div className="stats-wrap">
            <div className="stat-box">
              <h3 className="stat-number">{years}+</h3>
              <p className="stat-label">Years of Experience</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-number">{pros}+</h3>
              <p className="stat-label">Creative Pros</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-number">{projects}+</h3>
              <p className="stat-label">Projects Delivered</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-number">{industries}+</h3>
              <p className="stat-label">Industries Served</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
