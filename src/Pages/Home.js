import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { services, testimonials, stats } from "../data/Mock.js";
import SectionTitle from "../Component/SectionTitle";
import TestimonialCard from "../Component/TestimonialCard";

const Home = () => {
  return (
    <div>

      {/* ========================= HERO SECTION ========================= */}
      <section
        className="position-relative text-white d-flex align-items-center"
        style={{
          minHeight: "650px",
          background:
            "linear-gradient(rgba(0, 59, 109, 0.8), rgba(0, 59, 109, 0.7)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80) center/cover",
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
                  Your Trusted Partner for Financial Growth
                </h1>
                <p className="fs-5 mb-4 opacity-75">
                  Quick loan approval, competitive rates, and personalized
                  financial solutions designed to help you achieve your goals.
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
                    Our Services
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
                <div className="text-center p-3 shadow-sm rounded">
                  <h2
                    className="fw-bold mb-2"
                    style={{ color: "#003B6D", fontSize: "3rem" }}
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
            {services.slice(0, 3).map((service, index) => {
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
                  <div className="card h-100 border-0 shadow-sm rounded-4 unique-hover-card">
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
                        to="/services"
                        className="btn btn-sm px-4 py-2 shadow-sm"
                        style={{
                          backgroundColor: "#003B6D",
                          color: "white",
                          borderRadius: "6px",
                        }}
                      >
                        Learn More
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
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="container">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Your Success is Our Priority"
            description="We stand out with our customer-first approach and commitment to financial excellence."
          />

          <div className="row g-4">
            {[
              { icon: "Clock", title: "Quick Approval", desc: "Get your loan approved within 48 hours with minimal documentation." },
              { icon: "Shield", title: "100% Secure", desc: "Your data is protected with bank-grade encryption." },
              { icon: "TrendingUp", title: "Best Rates", desc: "Competitive interest rates to suit your financial goals." },
              { icon: "Users", title: "Expert Support", desc: "Dedicated relationship managers to guide you throughout the process." }
            ].map((item, index) => {
              const IconComp = Icons[item.icon];

              return (
                <motion.div
                  key={index}
                  className="col-lg-3 col-md-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-card text-center p-4 h-100 bg-white rounded-4 shadow-sm">
                    <div
                      className="icon-wrapper bg-primary bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <IconComp size={40} className="text-primary" />
                    </div>

                    <h5 className="fw-semibold mb-2">{item.title}</h5>
                    <p className="text-muted small">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= TESTIMONIALS ========================= */}
      <section
        className="testimonials-section py-5 bg-light"
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
            <Icons.Award size={64} className="mb-4 text-warning" />

            <h2 className="display-4 fw-bold mb-4">Ready to Get Started?</h2>

            <p
              className="lead mb-5 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Take the first step toward your financial goals.  
              Apply now and receive instant approval!
            </p>

            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link
                to="/contact"
                className="btn btn-warning btn-lg px-5 py-3 shadow"
                style={{ borderRadius: "8px" }}
              >
                Apply for Loan
              </Link>

              <Link
                to="/loancalculator"
                className="btn btn-outline-light btn-lg px-5 py-3 shadow-sm"
                style={{ borderRadius: "8px" }}
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
