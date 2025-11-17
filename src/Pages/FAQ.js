import { useState } from 'react';
import { motion } from 'framer-motion';

import FAQAccordion from '../Component/FAQAccordion';
import faqData from '../data/faqData.json'; 
import SectionTitle from '../Component/SectionTitle';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* ====== HERO SECTION ====== */}
      <section className="page-hero bg-primary text-white py-5">
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="display-3 fw-bold mb-3">Frequently Asked Questions</h1>
            <p className="lead">Find answers to common questions about our loan services</p>
          </motion.div>
        </div>
      </section>

      {/* ====== FAQ LIST SECTION ====== */}
      <section className="py-5" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
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
                className="bg-white rounded-3 shadow-sm p-4"
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
      <section className="py-5 bg-warning" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="display-6 fw-bold mb-3">Still Have Questions?</h2>
            <p className="text-muted mb-4">
              Can't find what you're looking for? Our team is here to help you.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="tel:+919876543210" className="btn btn-primary btn-lg px-5">
                Call Us Now
              </a>
              <a
                href="mailto:info@lakshmithrafinance.com"
                className="btn btn-outline-primary btn-lg px-5"
              >
                Email Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
