import React, { useEffect, useState } from "react";
import "./TermsAndConditions.css";
import axios from "axios";
import { HashLoader } from "react-spinners";


const TermsAndConditions = () => {
    const [loading, setLoading] = useState(false);



const [companyInfo, setCompanyInfo] = useState({
    email: "",
    phone: "",
    address: "",
    website: "www.zentronixinfotech.com/",
  });

  const fetchAddress = async () => {
              setLoading(true); 

    try {
      const res = await axios.get("http://localhost:5000/api/get_address");
      if (res.data.data && res.data.data.length > 0) {
        const current = res.data.data[0];
        setCompanyInfo({
          email: current.email || "",
          phone: current.phone || "",
          address: current.address || "",
          website: "www.zentronixinfotech.com/",
        });
      }
    } catch (err) {
      console.error("Error fetching company info:", err);
    }
     finally {
      setLoading(false); 
    }

  };

  useEffect(() => {
    fetchAddress();
  }, []);


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
    <div className="terms-container">
      <h1 className="gradient-heading">Terms and Conditions</h1>
      <p>
        Welcome to <b>Zentronix Infotech</b> (www.zentronixinfotech.com)!  
        These terms and conditions outline the rules and regulations for the use 
        of our website, products, and services.
      </p>

      <h2 className="gradient-heading">1. Acceptance of Terms</h2>
      <p>
        By accessing this website, we assume you accept these terms and
        conditions. Do not continue to use Zentronix Infotech if you do not agree
        with all of the terms and conditions stated here.
      </p>

      <h2 className="gradient-heading">2. Cookies</h2>
      <p>
        We use cookies to personalize your online experience. By accessing our
        website, you agreed to use the required cookies. Cookies are small text
        files placed on your device to help improve website functionality and
        performance.
      </p>

      <h2 className="gradient-heading">3. License</h2>
      <p>
        Unless otherwise stated, <b>Zentronix Infotech</b> owns the intellectual
        property rights for all material on this website. All rights are reserved.
        You may access this for your own personal use, subject to restrictions
        set in these terms and conditions.
      </p>
      <ul>
        <li>Do not republish material from Zentronix Infotech.</li>
        <li>Do not sell, rent, or sub-license our material.</li>
        <li>Do not reproduce, duplicate, or copy content.</li>
        <li>Do not redistribute content without permission.</li>
      </ul>

      <h2 className="gradient-heading">4. User Comments</h2>
      <p>
        Parts of this website may allow users to post opinions and information.
        Zentronix Infotech does not filter or review comments before publishing.
        Comments reflect the views of the person posting and not necessarily the
        views of Zentronix Infotech.
      </p>

      <h2 className="gradient-heading">5. Hyperlinking to Our Content</h2>
      <p>
        Organizations such as government agencies, search engines, news
        organizations, and online directories may link to our website without prior approval, provided the link is not misleading.
      </p>

      <h2 className="gradient-heading">6. Content Liability</h2>
      <p>
        We are not responsible for content appearing on external websites linked
        to ours. You agree to protect and defend us against all claims that arise
        on your website related to such links.
      </p>

      <h2 className="gradient-heading">7. Reservation of Rights</h2>
      <p>
        Zentronix Infotech reserves the right to request removal of any links to
        our website. We may amend these terms and conditions anytime without prior
        notice.
      </p>

      <h2 className="gradient-heading">8. Disclaimer</h2>
      <p>
        To the maximum extent permitted by law, we exclude all warranties related
        to our website. We do not guarantee that the website content is complete
        or up to date. As long as services are provided free of charge, we will
        not be liable for any loss or damage.
      </p>

      <div className="button-section">
        <a href="/Privacy_Policy" className="btn">Privacy Policy</a>
        <a href="/contact-us" className="btn">Contact Us</a>
        <a href="/" className="btn">Back to Home</a>
      </div>

      <footer className="footer">
        <p>
          📍 Indore, India | ✉️ {companyInfo.email}  
        </p>
        <p>© {new Date().getFullYear()} Zentronix Infotech. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
