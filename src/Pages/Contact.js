import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section 
        className="contact-hero"
        style={{
          minHeight: "500px",
          background: "linear-gradient(135deg, rgba(0, 59, 109, 0.85), rgba(0, 90, 156, 0.85)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80) center/cover"
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="contact-hero-title">Get In Touch</h1>
            <p className="contact-hero-subtitle">We're here to help you with all your financial needs</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-4">Contact Information</h3>
                <p className="text-muted mb-5">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                <div className="contact-info-card mb-4">
                  <div className="contact-info-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h6>Register Office</h6>
                    <p>3/260, Moovendar Street, M.A.Nagar,
                      Redhills, Chennai - 600 052</p>
                  </div>
                </div>

                <div className="contact-info-card mb-4">
                  <div className="contact-info-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h6>Call Us</h6>
                    <p>+91 - 96006 - 84363</p>
                  </div>
                </div>

                <div className="contact-info-card mb-4">
                  <div className="contact-info-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h6>Email Us</h6>
                    <p>customercare@lakshmithra.com</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h6>Working Hours</h6>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="contact-form-container"
              >
                <h3 className="mb-4">Send Us a Message</h3>

                {submitted && (
                  <div className="alert alert-success" role="alert">
                    Thank you for contacting us! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <select
                        className="form-select"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="loan-inquiry">Loan Inquiry</option>
                        <option value="existing-loan">Existing Loan Support</option>
                        <option value="general">General Question</option>
                        <option value="complaint">Complaint</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary-custom btn-lg">
                        Send Message <Send size={18} className="ms-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="branches-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Branches</h2>
            <p className="section-subtitle">Visit us at any of our conveniently located branches</p>
          </div>
          <div className="row g-4">
            {[
              {
                city: 'Chennai (Head Office)',
                address: '3/260, Moovendar Street, M.A.Nagar, Redhills, Chennai - 600 052',
                phone: '+91 - 96006 - 84363',
                email: 'customercare@lakshmithra.com',
                hours: 'Mon - Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM'
              },
              {
                city: 'Bangalore Branch',
                address: '123 MG Road, Bangalore - 560001',
                phone: '+91 - 98765 - 43210',
                email: 'bangalore@lakshmithra.com',
                hours: 'Mon - Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM'
              },
              {
                city: 'Hyderabad Branch',
                address: '456 Hitech City, Hyderabad - 500081',
                phone: '+91 - 99999 - 88888',
                email: 'hyderabad@lakshmithra.com',
                hours: 'Mon - Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM'
              },
              {
                city: 'Mumbai Branch',
                address: '789 Bandra Kurla Complex, Mumbai - 400051',
                phone: '+91 - 97777 - 66666',
                email: 'mumbai@lakshmithra.com',
                hours: 'Mon - Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM'
              }
            ].map((branch, idx) => (
              <motion.div
                key={idx}
                className="col-lg-6 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="branch-card">
                  <div className="branch-header">
                    <MapPin size={24} className="branch-icon" />
                    <h5>{branch.city}</h5>
                  </div>
                  <div className="branch-content">
                    <p className="branch-address">
                      <strong>Address:</strong><br />
                      {branch.address}
                    </p>
                    <p className="branch-info">
                      <Phone size={16} className="info-icon" />
                      <a href={`tel:${branch.phone.replace(/\s+/g, '')}`}>{branch.phone}</a>
                    </p>
                    <p className="branch-info">
                      <Mail size={16} className="info-icon" />
                      <a href={`mailto:${branch.email}`}>{branch.email}</a>
                    </p>
                    <p className="branch-info">
                      <Clock size={16} className="info-icon" />
                      <span>{branch.hours}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container-fluid p-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.4643865898483!2d80.17247427591063!3d13.196135387140224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d00796e66e9%3A0xade5c74360a97c1e!2sMoovendar%20Street%20Villa%203!5e0!3m2!1sen!2sin!4v1763116161939!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Lakshmithra Finance Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
