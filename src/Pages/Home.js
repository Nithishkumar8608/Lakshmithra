import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero d-flex align-items-center justify-content-center text-center text-white">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="display-4 fw-bold mb-3"
          >
            Empowering <span className="text-orange">Financial Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lead mb-4"
          >
            At <strong>Lakshmithra Finance</strong>, we provide innovative financial
            solutions that drive progress, stability, and success.
          </motion.p>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-orange px-4 py-2 fw-semibold rounded-pill"
          >
            Learn More
          </motion.a>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="features py-5 text-center">
        <div className="container">
          <h2 className="fw-bold text-blue mb-4">Why Choose Lakshmithra</h2>
          <p className="text-muted mb-5 w-75 mx-auto">
            We simplify finance for individuals and businesses with transparency,
            trust, and cutting-edge digital services.
          </p>

          <div className="row g-4">
            {[
              {
                icon: "💼",
                title: "Smart Business Loans",
                desc: "Flexible business loan options designed for fast growth and stability.",
              },
              {
                icon: "📈",
                title: "Investment Planning",
                desc: "Secure and high-return investment solutions tailored to your goals.",
              },
              {
                icon: "⚡",
                title: "Quick Approvals",
                desc: "Minimal documentation and instant approval with smart analytics.",
              },
              {
                icon: "🤝",
                title: "Trusted by 10K+ Clients",
                desc: "Over a decade of excellence in financial solutions and client trust.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="col-md-3 col-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="feature-box p-4 shadow-sm bg-white rounded-4 h-100">
                  <div className="icon fs-1 mb-3">{item.icon}</div>
                  <h5 className="fw-bold text-blue mb-2">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="about py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <motion.img
                src="/images/finance-team.jpg"
                alt="Lakshmithra Team"
                className="img-fluid rounded-4 shadow"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <div className="col-md-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="fw-bold text-blue mb-3">About Lakshmithra Finance</h2>
                <p className="text-muted">
                  Lakshmithra Finance is a trusted financial institution offering
                  personalized solutions for individuals and businesses. Our mission is
                  to empower growth through accessible, ethical, and innovative finance.
                </p>
                <ul className="list-unstyled mt-3">
                  <li>✅ Simplified Loan Processing</li>
                  <li>✅ Tailored Investment Plans</li>
                  <li>✅ Expert Financial Guidance</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats text-center text-white py-5">
        <div className="container">
          <div className="row g-4">
            {[
              { value: "₹500Cr+", label: "Funds Disbursed" },
              { value: "10K+", label: "Satisfied Clients" },
              { value: "18+", label: "Years Experience" },
              { value: "150+", label: "Financial Experts" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="col-md-3 col-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="fw-bold text-orange">{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta py-5 text-center">
        <div className="container">
          <h3 className="fw-bold text-blue mb-3">
            Take Control of Your Financial Future
          </h3>
          <p className="text-muted mb-4 w-75 mx-auto">
            Connect with Lakshmithra experts today to find the right financial plan for
            your goals.
          </p>
          <a
            href="#contact"
            className="btn btn-orange px-4 py-2 fw-semibold rounded-pill"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
