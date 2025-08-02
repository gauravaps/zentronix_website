// src/components/SkillsSlider.jsx
import React from "react";
import "./SkillsSlider.css";

const logos = [
  
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744482044/website%20logo/MERN-logo_jrbnqp.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744480729/website%20logo/HTML5_logo_and_wordmark.svg_l13iqz.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744481564/website%20logo/css3_nyeagc.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744475403/website%20logo/erasebg-transformed_g3tkqg.webp",
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744476294/website%20logo/javascript_fpaybb.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744476885/website%20logo/MongoDB_Logo.svg_d19xab.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744477100/website%20logo/MySQL_textlogo.svg_tqyef9.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744477372/website%20logo/React.svg_exa2oe.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744479479/website%20logo/Sql_data_base_with_logo_vh5rw2.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744480920/website%20logo/Html5_dise%C3%B1o_web_rq7wau.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744481373/website%20logo/Official_CSS_Logo.svg_gpq90f.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744481839/website%20logo/Python_logo_and_wordmark.svg_adous5.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744482227/website%20logo/Bootstrap_logo.svg_nlzpue.png",
  "https://res.cloudinary.com/gauravkacloud/image/upload/v1744482788/website%20logo/Octicons-mark-github.svg_otjg1v.png",
];

const SkillsSlider = () => {
  return (
    <div className="brand-carousel">
      <div className="carousel-track">
        {[...logos, ...logos].map((src, index) => (
          <img key={index} src={src} alt="tech-logo" />
        ))}
      </div>
    </div>
  );
};

export default SkillsSlider;