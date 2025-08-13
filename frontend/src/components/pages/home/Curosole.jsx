import React, { useEffect, useRef, useState } from 'react';
import './curosole.css';




const slidesData = [
  {
    title: 'Mern stack development',
description: `Build powerful and scalable web applications using MongoDB, Express.js, React, and Node.js — all in one full-stack solution. Perfect for modern business needs, offering seamless performance and flexibility.`,
    link: 'https://optimuscomputer.in/hardware-repair-in-coimbatore',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744482044/website%20logo/MERN-logo_jrbnqp.png"
  },
  {
    title: 'HTML',
  description: `The foundation of every website — HTML structures your content for the web, ensuring clear layout, accessibility, and SEO-friendly markup. It's the first step in turning ideas into interactive websites.`,
    link: 'https://optimuscomputer.in/data-recovery-services-in-coimbatore',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744480729/website%20logo/HTML5_logo_and_wordmark.svg_l13iqz.png"
  },
  {
    title: 'CSS',
  description: `CSS brings your website to life with attractive styling, layouts, and animations. It enhances user experience by making content visually appealing and responsive across all devices. Essential for modern UI design.`,
    link: 'https://optimuscomputer.in/virus-removal-service-in-coimbatore',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744481564/website%20logo/css3_nyeagc.png"
  },
  {
    title: 'Express.js',
  description: `Express.js is a fast, minimal, and flexible backend framework for Node.js. It simplifies server-side development with powerful routing, middleware support, and clean APIs. Ideal for building robust RESTful services and scalable web apps.`,
    link: 'https://optimuscomputer.in/products-buy-refurbished-and-used-laptops',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744475403/website%20logo/erasebg-transformed_g3tkqg.webp"
  },
  {
    title: 'Node.js',
  description: `Node.js is a high-performance JavaScript runtime built on Chrome’s V8 engine, ideal for building scalable network applications. It enables fast, non-blocking I/O operations and supports real-time data handling. Perfect for APIs, servers, and microservices.`,
    link: 'https://optimuscomputer.in/software-solutions-in-coimbatore',
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
  },
  {
    title: 'React.js',
  description: `React.js is a powerful JavaScript library for building fast, interactive, and reusable user interfaces. It uses a component-based architecture and virtual DOM for efficient updates and rendering. Ideal for single-page applications and dynamic frontends.`,
    link: 'https://optimuscomputer.in/printer-maintenance-services',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744477372/website%20logo/React.svg_exa2oe.png"
  },
  {
    title: 'MongoDB',
  description: `MongoDB is a flexible, document-based NoSQL database designed for high performance and scalability. It stores data in JSON-like format, making it easy to work with modern web apps. Ideal for real-time applications and dynamic content management.`,
    link: 'https://optimuscomputer.in/networking-services-in-coimbatore',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744476885/website%20logo/MongoDB_Logo.svg_d19xab.png"
  },
  {
    title: 'JavaScript',
  description: `JavaScript is the core language of the web, enabling interactive, dynamic, and real-time features in websites and applications. From DOM manipulation to API integration, it powers the frontend and backend alike. A must-have skill for every web developer.`,
    link: 'https://optimuscomputer.in/networking-services-in-coimbatore',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744476294/website%20logo/javascript_fpaybb.png"
  }
];

const Curosole = () => {
  const [index, setIndex] = useState(0);
  const slidesRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slidesData.length);
  };

  
  return (
    <div className="slider-wrapper">
      <div className="slider">
        {/* Bubble Background - INSIDE slider */}
        <div className="bubbles">
          {Array.from({ length: 15 }).map((_, i) => (
            <span
              key={i}
              style={{
                "--i": Math.floor(Math.random() * 10) + 5
              }}
            ></span>
          ))}
        </div>

        {/* Slides */}
        <div className="slides" ref={slidesRef}>
          {slidesData.map((slide, i) => (
            <div className="slide" key={i}>
              <div className="caption">
                <h2>{slide.title}</h2>
                <p>
                  {slide.description}{" "}
                  <a href={slide.link} target="_blank" rel="noreferrer">
                    more
                  </a>
                </p>
              </div>
              <img src={slide.image} alt={slide.title} />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button className="prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};




export default Curosole;