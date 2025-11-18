import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CircleDollarSign,
  Wallet,
  CreditCard,
  TrendingUp,
} from "lucide-react";
import "./Footer.css";

const financeIcons = [CircleDollarSign, Wallet, CreditCard, TrendingUp];

const Footer = () => {
  return (
    <footer className="footer-container">

      {/* Wave Top */}
      <div className="footer-wave"></div>

      <div className="container footer-inner">
        <div className="row g-4">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <h4 className="footer-title">
              <span>Lakshmithra</span> Finance
            </h4>

            <p className="footer-text">
              Your trusted partner in financial growth. We offer customized
              solutions for individuals and businesses.
            </p>

            <div className="d-flex gap-3 mt-3">
              {[
                { Icon: Facebook, href: "https://facebook.com/lakshmithrafinance", label: "Facebook" },
                { Icon: Twitter, href: "https://twitter.com/lakshmithrafinance", label: "Twitter" },
                { Icon: Linkedin, href: "https://linkedin.com/company/lakshmithrafinance", label: "LinkedIn" },
                { Icon: Instagram, href: "https://instagram.com/lakshmithrafinance", label: "Instagram" }
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${label} page`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-menu-title">Quick Links</h5>
            <ul className="footer-list">

              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Services", link: "/services" },
                { name: "Loan Calculator", link: "/loancalculator" },
                { name: "Career", link: "/career" }
              ].map(({ name, link }, i) => (
                <li key={i} className="footer-item">
                  <span className="finance-bullet">
                    {React.createElement(financeIcons[i % 4], { size: 16 })}
                  </span>
                  <Link to={link} className="footer-link">
                    {name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-menu-title">Our Services</h5>
            <ul className="footer-list">

              {[
                { name: "Personal Loan", link: "/services/personal-loan" },
                { name: "Home Loan", link: "/services/home-loan" },
                { name: "Business Loan", link: "/services/business-loan" },
                { name: "Vehicle Loan", link: "/services/vehicle-loan" },
                { name: "Education Loan", link: "/services/education-loan" }
              ].map(({ name, link }, i) => (
                <li key={i} className="footer-item">
                  <span className="finance-bullet">
                    {React.createElement(financeIcons[(i + 2) % 4], { size: 16 })}
                  </span>
                  <Link to={link} className="footer-link">
                    {name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-menu-title">Contact Info</h5>
            <ul className="footer-list contact-list">
              <li>
                <MapPin size={20} className="footer-icon" />
                <span>123, Financial District, Mumbai, Maharashtra</span>
              </li>
              <li>
                <Phone size={20} className="footer-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={20} className="footer-icon" />
                <span>info@lakshmithrafinance.com</span>
              </li>
            </ul>
          </div>

        </div>

        <hr className="footer-divider" />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Lakshmithra Finance. All rights reserved.</p>

          <p>
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link> |
            <Link to="/terms-conditions" className="footer-link"> Terms & Conditions</Link>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
