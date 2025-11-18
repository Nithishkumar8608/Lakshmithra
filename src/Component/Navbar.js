import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Active link check
  const isActive = (path) => location.pathname === path;

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>

      {/* ===== TOP BAR ===== */}
      <div className="top-bar bg-primary text-white py-2 d-none d-md-block">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3">

                <div className="d-flex align-items-center gap-1">
                  <Phone size={14} />
                  <span className="small">+91 98765 43210</span>
                </div>

                <div className="d-flex align-items-center gap-1">
                  <Mail size={14} />
                  <span className="small">info@lakshmithrafinance.com</span>
                </div>

              </div>
            </div>

            <div className="col-md-6 text-end">
              <Link to="/branch-locator" className="btn btn-outline-light btn-sm me-2">Find Branch</Link>
              
            </div>

          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand fw-bold" to="/">
            <img src={logo} alt="Lakshmithra Logo" height="55" />
          </Link>

          {/* Mobile Toggle Button */}
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

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {/* Home */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/') ? 'active text-primary fw-semibold' : ''}`}
                  to="/"
                >
                  HOME
                </Link>
              </li>

              {/* About */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/about') ? 'active text-primary fw-semibold' : ''}`}
                  to="/about"
                >
                  ABOUT US
                </Link>
              </li>

              {/* SERVICES */}
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link  ${isActive('/services') ? 'active text-primary fw-semibold' : ''}`}
                  to="/services"
                 
                >
                  SERVICES
                </Link>

                
              </li>

              {/* HOW IT WORKS */}
              {/* <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/howitworks') ? 'active text-primary fw-semibold' : ''}`}
                  to="/howitworks"
                >
                  HOW IT WORKS
                </Link>
              </li> */}

              {/* RESOURCES */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  RESOURCES & MEDIA
                </button>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/FAQ">FAQs</Link></li>
                  <li><Link className="dropdown-item" to="/gallery">GALLERY</Link></li>
                  <li><Link className="dropdown-item" to="/mediakit">MEDIA KIT</Link></li>
                  <li><Link className="dropdown-item" to="/blogs">BLOGS & INSIGHTS</Link></li>
                  <li><Link className="dropdown-item" to="/loancalculator">CALCULATORS</Link></li>
                </ul>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/contact') ? 'active text-primary fw-semibold' : ''}`}
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>

              {/* Career */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/career') ? 'active text-primary fw-semibold' : ''}`}
                  to="/career"
                >
                  CAREER
                </Link>
              </li>

              <Link to="/contact" className="btn btn-warning btn-sm">Apply Now</Link>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
