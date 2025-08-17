// About.jsx
import React, { useState, useEffect } from "react";
import {
  FaMobileAlt, FaCode, FaPencilAlt, FaPaintBrush, FaBullhorn
} from "react-icons/fa";
import {
  MdWeb, MdApps, MdOutlineDraw
} from "react-icons/md";
import {
  SiAffinitydesigner
} from "react-icons/si";
import {
  AiOutlinePartition
} from "react-icons/ai";
import "./About.css";

const About = () => {
  const [currentImage, setCurrentImage] = useState("/images/about1.png");
  const [activeIndex, setActiveIndex] = useState(null);

  // Image toggle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "/images/about1.png" ? "/images/about2.jpg" : "/images/about1.png"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What services do we offer?",
      a: "We provide Web Development, App Development, Graphic Design, Digital Marketing, and Affiliate Marketing services tailored to your business needs."
    },
    {
      q: "Can you redesign and update my existing website?",
      a: "Yes, our team specializes in redesigning websites with modern UI/UX, making them faster, responsive, and SEO-friendly."
    },
    {
      q: "Do you offer custom digital marketing strategies?",
      a: "Absolutely! We create data-driven strategies to maximize your brand’s visibility and generate qualified leads."
    },
    {
      q: "How long does it take to complete a project?",
      a: "The timeline depends on the project’s complexity. Most websites are delivered within 3-6 weeks, while apps may take longer."
    },
    {
      q: "Why should I choose Zentronix Infotech?",
      a: "We combine creativity with technology, delivering cost-effective, scalable, and innovative solutions for startups and enterprises alike."
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes, we offer continuous support, maintenance, and updates to ensure your digital solutions perform at their best."
    }
  ];

  return (
    <div className="about-page">
      {/* -------- About Section -------- */}
      <section className="about-section">
        <div className="about-left">
          <img
            src={currentImage}
            alt="About Zentronix"
            className="about-image"
          />
        </div>
        <div className="about-right">
          <h2>About Us</h2>
          <h1>Get Started Easily With a Personalized Product Tour</h1>
          <p>
            Zentronix Infotech is a dynamic web and mobile app development company that 
            assists startups and entrepreneurs in building powerful and scalable products 
            to meet their business goals effectively.
          </p>
          <p>
            With a team of experienced professionals from diverse technical and management 
            backgrounds, we bring a strategic edge to every project.
          </p>
          <button className="btn-about">About More</button>
        </div>
      </section>

      {/* -------- Services Section -------- */}
      <section className="services1-section">
        <h2>Our Services</h2>
        <h1>Get to know more about our services</h1>
        <p>
          Excellence and innovation drive our team at Zentronix Infotech. 
          We craft custom Web Development, Mobile Application development across 
          all major platforms — combining creativity with technology to help 
          businesses grow and stay ahead.
        </p>

        <div className="services1-grid">
          <div className="service1-card">
            <MdWeb className="service1-icon" />
            <h3>Web Development</h3>
            <p>
              We create stunning, responsive websites designed to elevate your 
              brand, engage visitors, and drive results.
            </p>
          </div>

          <div className="service1-card">
            <MdApps className="service1-icon" />
            <h3>App Development</h3>
            <p>
              From conceptualization to testing, we ensure smooth mobile app development 
              across all major platforms.
            </p>
          </div>

          <div className="service1-card">
            <FaCode className="service1-icon" />
            <h3>Web Application</h3>
            <p>
              Transform your unique ideas into reality with our web apps, streamlining 
              operations efficiently.
            </p>
          </div>

          <div className="service1-card">
            <FaPencilAlt className="service1-icon" />
            <h3>Content Writing</h3>
            <p>
              We deliver optimized, reader-friendly content that improves visibility 
              and builds trust.
            </p>
          </div>

          <div className="service1-card">
            <MdOutlineDraw className="service1-icon" />
            <h3>Logo Designing</h3>
            <p>
              Unique, memorable logos that represent your brand identity 
              and stand out in the market.
            </p>
          </div>

          <div className="service1-card">
            <AiOutlinePartition className="service1-icon" />
            <h3>Software Development</h3>
            <p>
              We build innovative, custom software tailored to your goals, 
              boosting efficiency and driving digital transformation.
            </p>
          </div>

          <div className="service1-card">
            <SiAffinitydesigner className="service1-icon" />
            <h3>Graphic Designing</h3>
            <p>
              From brand identity to creatives, we deliver designs that 
              communicate your message clearly.
            </p>
          </div>

          <div className="service1-card">
            <FaBullhorn className="service1-icon" />
            <h3>Affiliate Marketing</h3>
            <p>
              We manage scalable affiliate programs that drive sales, 
              build partnerships, and boost reach.
            </p>
          </div>
        </div>
      </section>

      {/* -------- FAQ Section -------- */}
      <section className="faq-section">
        <div className="faq-left">
          <h2>FAQs</h2>
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{item.q}</div>
              {activeIndex === index && (
                <div className="faq-answer">{item.a}</div>
              )}
            </div>
          ))}
        </div>
        <div className="faq-right">
          <img
            src={currentImage}
            alt="FAQ Illustration"
            className="faq-image"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
