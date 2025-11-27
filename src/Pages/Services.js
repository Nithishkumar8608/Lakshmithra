import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/Mock.js";
import "./Services.css";
import SectionTitle from "../Component/SectionTitle";

const Services = () => {
  const [expandedService, setExpandedService] = useState(services[0]?.id ?? null);

  const serviceMetrics = [
    { label: "Avg Approval", value: "48 hrs" },
    { label: "Loan Programs", value: "40+" },
    { label: "Customer Delight", value: "98%" },
    { label: "Branches", value: "25" }
  ];

  const deliveryPillars = [
    {
      title: "Personalized Advisory",
      detail: "Scenario planning, EMI mapping, and portfolio health dashboards for every borrower.",
      accent: "#FFA500"
    },
    {
      title: "Data-Driven Monitoring",
      detail: "Live eligibility engines, predictive alerts, and compliance-ready documentation layers.",
      accent: "#00C6FB"
    },
    {
      title: "Always-On Support",
      detail: "Embedded chat, multilingual care pods, and proactive servicing across channels.",
      accent: "#7B61FF"
    }
  ];

  const workflowPhases = [
    {
      step: "01",
      title: "Discover",
      desc: "Craft tailored borrowing journeys with interactive need assessment tools.",
      icon: "Search"
    },
    {
      step: "02",
      title: "Validate",
      desc: "Upload docs securely, auto-verify, and receive instant risk insights.",
      icon: "ShieldCheck"
    },
    {
      step: "03",
      title: "Approve",
      desc: "AI-assisted sanctioning issues decisions and transparent term sheets.",
      icon: "CheckCircle2"
    },
    {
      step: "04",
      title: "Grow",
      desc: "Disburse, monitor, and optimize with dynamic repayment nudges.",
      icon: "Rocket"
    }
  ];

  const partnerHighlights = [
    {
      icon: "Layers",
      title: "Modular Offers",
      desc: "Blend personal, MSME, and secured stacks for multi-goal funding",
      accent: "#FF6B00"
    },
    {
      icon: "Star",
      title: "4.9/5 CSAT",
      desc: "Experience-led engagement with live satisfaction tracking",
      accent: "#FFD54F"
    },
    {
      icon: "Globe",
      title: "Pan-India Reach",
      desc: "Digital-first servicing anchored by 25+ partner locations",
      accent: "#00C6FB"
    },
    {
      icon: "RefreshCcw",
      title: "Seamless Transfers",
      desc: "Balance transfer, top-ups, and refinancing without friction",
      accent: "#7B61FF"
    }
  ];

  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const accentParallax = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const activeService = services.find((svc) => svc.id === expandedService) ?? services[0];

  return (
    <div className="services-page service-new-layout">
      {/* ===================== HERO SECTION (unchanged banner) ===================== */}
      <section
        className="services-hero position-relative text-white d-flex align-items-center"
        style={{
          minHeight: "500px",
          background:
            "linear-gradient(rgba(0, 59, 109, 0.85), rgba(0, 59, 109, 0.8)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80) center/cover",
          backgroundAttachment: "fixed"
        }}
      >
        <motion.div className="services-hero-parallax" style={{ y: heroParallax }} />
        <motion.div className="services-hero-parallax accent" style={{ y: accentParallax }} />
        <div className="container text-center position-relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-3 fw-bold mb-4">Our Services</h1>
            <p className="lead fs-5">Comprehensive financial solutions tailored to your needs</p>
          </motion.div>
        </div>
      </section>

      {/* ===================== IMMERSIVE INTRO ===================== */}
      <section className="service-intro py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <p className="section-tag">Why Lakshmithra</p>
              <h2 className="fw-bold mb-3">Immersive service architecture for every ambition</h2>
              <p className="text-muted mb-4">
                We retained the bold hero you love and reimagined the body with layered storytelling, interactive focus panels, and parallax cues that guide customers from curiosity to conversion without losing momentum.
              </p>
              <div className="row g-3">
                {serviceMetrics.map((metric) => (
                  <div key={metric.label} className="col-6">
                    <div className="metric-pill">
                      <span>{metric.value}</span>
                      <p>{metric.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <motion.div
                className="service-intro-panel"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="intro-badge">Human + Digital</div>
                <h5 className="fw-bold mb-3">Guided journeys</h5>
                <p className="text-muted mb-4">
                  Dedicated specialists, smart nudges, and transparent milestones turn complex loan tasks into an elegant, confidence-building experience.
                </p>
                <div className="intro-links">
                  <Link to="/contact">Talk to a specialist →</Link>
                  <Link to="/services">View success stories →</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICE GRID + FOCUS PANEL ===================== */}
      <section className="service-showcase py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="service-card-grid">
                {services.map((service, index) => {
                  const IconComponent = Icons[service.icon];
                  const isActive = activeService?.id === service.id;
                  return (
                    <motion.button
                      key={service.id}
                      type="button"
                      className={`service-card-tile ${isActive ? "active" : ""}`}
                      onMouseEnter={() => setExpandedService(service.id)}
                      onFocus={() => setExpandedService(service.id)}
                      onClick={() => setExpandedService(service.id)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="service-card-head">
                        <div className="service-card-icon">{IconComponent && <IconComponent size={26} />}</div>
                        <h5 className="mb-1">{service.name}</h5>
                        <p className="text-muted mb-0">{service.shortDesc}</p>
                      </div>
                      <div className="service-card-foot">
                        <span>{service.interestRate}</span>
                        <span>Explore →</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-5">
              <motion.div
                className="service-focus-panel"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="focus-eyebrow mb-2">Deep dive</p>
                <h3 className="text-warning fw-bold mb-3">{activeService?.name}</h3>
                <p className=" mb-4">{activeService?.shortDesc}</p>
                <div className="service-focus-features">
                  {activeService?.benefits?.slice(0, 4).map((benefit) => (
                    <span key={benefit}>{benefit}</span>
                  ))}
                </div>
                <div className="service-focus-metrics">
                  <div>
                    <p className="label">Interest Rate</p>
                    <p className="value">{activeService?.interestRate}</p>
                  </div>
                  <div>
                    <p className="label">Eligibility Snapshot</p>
                    <p className="value">{activeService?.eligibility?.[0]}</p>
                  </div>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <Link to={`/services/${activeService?.id}`} className="btn btn-lg px-4 py-3 focus-primary">
                    View Details
                  </Link>
                  <Link to="/contact" className="btn btn-lg px-4 py-3 focus-secondary">
                    Talk to Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PARALLAX DELIVERY STACK ===================== */}
      <section className="service-parallax-band position-relative overflow-hidden">
        <motion.div className="parallax-wave" style={{ y: heroParallax }} />
        <div className="container position-relative">
          <SectionTitle
            subtitle="Delivery Stack"
            title="Experiences engineered with depth"
            description="Scroll-linked bands pulse as visitors learn how we architect lending journeys."
          />
          <div className="row g-4">
            {deliveryPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="col-lg-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="pillar-card" style={{ borderColor: pillar.accent }}>
                  <span className="pillar-index">0{index + 1}</span>
                  <h5 className="fw-bold">{pillar.title}</h5>
                  <p className=" mb-0">{pillar.detail}</p>
                  <div className="pillar-progress">
                    <span style={{ backgroundColor: pillar.accent }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WORKFLOW ===================== */}
      <section className="service-workflow py-5">
        <div className="container">
          <SectionTitle
            subtitle="Service Motion"
            title="How every engagement flows"
            description="Smooth cards animate upward, mirroring the parallax choreography as prospects progress."
          />
          <div className="workflow-grid">
            {workflowPhases.map((phase, index) => {
              const IconComponent = Icons[phase.icon];
              return (
                <motion.div
                  key={phase.title}
                  className="workflow-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="workflow-step">{phase.step}</div>
                  <div className="workflow-icon">{IconComponent && <IconComponent size={28} />}</div>
                  <h6>{phase.title}</h6>
                  <p className="text-muted mb-0">{phase.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== PROOF & HIGHLIGHTS ===================== */}
      <section className="service-proof py-5">
        <div className="container">
          <div className="row g-4">
            {partnerHighlights.map((item, index) => {
              const IconComponent = Icons[item.icon];
              return (
                <motion.div
                  key={item.title}
                  className="col-lg-3 col-md-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="proof-card">
                    <div className="proof-icon" style={{ color: item.accent, backgroundColor: `${item.accent}22` }}>
                      {IconComponent && <IconComponent size={28} />}
                    </div>
                    <h5 className="fw-bold mb-1">{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section
        className="service-cta-modern text-white position-relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0, 59, 109, 0.95), rgba(0, 27, 51, 0.92)), url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <motion.div className="cta-glow" style={{ y: accentParallax }} />
        <div className="container position-relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="hero-eyebrow text-uppercase mb-3">Next step</p>
            <h2 className="display-5 fw-bold mb-4">Shape your next financial milestone</h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: "620px" }}>
              Hold onto the dramatic hero, then glide through parallax-powered sections that keep prospects inspired right up to conversion.
            </p>
            <div className="d-flex gap-3 flex-wrap justify-content-center">
              <Link
                to="/contact"
                className="btn btn-lg px-5 py-3 shadow"
                style={{ backgroundColor: "#FFA500", color: "white", border: "none", borderRadius: "12px" }}
              >
                Book a Strategy Call
              </Link>
              <Link
                to="/services"
                className="btn btn-lg px-5 py-3"
                style={{ border: "1px solid rgba(255,255,255,0.7)", color: "white", borderRadius: "12px" }}
              >
                Explore Offerings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
