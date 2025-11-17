import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { services, testimonials, stats, whyChooseUs } from '../data/Mock.js';
import SectionTitle from '../Component/SectionTitle';

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="position-relative text-white d-flex align-items-center"
        style={{
          minHeight: '600px',
          background:
            'linear-gradient(rgba(0, 59, 109, 0.85), rgba(0, 90, 156, 0.85)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80) center/cover',
        }}
      >
        <div className="container">
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
                <p className="fs-5 mb-4">
                  Quick loan approval, competitive rates, and personalized financial solutions tailored to your needs. Get started in minutes!
                </p>

                <div className="d-flex gap-3 flex-wrap">
                  <Link
                    to="/apply"
                    className="btn btn-lg px-4"
                    style={{
                      backgroundColor: '#FFA500',
                      color: 'white',
                      border: 'none',
                      fontWeight: '600',
                    }}
                  >
                    Apply Now
                  </Link>

                  <Link
                    to="/services"
                    className="btn btn-lg btn-outline-light px-4"
                    style={{ fontWeight: '600' }}
                  >
                    Our Services
                  </Link>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <h2
                    className="fw-bold mb-2"
                    style={{ color: '#FFA500', fontSize: '3rem' }}
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


      {/* Services Section */}
      <section className="py-5" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">

          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive loan solutions designed to meet your financial needs"
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
                  <div className="card h-100 border-0 shadow-sm hover-card">
                    <div className="card-body p-4">
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: '64px',
                          height: '64px',
                          backgroundColor: '#FFA500',
                          color: 'white',
                        }}
                      >
                        {IconComponent && <IconComponent size={32} />}
                      </div>

                      <h4 className="fw-bold mb-3" style={{ color: '#003B6D' }}>
                        {service.name}
                      </h4>

                      <p className="text-muted mb-4">{service.shortDesc}</p>

                      <Link
                        to="/services"
                        className="btn btn-sm"
                        style={{
                          backgroundColor: '#003B6D',
                          color: 'white',
                          border: 'none',
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
              className="btn btn-lg"
              style={{
                backgroundColor: '#FFA500',
                color: 'white',
                border: 'none',
                fontWeight: '600',
              }}
            >
              View All Services
            </Link>
          </div>

        </div>
      </section>


      {/* Why Choose Us */}
      <section
        className="py-5"
        style={{ backgroundColor: '#f8f9fa', paddingTop: '80px', paddingBottom: '80px' }}
      >
        <div className="container">

          <SectionTitle
            title="Why Choose Lakshmithra Finance?"
            subtitle="We are committed to providing the best financial solutions with unmatched service"
          />

          <div className="row g-4">
            {whyChooseUs.map((item, index) => {
              const IconComponent = Icons[item.icon];

              return (
                <motion.div
                  key={item.id}
                  className="col-lg-3 col-md-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-center p-4">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#003B6D',
                        color: 'white',
                      }}
                    >
                      {IconComponent && <IconComponent size={36} />}
                    </div>

                    <h5 className="fw-bold mb-3" style={{ color: '#003B6D' }}>
                      {item.title}
                    </h5>

                    <p className="text-muted">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* Testimonials */}
      <section className="py-5" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">

          <SectionTitle
            title="What Our Customers Say"
            subtitle="Real experiences from real customers who trust us with their financial needs"
          />

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="col-lg-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icons.Star
                          key={i}
                          size={20}
                          fill="#FFA500"
                          color="#FFA500"
                          className="me-1"
                        />
                      ))}
                    </div>

                    <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                      "{testimonial.content}"
                    </p>

                    <div>
                      <h6 className="fw-bold mb-0" style={{ color: '#003B6D' }}>
                        {testimonial.name}
                      </h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* CTA */}
      <section
        className="py-5 text-white"
        style={{
          background: 'linear-gradient(135deg, #003B6D 0%, #005A9C 100%)',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
              <p className="fs-5 mb-4 mb-lg-0">
                Apply for a loan today and get instant approval. Our team is ready to help you achieve your financial goals.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <Link
                to="/apply"
                className="btn btn-lg px-5"
                style={{
                  backgroundColor: '#FFA500',
                  color: 'white',
                  border: 'none',
                  fontWeight: '600',
                }}
              >
                Apply Now
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
