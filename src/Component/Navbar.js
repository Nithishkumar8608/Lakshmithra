import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Strip */}
      <div className="top-bar bg-primary text-white py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <a href="tel:1800-123-4567" className="text-white me-3">
                  <i className="fas fa-phone-alt me-2"></i>1800-123-4567
                </a>
                <a href="mailto:info@lakshmithra.com" className="text-white">
                  <i className="fas fa-envelope me-2"></i>info@lakshmithra.com
                </a>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/branch-locator" className="btn btn-outline-light btn-sm me-2">Find Branch</Link>
              <Link to="/apply" className="btn btn-warning btn-sm">Apply Now</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Lakshmithra Logo" height="60" />
          </Link>



          <button
            className={`navbar-toggler custom-toggler ${isMenuOpen ? 'open' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT US</Link>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRODUCTS & SERVICES
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/commercial-vehicle-finance">COMMERCIAL VEHICLE FINANCE</Link></li>
                  <li><Link className="dropdown-item" to="/secured-business-loans">SECURED BUSINESS LOANS</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/howitworks">HOW IT WORKS</Link>
              </li>

              {/* <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HOW IT WORKS
                </button>
                 <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/eligibility">Eligibility</Link></li>
                  <li><Link className="dropdown-item" to="/process">Process</Link></li>
                  <li><Link className="dropdown-item" to="/documents">Documents</Link></li>
                  <li><Link className="dropdown-item" to="/fees-repayment">Fees & Repayment</Link></li>
                </ul> 
              </li> */}

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  RESOURCES & MEDIA
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/faqs">FAQs</Link></li>
                  <li><Link className="dropdown-item" to="/gallery">GALLERY</Link></li>
                  <li><Link className="dropdown-item" to="/mediakit">MEDIA KIT</Link></li>
                  <li><Link className="dropdown-item" to="/blogs">BLOGS & INSIGHTS</Link></li>
                  <li><Link className="dropdown-item" to="/calculators">CALCULATORS</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/careers">CAREERS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;