import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowLeft, CheckCircle, FileText, UserCheck } from "lucide-react";
import servicesData from "../data/servicesData.json";
import "./ServiceDetails.css";

const journeySteps = [
  {
    step: "01",
    title: "Discover",
    desc: "Share goals and surface the ideal credit mix with a guided intake."
  },
  {
    step: "02",
    title: "Curate",
    desc: "Scenario planning aligns tenure, pricing, and safeguards to your context."
  },
  {
    step: "03",
    title: "Secure",
    desc: "Digital vaulting speeds documentation, verification, and sanctioning."
  },
  {
    step: "04",
    title: "Grow",
    desc: "Always-on support optimizes repayments and opens future capital windows."
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="container py-5 text-center">
        <h2>Service not found</h2>
        <Link to="/services" className="btn btn-primary mt-3">
          Back to Services
        </Link>
      </div>
    );
  }

  const IconComponent = Icons[service.icon];

  const highlightMetrics = [
    { label: "Interest rate", value: service.interestRate, caption: "per annum" },
    { label: "Processing", value: service.processingTime ?? "Fast approval", caption: "avg turnaround" },
    { label: "Ideal for", value: service.shortDesc, caption: "use case" },
    { label: "Support", value: "Dedicated expert desk", caption: "human + digital" }
  ];

  return (
    <div className="service-detail-page neo-detail-page">
      <section
        className="page-hero text-white"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 59, 109, 0.85), rgba(0, 90, 156, 0.85)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80) center/cover"
        }}
      >
        <div className="container hero-detail-container" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/services" className="hero-back-btn">
              <ArrowLeft size={18} />
              Back to Services
            </Link>
            <div className="hero-detail-icon">
              {IconComponent && <IconComponent size={48} className="text-white" />}
            </div>
            <h1 className="hero-detail-title">{service.title}</h1>
            <p className="hero-detail-description">{service.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="detail-overview">
        <div className="container">
          <motion.div className="detail-overview-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <span className="detail-badge">About {service.title}</span>
            <h2>{service.shortDesc}</h2>
            <p>{service.fullDescription}</p>
            <div className="overview-metrics">
              {highlightMetrics.map((metric) => (
                <div key={metric.label} className="metric-pill">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <em>{metric.caption}</em>
                </div>
              ))}
            </div>
            <div className="overview-cta">
              <Link to="/contact" className="btn-detail-primary">
                Apply now
              </Link>
              <Link to="/loancalculator" className="btn-detail-secondary">
                Calculate EMI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="detail-stack">
        <div className="container">
          <div className="detail-grid">
            <motion.div className="detail-panel focus-panel" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
              <p className="eyebrow">Experience deck</p>
              <h3>Why customers choose {service.title}</h3>
              <div className="chip-stack">
                {service.features.slice(0, 3).map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
              <p className="focus-text">{service.fullDescription}</p>
              <div className="feature-grid">
                {service.features.map((feature) => (
                  <div key={feature} className="feature-chip">
                    <CheckCircle size={18} />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div className="detail-panel journey-panel" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <p className="eyebrow">Journey map</p>
              <h3>How the process flows</h3>
              <div className="journey-board">
                {journeySteps.map((step) => (
                  <div key={step.step} className="journey-card">
                    <span>{step.step}</span>
                    <h6>{step.title}</h6>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="detail-essentials">
        <div className="container">
          <div className="essentials-grid">
            <motion.div className="essentials-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <div className="card-heading">
                <UserCheck size={24} />
                <div>
                  <p>Eligibility</p>
                  <h4>Who can apply</h4>
                </div>
              </div>
              <ul className="detail-list">
                {service.eligibility.map((item) => (
                  <li key={item}>
                    <span />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="essentials-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <div className="card-heading">
                <FileText size={24} />
                <div>
                  <p>Documentation</p>
                  <h4>What you need</h4>
                </div>
              </div>
              <ul className="detail-list">
                {service.documents.map((item, index) => (
                  <li key={item + index}>
                    <span />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="detail-support">
        <div className="container">
          <div className="support-grid">
            <motion.div className="support-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <h4>Ready to begin?</h4>
              <p>Kick off your application and receive tailored guidance within hours.</p>
              <div className="support-actions">
                <Link to="/contact" className="btn-detail-primary">
                  Apply now
                </Link>
                <Link to="/services" className="btn-detail-secondary">
                  Compare programs
                </Link>
              </div>
            </motion.div>
            <motion.div className="support-card muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <h5>Need help?</h5>
              <p>Our experts are available on call, chat, or email.</p>
              <div className="contact-links">
                <a href="tel:+919876543210">Call +91 98765 43210</a>
                <a href="mailto:info@lakshmithrafinance.com">Email info@lakshmithrafinance.com</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
