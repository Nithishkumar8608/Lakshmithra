import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { services, testimonials, stats, processSteps, whyChooseUs } from "../data/Mock.js";
import SectionTitle from "../Component/SectionTitle";
import TestimonialCard from "../Component/TestimonialCard";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>

      {/* ========================= HERO SECTION ========================= */}
      <section
        className="position-relative text-white d-flex align-items-center"
        style={{
          minHeight: "700px",
          background:
            "linear-gradient(rgba(0, 59, 109, 0.85), rgba(0, 59, 109, 0.8)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80) center/cover",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-3 fw-bold mb-4">
                  Trusted Finance Solutions for Your Success
                </h1>
                <p className="fs-5 mb-4 opacity-85">
                  Quick loan approval, competitive rates, and personalized financial solutions designed to help you achieve your dreams. We're your reliable partner in financial growth.
                </p>

                <div className="d-flex gap-3 flex-wrap">
                  <Link
                    to="/contact"
                    className="btn btn-lg px-4 shadow"
                    style={{
                      backgroundColor: "#FFA500",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "8px",
                      border: "none"
                    }}
                  >
                    Apply Now
                  </Link>

                  <Link
                    to="/services"
                    className="btn btn-lg btn-outline-light px-4 shadow-sm"
                    style={{
                      fontWeight: "600",
                      borderRadius: "8px",
                    }}
                  >
                    Explore Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= STATS SECTION ========================= */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center p-4 shadow-sm rounded" style={{ borderTop: "4px solid #FFA500" }}>
                  <h2
                    className="fw-bold mb-2"
                    style={{ color: "#003B6D", fontSize: "2.5rem" }}
                  >
                    {stat.value}
                  </h2>
                  <p className="text-muted fw-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= SERVICES SECTION ========================= */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#f8f9fa",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="container">

          <SectionTitle
            subtitle="Our Services"
            title="Financial Solutions for Every Need"
            description="Choose from our wide range of loan products tailored to your personal and business goals."
          />

          <div className="row g-4">
            {services.map((service, index) => {
              const IconComponent = Icons[service.icon];

              return (
                <motion.div
                  key={service.id}
                  className="col-lg-4 col-md-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card h-100 border-0 shadow-sm rounded-4 position-relative overflow-hidden"
                    style={{ transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 59, 109, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <div className="card-body p-4">
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                        style={{
                          width: "70px",
                          height: "70px",
                          backgroundColor: "#FFA500",
                          color: "white",
                        }}
                      >
                        {IconComponent && <IconComponent size={32} />}
                      </div>

                      <h4 className="fw-bold mb-3" style={{ color: "#003B6D" }}>
                        {service.name}
                      </h4>

                      <p className="text-muted mb-4">{service.shortDesc}</p>

                      <Link
                        to={`/services/${service.id}`}
                        className="btn btn-sm px-4 py-2 shadow-sm"
                        style={{
                          backgroundColor: "#003B6D",
                          color: "white",
                          borderRadius: "6px",
                          textDecoration: "none"
                        }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-5">
            <Link
              to="/services"
              className="btn btn-lg px-5 py-3 shadow"
              style={{
                backgroundColor: "#003B6D",
                color: "white",
                fontWeight: "600",
                borderRadius: "8px",
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= WHY CHOOSE US ========================= */}
      <section
        className="why-choose-section py-5"
        style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#fff" }}
      >
        <div className="container">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Your Success is Our Priority"
            description="We stand out with our customer-first approach and commitment to financial excellence."
          />

          <div className="row g-4">
            {whyChooseUs.map((item, index) => {
              const IconComp = Icons[item.icon];

              return (
                <motion.div
                  key={item.id}
                  className="col-lg-3 col-md-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-card text-center p-4 h-100 bg-light rounded-4 shadow-sm"
                    style={{ borderLeft: "4px solid #FFA500" }}
                  >
                    <div
                      className="icon-wrapper rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{ width: "80px", height: "80px", backgroundColor: "#003B6D", color: "white" }}
                    >
                      <IconComp size={40} />
                    </div>

                    <h5 className="fw-semibold mb-2" style={{ color: "#003B6D" }}>{item.title}</h5>
                    <p className="text-muted small">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= HOW IT WORKS ========================= */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#f8f9fa",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="container">
          <SectionTitle
            subtitle="Our Process"
            title="Simple Steps to Get Your Loan"
            description="Quick and transparent process designed for your convenience"
          />

          <div className="row g-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="position-relative p-4 bg-white rounded-4 shadow-sm text-center h-100">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#FFA500",
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "bold"
                    }}
                  >
                    {index + 1}
                  </div>

                  <h5 className="fw-bold mb-2" style={{ color: "#003B6D" }}>
                    {step.title}
                  </h5>

                  <p className="text-muted small">{step.description}</p>

                  {index < processSteps.length - 1 && (
                    <div
                      className="position-absolute d-none d-lg-block"
                      style={{
                        right: "-30px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "2rem",
                        color: "#FFA500"
                      }}
                    >
                      →
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= TESTIMONIALS ========================= */}
      <section
        className="testimonials-section py-5 bg-white"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="container">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Real feedback from customers who achieved their financial goals with us."
          />

          <div className="row g-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="col-lg-4"
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= CTA SECTION ========================= */}
      <section
        className="cta-section text-white py-5"
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          backgroundColor: "#003B6D",
        }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Icons.Award size={64} className="mb-4" style={{ color: "#FFA500" }} />

            <h2 className="display-4 fw-bold mb-4">Ready to Get Started?</h2>

            <p
              className="lead mb-5 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Take the first step toward your financial goals. Apply now and receive instant approval!
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
                  border: "none"
                }}
              >
                Apply for Loan
              </Link>

              <Link
                to="/loancalculator"
                className="btn btn-lg px-5 py-3 shadow-sm"
                style={{ 
                  backgroundColor: "transparent",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "8px",
                  border: "2px solid white"
                }}
              >
                Calculate EMI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
