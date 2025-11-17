import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react';
import './About.css';

function About() {
  const values = [
    { icon: Shield, title: 'Core Value', desc: 'Transparency to all our stakeholders' },
    { icon: Users, title: 'Guiding Factor', desc: 'Prudence in all our business decisions' },
    { icon: Award, title: 'Foundation', desc: 'Long Term Relationship with all our stakeholders ' },
    
  ];

  const team = [
    { name: 'Ramesh Gupta', role: 'CEO & Founder', expertise: '25+ years in Banking' },
    { name: 'Sneha Reddy', role: 'Chief Financial Officer', expertise: '20+ years in Finance' },
    { name: 'Vikram Singh', role: 'Head of Operations', expertise: '15+ years in Lending' },
    { name: 'Anjali Mehta', role: 'Customer Relations Head', expertise: '12+ years in Service' }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="about-hero-title">About Lakshmithra Finance</h1>
            <p className="about-hero-subtitle">Building trust through transparent financial solutions since 1998</p>
          </motion.div>
        </div>
      </section>

      <section className="about-story py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title">About Lakshmithra</h2>
                <p className="lead">
                  Lakshmithra Finance Private Limited is an RBI registered non - deposit taking Non-Banking Finance Company (NBFC)
                </p>
                <p>
                  Lakshmithra Finance is a company promoted and managed by professionals who have had over 2 decades of experience in the NBFC sector.
                </p>
                <p>
                  At Lakshmithra Finance, we empower businesses to grow and thrive. Our tailored financial solutions are designed to meet the unique needs of entrepreneurs, helping them seize opportunities and achieve their goals. Whether the entrepreneurs are looking to expand operations, invest in new resources, or take the next big step, Lakshmithra Finance provides the support and expertise needed to drive the business forward.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="about-image-container"
              >
                <div className="about-image-placeholder">
                  <TrendingUp size={100} className="about-icon" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mv-card card h-100 p-5"
              >
                <div className="mv-icon mb-4">
                  <Target size={50} />
                </div>
                <h3 className="mb-3">Our Mission</h3>
                <p className="mb-0">
                  To empower individuals and businesses with accessible, affordable, and transparent financial solutions that enable them to achieve their dreams and build a secure financial future. We are committed to delivering exceptional service with integrity and innovation.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mv-card card h-100 p-5"
              >
                <div className="mv-icon mb-4">
                  <Eye size={50} />
                </div>
                <h3 className="mb-3">Our Vision</h3>
                <p className="mb-0">
                  To be a trusted long term financial services partner for the “un-incorporated”
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="values py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">Delivering best in class experience for our customers with a strong commitment to a long-term partnership with all stakeholders - aiming to build inclusive growth and financial sustainability</p>
          </div>
          <div className="row g-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-card text-center p-4">
                  <div className="value-icon mx-auto mb-3">
                    <value.icon size={36} />
                  </div>
                  <h5 className="mb-3">{value.title}</h5>
                  <p className="text-muted mb-0">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="team py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle">Experienced professionals dedicated to your financial success</p>
          </div>
          <div className="row g-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="team-card card text-center p-4">
                  <div className="team-avatar mx-auto mb-3">
                    <Users size={40} />
                  </div>
                  <h5 className="mb-2">{member.name}</h5>
                  <p className="text-primary mb-2">{member.role}</p>
                  <small className="text-muted">{member.expertise}</small>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="achievements py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Achievements</h2>
            <p className="section-subtitle">Milestones that reflect our commitment to excellence</p>
          </div>
          <div className="row g-4">
            <motion.div
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="achievement-card text-center p-4">
                <h3 className="achievement-number">25+</h3>
                <p className="achievement-label">Years of Excellence</p>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="achievement-card text-center p-4">
                <h3 className="achievement-number">10,000+</h3>
                <p className="achievement-label">Satisfied Customers</p>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="achievement-card text-center p-4">
                <h3 className="achievement-number">₹500Cr+</h3>
                <p className="achievement-label">Loans Disbursed</p>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="achievement-card text-center p-4">
                <h3 className="achievement-number">98%</h3>
                <p className="achievement-label">Customer Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
