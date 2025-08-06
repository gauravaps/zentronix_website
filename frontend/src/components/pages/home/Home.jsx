import React, { useEffect, useState, useRef } from "react";
import { ImSwitch } from "react-icons/im";
import { MdInstallMobile } from "react-icons/md"; // icon placeholder (you can replace later)
import "./Home.css";

const Home = () => {
  // State for count animation
  const [years, setYears] = useState(0);
  const [pros, setPros] = useState(0);
  const [projects, setProjects] = useState(0);
  const [industries, setIndustries] = useState(0);

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

  /* ========== SERVICES / CARDS (SECTION 3) ========== */
  const services = [
    {
      id: 1,
      title: "Mobile App Development",
      desc:
        "Custom native & cross-platform mobile apps built for performance and UX.",
      icon: <MdInstallMobile />,
      link: "/mobile-app-development",
    },
    {
      id: 2,
      title: "Web App Development",
      desc:
        "Robust web applications using modern stacks, optimized for scale and speed.",
      icon: <MdInstallMobile />,
      link: "/web-app-development",
    },
    {
      id: 3,
      title: "Website Development",
      desc:
        "Create websites that engage audiences and deliver the right business info.",
      icon: <MdInstallMobile />,
      link: "/website-development",
    },
    {
      id: 4,
      title: "UI/UX Design",
      desc:
        "User-centered design solutions that increase engagement and conversions.",
      icon: <MdInstallMobile />,
      link: "/ui-ux-design",
    },
    {
      id: 5,
      title: "Staff Augmentation",
      desc:
        "Scale your team quickly with vetted developers and specialists on demand.",
      icon: <MdInstallMobile />,
      link: "/staff-augmentation",
    },
    {
      id: 6,
      title: "Digital Marketing",
      desc:
        "SEO, PPC, content & social strategies to grow traffic and conversions.",
      icon: <MdInstallMobile />,
      link: "/digital-marketing",
    },
  ];

  // ref for horizontal scroll container
  const servicesRef = useRef(null);

  const scrollByWidth = (dir = "next") => {
    const el = servicesRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".service-card")?.clientWidth || 300;
    const gap = 24; // same as CSS gap
    const scrollAmount = cardWidth + gap;
    if (dir === "next") {
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

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

      {/* ===== Third Section: Services / Cards ===== */}
      <section className="services-section">
        <div className="container">
          <div className="services-head">
            <h2 className="services-title">Explore Our Stellar <span className="accent">Digital Service Offering</span></h2>
            <p className="services-sub">Leverage our end-to-end web and mobile development expertise to drive business growth and innovation.</p>

            <div className="services-nav">
              <button className="nav-btn" aria-label="prev" onClick={() => scrollByWidth("prev")}>←</button>
              <button className="nav-btn" aria-label="next" onClick={() => scrollByWidth("next")}>→</button>
            </div>
          </div>

          <div className="services-carousel" ref={servicesRef} aria-label="services list">
            {services.map((s) => (
              <a key={s.id} href={s.link} className="service-card" >
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

                <button className="cta-button secondary" type="button" aria-label="Get started">
                <span className="cta-icon">
                  <ImSwitch />
                </span>
                <span className="cta-text">LEARN MORE</span>
              </button>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
