import React, { useEffect, useState } from 'react'
import './ReturnPolicy.css'
import axios from 'axios';

const ReturnPolicy = () => {

const [companyInfo, setCompanyInfo] = useState({
    email: "",
    phone: "",
    address: "",
    website: "www.zentronixinfotech.com/",
  });

  const fetchAddress = async () => {
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
  };

  useEffect(() => {
    fetchAddress();
  }, []);




  return (
    <div className="return_policy_container">
      <div className="return_policy_header">
        <h1>Return & Refund Policy</h1>
        <p>
          At <b>Zentronix Infotech</b>, we value our customers and strive to deliver
          the highest quality products and services. However, if for any reason you
          are not fully satisfied with your purchase, our return and refund policy
          ensures a smooth and transparent process.
        </p>
      </div>

      <div className="return_policy_section">
        <h2>1. Eligibility for Returns</h2>
        <p>
          - Items must be returned within <b>7 working days</b> from the date of delivery. <br />
          - Products must be unused, undamaged, and in their original packaging. <br />
          - Proof of purchase (invoice or order ID) is mandatory for all returns. <br />
          - Certain products such as customized software, digital services, or 
            on-demand projects may not be eligible for return unless defective.
        </p>
      </div>

      <div className="return_policy_section">
        <h2>2. Non-Returnable Items</h2>
        <p>
          - Downloadable software or digital products. <br />
          - Services that have already been rendered. <br />
          - Gift cards, promotional items, or trial services. <br />
          - Products purchased under clearance or special discounts.
        </p>
      </div>

      <div className="return_policy_section">
        <h2>3. Refunds</h2>
        <p>
          - Once we receive and inspect the returned product, you will be notified via email. <br />
          - Approved refunds will be processed within <b>7-10 business days</b> using the
            original method of payment. <br />
          - In some cases, refund processing time may vary depending on your bank or
            payment provider. <br />
          - Shipping or handling charges are non-refundable unless the product was defective.
        </p>
      </div>

      <div className="return_policy_section">
        <h2>4. Exchanges</h2>
        <p>
          - Defective or damaged products are eligible for exchange within the
            return period. <br />
          - If the same product is not available, you may request a refund or
            choose an alternate product of equal value.
        </p>
      </div>

      <div className="return_policy_section">
        <h2>5. Cancellations</h2>
        <p>
          - Orders can be cancelled before shipping by contacting our customer
            support team. <br />
          - Once the order is dispatched, cancellations are not possible. In such
            cases, you may apply for a return after delivery.
        </p>
      </div>

      <div className="return_policy_section">
        <h2>6. Contact Us</h2>
        <p>
          For any queries related to returns, refunds, or cancellations, you can
          reach out to our support team: <br />
          <b>Email:</b> info@zentronixinfotech.com <br />
          <b>Phone:</b> +91-6260706512 <br />
          <b>Address:</b> Zentronix Infotech, Indore, Madhya Pradesh, India
        </p>
      </div>

      <div className="return_policy_footer">
        <p>
          <i>
            Please note: Zentronix Infotech reserves the right to amend this policy
            at any time without prior notice. The policy in effect at the time of
            purchase will apply.
          </i>
        </p>
      </div>
    </div>
  )
}

export default ReturnPolicy 
