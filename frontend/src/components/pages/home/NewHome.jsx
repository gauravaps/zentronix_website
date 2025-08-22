import React, { useState, useEffect, useRef } from "react";
import "./NewHome.css";
import { ImSwitch } from "react-icons/im";
import {  FaMobileAlt, FaCode, FaPencilAlt, FaPaintBrush, FaBullhorn} from "react-icons/fa";
import {  MdWeb, MdApps, MdOutlineDraw} from "react-icons/md";
import { SiAffinitydesigner} from "react-icons/si";
import {AiOutlinePartition} from "react-icons/ai";
import ModalForm from "./ModalForm";
import IndustriesCard from "./IndustriesCard";
import ContactForm from "./ContactForm";
import { FaPaperPlane } from "react-icons/fa";
import { HashLoader } from "react-spinners";
import { Link } from "react-router-dom";





const NewHome = () => {
  // 🔹 State for second section image
  const [currentImage, setCurrentImage] = useState("/images/about1.png");
    const [activeIndex, setActiveIndex] = useState(null);
      const [loading, setLoading] = useState(true);


    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second loader
    return () => clearTimeout(timer);
  }, []);
  
  // State for count animation
    const [years, setYears] = useState(0);
    const [pros, setPros] = useState(0);
    const [projects, setProjects] = useState(0);
    const [industries, setIndustries] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);




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





  // 🔹 Image toggle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "/images/about1.png" ? "/images/about2.jpg" : "/images/about1.png"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);




const servicesRef1 = useRef(null);

  const scrollByWidth1 = (dir = "next") => {
    const el = servicesRef1.current;
    if (!el) return;

    const card = el.querySelector(".service-card");
    const cardWidth = card?.clientWidth || 300;
    const gap = 24; // Same as CSS gap
    const scrollAmount = cardWidth + gap;

    if (dir === "next") {
      // Check if it's at or near the end
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const isAtEnd = el.scrollLeft + scrollAmount >= maxScrollLeft - 5;

      if (isAtEnd) {
        // Loop to start
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      // Handle "prev"
      const isAtStart = el.scrollLeft <= 0;

      if (isAtStart) {
        // Scroll to end
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        el.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };





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


  // 🔹 Loader condition

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <HashLoader size={70} color="#36d7b7" />
      </div>
    );
  }



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
            <button className="newhome-hero-btn"  onClick={() => setIsModalOpen(true)}>Get Started</button>
          </div>

          {/* Right Image */}
          <div className="newhome-hero-image">
            <img src="/images/hero.png" alt="new_home" />
          </div>
        </div>
      </section>

      {/* ---------------- second Section ---------------- */}
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

           <a href="/about_us">    <button className="newhome-about-btn">About More</button> </a>
          </div>
        </div>
      </section>


      {/* -------- third Section -------- */}
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




      {/* ===== fourth  Section ===== */}
      <section className="vision-section">
        <div className="container">
          <h2 className="vision-title">
            Your Digital Vision, <span className="accent">Our Expertise.</span>
          </h2>
          <p className="vision-desc">
            Our team of agile web and mobile developers, proficient in modern
            technologies, can create powerful websites, web portals, progressive
            web applications, and mobile apps. We are here to help your business
            thrive in the intense market competition. Our team takes a proactive
            approach to building a prospective digital solution on both
            architectural and business levels.
            <br />
            <br />
            We believe in delivering innovative solutions that empower
            businesses to scale efficiently. With a focus on user-centric design
            and performance optimization, we ensure that every project exceeds
            client expectations and drives measurable results.
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



            {/* ===== fifth Section: Services / Cards ===== */}
      <section className="services-section">

        <div className="container">
          <div className="services-head">
            <h2 className="services-title">
              Innovative Solutions
              <span className="accent"> for Unstoppable Growth</span>
            </h2>
            <p className="services-sub">
              "We build scalable on-demand apps that drive business growth."
            </p>

            <div className="services-nav">
              <button
                className="nav-btn"
                aria-label="prev"
                onClick={() => scrollByWidth1("prev")}
              >
                ←
              </button>
              <button
                className="nav-btn"
                aria-label="next"
                onClick={() => scrollByWidth1("next")}
              >
                →
              </button>
            </div>
          </div>

          <div
            className="services-carousel"
            ref={servicesRef1}
            aria-label="services list"
          >
            {IndustriesCard.map((s) => (
              <a key={s.id} href={s.link} className="service-card">
                <div className="card-icon">{s.icon}</div>
                <h3 className="card-title">{s.title}</h3>

                {/* hover content */}
                <div className="card-hover">
                  <p className="card-desc">{s.desc}</p>
                  <span className="card-learn">Learn More →</span>
                </div>
              </a>
            ))}
          </div>

          <div className="services-cta">
            {/* <button className="cta-button secondary" type="button">  <ImSwitch /> LEARN MORE</button> */}

            <button
              className="cta-button secondary"
              type="button"
              aria-label="Get started"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="cta-icon">
                <ImSwitch />
              </span>
              <span className="cta-text">LEARN MORE</span>
            </button>
          </div>
        </div>
      </section>




      {/* six section Cube background */}

      <section className="fifth-section">
        <div className="cube-container">
          <div className="cube">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="gradient-overlay"></div>

        {/* Content */}
        <div className="content">
          <p className="location">📍 Indore, India</p>
          <h1>Innovative Solutions from the Heart of Indore</h1>
          <p className="subheading">
            Zentronix — Where Innovation Meets Excellence. Based in Indore,
            India, we are your strategic technology partner, turning bold ideas
            into powerful digital realities. From next-gen web solutions to
            high-impact mobile apps, we design and develop technology that
            doesn’t just work — it inspires. Our elite team of developers,
            designers, and innovators harness the latest tech stack, AI-driven
            strategies, and precision-engineered code to deliver scalable,
            secure, and future-ready solutions. Whether you’re a visionary
            startup or an established enterprise, Zentronix ensures you stay
            ahead of the curve, transforming your business into a digital
            leader.
          </p>
          <button className="contact-btn"   onClick={() => setIsModalOpen(true)}>
            <FaPaperPlane /> Get in Touch
          </button>
        </div>
      </section>



      {/* -------- seven FAQ Section -------- */}
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




 {/* Modal with contact form */}
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="modal-title">
          Get Started — Tell us about your project
        </h2>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </ModalForm>
    

    </>
  );
};

export default NewHome;
