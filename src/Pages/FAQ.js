import { useState } from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from '../Component/FAQAccordion';
import faqData from '../data/faqData.json'; 
import SectionTitle from '../Component/SectionTitle';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* ====== HERO SECTION ====== */}
      <section 
        className="position-relative text-white py-5 d-flex align-items-center"
        style={{
          minHeight: "500px",
          background: "linear-gradient(rgba(0, 59, 109, 0.85), rgba(0, 59, 109, 0.8)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80) center/cover",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-3 fw-bold mb-4">Frequently Asked Questions</h1>
            <p className="lead fs-5">Find answers to common questions about our loan services</p>
          </motion.div>
        </div>
      </section>

      {/* ====== FAQ LIST SECTION ====== */}
      <section className="py-5" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <SectionTitle
                subtitle="Got Questions?"
                title="We've Got Answers"
                description="Browse through our frequently asked questions to find the information you need."
              />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-4 shadow-sm p-4"
                style={{ borderTop: "4px solid #FFA500" }}
              >
                {faqData.map((faq, index) => (
                  <FAQAccordion
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CALL TO ACTION ====== */}
      <section 
        className="py-5 text-white" 
        style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px',
          backgroundColor: '#003B6D'
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="display-4 fw-bold mb-4">Still Have Questions?</h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              Can't find what you're looking for? Our team is here to help you with personalized assistance.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a 
                href="tel:+919876543210" 
                className="btn btn-lg px-5 py-3 shadow"
                style={{
                  backgroundColor: "#FFA500",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "8px",
                  textDecoration: "none"
                }}
              >
                Call Us Now
              </a>
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
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
