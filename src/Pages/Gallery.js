import React from 'react';
import { Image } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Gallery.css';
import SectionTitle from '../Component/SectionTitle';

function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Office Premises', category: 'Infrastructure', image: 'https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, title: 'Customer Service', category: 'Team', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, title: 'Financial Consultation', category: 'Services', image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, title: 'Team Meeting', category: 'Team', image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 5, title: 'Modern Workspace', category: 'Infrastructure', image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 6, title: 'Client Interaction', category: 'Services', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 7, title: 'Conference Room', category: 'Infrastructure', image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 8, title: 'Professional Team', category: 'Team', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 9, title: 'Gold Loan Processing', category: 'Services', image: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section 
        className="position-relative text-white py-5 d-flex align-items-center"
        style={{
          minHeight: "500px",
          background: "linear-gradient(rgba(0, 59, 109, 0.85), rgba(0, 59, 109, 0.8)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80) center/cover",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-3 fw-bold mb-4">Our Gallery</h1>
            <p className="lead fs-5">A glimpse into our workspace, team, and services</p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <SectionTitle
            subtitle="Photo Gallery"
            title="Explore Our World"
            description="Browse through our collection of office spaces, team moments, and service excellence"
          />

          <div className="row g-4">
            {galleryItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  className="card border-0 shadow-sm overflow-hidden h-100 rounded-4"
                  style={{ transition: "all 0.3s ease", cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 59, 109, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div className="gallery-img-wrapper position-relative overflow-hidden" style={{ height: "250px" }}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-100 h-100 object-fit-cover"
                      style={{ transition: "transform 0.3s ease" }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                    <span 
                      className="position-absolute top-0 start-0 m-3 badge fw-semibold"
                      style={{ backgroundColor: "#003B6D" }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-0" style={{ color: "#003B6D" }}>
                      {item.title}
                    </h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section 
        className="py-5 text-white"
        style={{
          backgroundColor: "#003B6D",
          paddingTop: "80px",
          paddingBottom: "80px"
        }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="display-4 fw-bold mb-4">Visit Our Office</h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: "600px" }}>
              Experience our state-of-the-art facilities and meet our professional team in person
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link 
                to="/contact" 
                className="btn btn-lg px-5 py-3 shadow"
                style={{
                  backgroundColor: "#FFA500",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: "none"
                }}
              >
                Get Directions
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-lg px-5 py-3 shadow-sm"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "8px",
                  border: "2px solid white",
                  textDecoration: "none"
                }}
              >
                Schedule a Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
