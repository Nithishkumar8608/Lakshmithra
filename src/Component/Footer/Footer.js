import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <img src={logo} alt="Lakshmithra Logo" width="50%" />
              <p>
                Lakshmithra (P) Ltd is committed to providing quality and trust
                in every product and service we deliver.
              </p>
              
            </div>

            {/* Column 2 */}
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact</h5>
              <p><i className="fa-solid fa-phone-volume"></i> +91 96006 84363</p>
              <p><i className="fa-solid fa-envelope"></i> customercare@lakshmithra.com</p>
              <p><i className="fa-solid fa-paper-plane"></i> 3/260, Moovendar Street, M.A.Nagar,
                Redhills, Chennai - 600 052</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Lakshmithra (P) Ltd. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
