import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">Lakshmithra Finance</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;

