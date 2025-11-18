import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, User, Home, CheckCircle, ArrowRight, Car, GraduationCap, Coins } from 'lucide-react';
import servicesData from '../data/servicesData.json';
import './Services.css';

function Services() {
  // Map icon names to actual icon components
  const iconMap = {
    Briefcase,
    User,
    Home,
    Car,
    GraduationCap,
    Coins
  };

  // Add icon components and colors to services data
  const services = servicesData.map((service, index) => ({
    ...service,
    icon: iconMap[service.icon] || User,
    color: index % 2 === 0 ? '#003B6D' : '#FFA500'
  }));

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="services-hero-title">Our Financial Services</h1>
            <p className="services-hero-subtitle">Comprehensive loan solutions tailored to meet your unique financial needs</p>
          </motion.div>
        </div>
      </section>

      <section className="services-list py-5">
        <div className="container">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-detail-card mb-5"
            >
              <div className="row align-items-center">
                <div className={`col-lg-5 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                  <div className="service-icon-large" style={{ background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)` }}>
                    <service.icon size={80} />
                  </div>
                </div>
                <div className={`col-lg-7 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                  <div className="service-content p-4">
                    <h2 className="service-title mb-3">{service.title}</h2>
                    <p className="service-description mb-4">{service.description}</p>
                    <div className="service-features mb-4">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="feature-item">
                          <CheckCircle size={20} className="feature-check" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={`/services/${service.id}`} className="btn btn-primary-custom">
                      Learn More <ArrowRight size={18} className="ms-2" />
                    </Link>
                    <Link to="/contact" className="btn btn-outline-primary">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="loan-process py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Simple Loan Process</h2>
            <p className="section-subtitle">Get your loan approved in 4 easy steps</p>
          </div>
          <div className="row g-4">
            {[
              { step: '01', title: 'Apply Online', desc: 'Fill out our simple online application form with basic details' },
              { step: '02', title: 'Document Verification', desc: 'Submit required documents for quick verification' },
              { step: '03', title: 'Approval', desc: 'Get instant approval notification within 24-48 hours' },
              { step: '04', title: 'Disbursement', desc: 'Receive funds directly in your bank account' }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="process-card text-center p-4">
                  <div className="process-step">{process.step}</div>
                  <h5 className="mt-3 mb-3">{process.title}</h5>
                  <p className="text-muted mb-0">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="eligibility py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Eligibility Criteria</h2>
            <p className="section-subtitle">Basic requirements to apply for a loan</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="eligibility-card card p-4 text-center"
              >
                <h5 className="mb-3">Age</h5>
                <p className="text-muted mb-0">Between 21 to 65 years</p>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="eligibility-card card p-4 text-center"
              >
                <h5 className="mb-3">Income</h5>
                <p className="text-muted mb-0">Minimum ₹15,000 per month</p>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="eligibility-card card p-4 text-center"
              >
                <h5 className="mb-3">Credit Score</h5>
                <p className="text-muted mb-0">650 or above preferred</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-content text-center p-5"
          >
            <h2 className="text-white mb-4">Ready to Apply for a Loan?</h2>
            <p className="text-white mb-4">Get started with your loan application today and receive funds within 48 hours</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-warning btn-lg me-3">Apply Now</Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
