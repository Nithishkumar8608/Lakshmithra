import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, color } from "framer-motion";
import * as Icons from "lucide-react";
import { services, testimonials, stats, processSteps, whyChooseUs } from "../data/Mock.js";
import SectionTitle from "../Component/SectionTitle";
import "./Home.css";

const offeringBadges = [
  { icon: "Briefcase", title: "MSME Growth", detail: "₹50L custom term limits" },
  { icon: "Building", title: "Infra Finance", detail: "Structured capital stacks" },
  { icon: "PiggyBank", title: "Retail Credit", detail: "Home, LAP, and personal" }
];

const heroSlides = [
  {
    eyebrow: "Finance. Crafted.",
    title: "Intelligent capital for bold businesses and families.",
    description:
      "Lakshmithra blends human insight, real-time data, and embedded partnerships to keep your growth story fluent across credit, advisory, and experience.",
    primaryCta: { label: "Design My Plan", link: "/contact" },
    secondaryCta: { label: "See All Solutions", link: "/services" },
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=900",
    highlights: [
      { icon: "Zap", title: "32 hrs", desc: "Average loan approval speed" },
      { icon: "Shield", title: "99.2%", desc: "Portfolio health score" },
      { icon: "Globe", title: "10 states", desc: "Nationwide partner grid" }
    ],
    badges: offeringBadges
  },
  {
    eyebrow: "Capital Engine",
    title: "Co-create capital stacks that move as fast as you do.",
    description: "Layer co-lending, treasury advisory, and experience pods to choreograph expansion, M&A, or family transitions with confidence.",
    primaryCta: { label: "Book Strategy Call", link: "/contact" },
    secondaryCta: { label: "Explore Cases", link: "/services" },
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900",
    highlights: [
      { icon: "Gauge", title: "48 hr", desc: "Digital underwriting" },
      { icon: "Layers", title: "Stackable", desc: "Mix credit + advisory" },
      { icon: "Globe", title: "Multi-region", desc: "Partner network" }
    ],
    badges: [
      { icon: "Handshake", title: "Co-Lending", detail: "Syndicated structures" },
      { icon: "LineChart", title: "Treasury Ops", detail: "Active yield design" },
      { icon: "Users", title: "Family Office", detail: "Stewardship pods" }
    ]
  },
  {
    eyebrow: "Experience Pods",
    title: "Human guardians meet predictive intelligence.",
    description: "From onboarding rituals to lifetime servicing, multilingual pods anticipate needs with proactive nudges and specialist intervention.",
    primaryCta: { label: "Meet Our Pods", link: "/team" },
    secondaryCta: { label: "Download Playbook", link: "/services" },
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900",
    highlights: [
      { icon: "Sparkles", title: "4.9/5", desc: "Experience NPS" },
      { icon: "Headphones", title: "24/7", desc: "Guardian desks" },
      { icon: "Wifi", title: "Embedded", desc: "APIs + human" }
    ],
    badges: [
      { icon: "Shield", title: "Compliance Mesh", detail: "Unified controls" },
      { icon: "Bell", title: "Nudge Lab", detail: "Predictive triggers" },
      { icon: "Smile", title: "Care Studio", detail: "Multilingual hosts" }
    ]
  }
];

const insightTabs = [
  {
    icon: "Sparkles",
    title: "Experience Stacks",
    metric: "4.9/5 NPS",
    description: "Embassy-style service pods pair multilingual care with proactive nudges for every milestone.",
    bullets: ["Design-led onboarding rituals", "Playbooks for moments that matter", "Predictive support with real agents"],
    accent: "#FAD961"
  },
  {
    icon: "Gauge",
    title: "Digital Underwriting",
    metric: "48 hr disbursals",
    description: "Risk engines blend bureau data, GST rails, and behavioural scores for faster, fairer outcomes.",
    bullets: ["AI-assisted policy engines", "Human override controls", "Portfolio early-warning mesh"],
    accent: "#A6FFCB"
  },
  {
    icon: "Layers",
    title: "Partnership Fabric",
    metric: "120+ nodes",
    description: "Co-lending, co-origination, and embedded finance rails stitched into one secure layer.",
    bullets: ["Unified compliance cockpit", "Transparent revenue splits", "Always-on innovation councils"],
    accent: "#B5C7FF"
  }
];

const workflowVisuals = [
  { icon: "PiggyBank", accent: "linear-gradient(135deg, #daeafeff, #8ecdf7ff)" },
  { icon: "UserCheck", accent: "linear-gradient(135deg, #daeafeff, #8ecdf7ff)" },
  { icon: "FileText", accent: "linear-gradient(135deg, #daeafeff, #8ecdf7ff)" },
  { icon: "Smartphone", accent: "linear-gradient(135deg, #daeafeff, #8ecdf7ff)" }
];

const testimonialStatsData = [
  {
    id: "reach",
    value: "12k+",
    title: "Portfolios guided",
    description: "Custom loan strategies delivered for ambitious founders, families, and SMEs."
  },
  {
    id: "transparency",
    value: "0%",
    title: "Hidden fees",
    description: "Advisory, underwriting, and servicing stay transparent through every interaction."
  }
];

const getInitials = (name = "") =>
  name
    .split(" ")
    .map((part) => part.trim().charAt(0))
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const ActiveInsight = insightTabs[activeTab];
  const currentSlide = heroSlides[activeSlide];
  const currentTestimonial = testimonials[activeTestimonial];
  const testimonialInitials = currentTestimonial ? getInitials(currentTestimonial.name) : "";

  const goToPrevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToNextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const goToPrevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToNextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 60000);
    return () => clearInterval(testimonialTimer);
  }, []);

  return (
    <div>
      <section
        className="position-relative text-white overflow-hidden"
        style={{ minHeight: "600px" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.image}
            className="position-absolute top-0 start-0 w-100 h-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundImage: `linear-gradient(120deg, rgba(0, 25, 53, 0.95), rgba(0, 59, 109, 0.75)), url(${currentSlide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </AnimatePresence>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "radial-gradient(circle at top, rgba(255,165,0,0.25), transparent 50%)" }}
        />
        <div className="container position-relative py-5">
          <div className="row align-items-center g-5">
            <div className="col-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-uppercase fw-bold mb-3" style={{ letterSpacing: "0.2em", color: "#FFA500", fontSize: "0.75rem", fontWeight: 600 }}>
                    {currentSlide.eyebrow}
                  </p>
                  <h1 className="display-3 fw-bold mb-4" style={{ lineHeight: 1.2, fontWeight: 700, color: "white" }}>
                    {currentSlide.title}
                  </h1>
                  <p className="mb-4" style={{ maxWidth: "640px", color: "white", fontSize: "1rem", fontWeight: 400, lineHeight: 1.6, opacity: 0.95 }}>
                    {currentSlide.description}
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    {currentSlide.primaryCta && (
                      <Link
                        to={currentSlide.primaryCta.link}
                        className="btn btn-lg px-4 py-3 shadow"
                        style={{ backgroundColor: "#FFA500", color: "#001935", fontWeight: 700, borderRadius: "50px", border: "none" }}
                      >
                        {currentSlide.primaryCta.label}
                      </Link>
                    )}
                    {currentSlide.secondaryCta && (
                      <Link
                        to={currentSlide.secondaryCta.link}
                        className="btn btn-lg px-4 py-3 shadow-sm"
                        style={{ backgroundColor: "transparent", color: "white", borderRadius: "50px", border: "1px solid rgba(255,255,255,0.4)", fontWeight: 600 }}
                      >
                        {currentSlide.secondaryCta.label}
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-3 mt-5 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="btn btn-outline-light rounded-circle border-0"
                style={{ width: 48, height: 48, backgroundColor: "rgba(255,255,255,0.15)" }}
                onClick={goToPrevSlide}
              >
                <Icons.ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="btn btn-outline-light rounded-circle border-0"
                style={{ width: 48, height: 48, backgroundColor: "rgba(255,255,255,0.15)" }}
                onClick={goToNextSlide}
              >
                <Icons.ChevronRight size={20} />
              </button>
            </div>
            <div className="d-flex gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className="border-0"
                  style={{
                    width: activeSlide === index ? 36 : 10,
                    height: 10,
                    borderRadius: 999,
                    backgroundColor: activeSlide === index ? "#FFA500" : "rgba(255,255,255,0.3)",
                    transition: "all 0.3s ease"
                  }}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#f2f5f9" }}>
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
                <div
                  className="h-100 p-4 rounded-4"
                  style={{
                    background: "linear-gradient(145deg, #ffffff, #f4f6fb)",
                    boxShadow: "0 25px 40px rgba(0, 43, 91, 0.08)",
                    border: "1px solid #eef1f6"
                  }}
                >
                  <p className="text-uppercase fw-bold" style={{ color: "#FFA500", letterSpacing: "0.2em", fontSize: "0.75rem", fontWeight: 600, marginBottom: "8px" }}>
                    {stat.label}
                  </p>
                  <h2 className="fw-bold" style={{ color: "#003B6D", fontSize: "2.75rem", fontWeight: 700, lineHeight: 1.2 }}>
                    {stat.value}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-4">
              <SectionTitle
                subtitle="Solutions"
                title="Modular products for every ambition"
                description="Mix credit, advisory, and technology layers to orchestrate capital the way modern businesses operate."
              />
              <div className="d-flex flex-column gap-3 mt-4">
                {whyChooseUs.slice(0, 3).map((item) => {
                  const Icon = Icons[item.icon];
                  return (
                    <div key={item.id} className="p-3 rounded-4" style={{ backgroundColor: "#f2f5f9" }}>
                      <div className="d-flex align-items-center gap-3">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 48, height: 48, backgroundColor: "#003B6D", color: "white" }}>
                          {Icon && <Icon size={24} />}
                        </div>
                        <div>
                          <p className="fw-bold mb-1" style={{ color: "#003B6D", fontSize: "0.95rem", fontWeight: 700 }}>
                            {item.title}
                          </p>
                          <p className="mb-0" style={{ color: "#4c627a", fontSize: "0.875rem", fontWeight: 400 }}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row g-4">
                {services.slice(0, 4).map((service, index) => {
                  const Icon = Icons[service.icon];
                  return (
                    <motion.div
                      key={service.id}
                      className="col-md-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="h-100 p-4 rounded-4 position-relative"
                        style={{
                          border: "1px solid #edf0f5",
                          background: "linear-gradient(135deg, rgba(0,59,109,0.04), rgba(255,165,0,0.05))",
                          boxShadow: "0 20px 35px rgba(0,59,109,0.08)"
                        }}
                      >
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 64, height: 64, backgroundColor: "white" }}>
                            {Icon && <Icon size={28} style={{ color: "#003B6D" }} />}
                          </div>
                          <span className="badge" style={{ backgroundColor: "rgba(255,165,0,0.15)", color: "#D17B00" }}>
                            {service.segment || "Premium"}
                          </span>
                        </div>
                        <h4 className="fw-bold mb-3" style={{ color: "#003B6D", fontSize: "1.1rem", fontWeight: 700 }}>
                          {service.name}
                        </h4>
                        <p className="mb-4" style={{ color: "#4c627a", fontSize: "0.95rem", fontWeight: 400 }}>{service.shortDesc}</p>
                        <Link to={`/services/${service.id}`} className="fw-semibold" style={{ color: "#003B6D", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600 }}>
                          Explore product →
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ background: "linear-gradient(135deg, #f6f8ff, #fff)" }}>
        <div className="container">
          <SectionTitle
            subtitle="Strategy Pods"
            title="Design your journey with our experts"
            description="Pick a focus area and see how our pods choreograph credit, compliance, and experience in one sprint."
          />
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="d-flex flex-column gap-3">
                {insightTabs.map((tab, index) => {
                  const Icon = Icons[tab.icon];
                  return (
                    <button
                      key={tab.title}
                      type="button"
                      className={`text-start p-4 rounded-4 border-0 ${activeTab === index ? "shadow-lg" : "shadow-sm"}`}
                      style={{
                        backgroundColor: activeTab === index ? "#003B6D" : "white",
                        color: activeTab === index ? "white" : "#003B6D",
                        transition: "all 0.3s ease"
                      }}
                      onClick={() => setActiveTab(index)}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <p className="text-uppercase fw-bold mb-1" style={{ letterSpacing: "0.2em", fontSize: "0.75rem", fontWeight: 600 }}>
                            {tab.metric}
                          </p>
                          <h5 className="fw-bold mb-0" style={{ fontSize: "1rem", fontWeight: 700 }}>{tab.title}</h5>
                        </div>
                        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 46, height: 46, backgroundColor: activeTab === index ? "rgba(255,255,255,0.2)" : "rgba(0,59,109,0.08)" }}>
                          {Icon && <Icon size={22} />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-7">
              <motion.div
                key={ActiveInsight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-4 p-lg-5 rounded-5"
                style={{
                  background: `linear-gradient(135deg, ${ActiveInsight.accent}, #ffffff)`,
                  boxShadow: "0 30px 60px rgba(0,59,109,0.15)"
                }}
              >
                <h3 className="fw-bold mb-3" style={{ color: "#003B6D", fontSize: "1.5rem", fontWeight: 700 }}>
                  {ActiveInsight.title}
                </h3>
                <p className="mb-4" style={{ color: "#4c627a", fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 }}>
                  {ActiveInsight.description}
                </p>
                <div className="row g-3">
                  {ActiveInsight.bullets.map((bullet) => (
                    <div key={bullet} className="col-md-6">
                      <div className="d-flex align-items-center gap-2 p-3 rounded-4" style={{ backgroundColor: "rgba(255,255,255,0.65)" }}>
                        <Icons.CheckCircle size={20} style={{ color: "#0A6C3F" }} />
                        <span className="fw-semibold" style={{ color: "#0f1a2c", fontSize: "0.95rem", fontWeight: 600 }}>
                          {bullet}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-workflow-section py-5">
        <div className="container">
          <div className="home-workflow-header">
            {/* <button type="button" className="workflow-viewall-btn">
              <Icons.ArrowLeft size={16} />
              <span>View All</span>
            </button> */}
            <div className="workflow-heading text-center">
              <span className="workflow-eyebrow">Work Process</span>
              <h2>
                Execution With Clear Steps
              </h2>
            </div>
          </div>
          <div className="home-workflow-track">
            {processSteps.map((step, index) => {
              const visual = workflowVisuals[index % workflowVisuals.length];
              const Icon = Icons[visual.icon];

              return (
                <motion.div
                  key={step.id}
                  className="home-workflow-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="workflow-card-icon" style={{ background: visual.accent }}>
                    <div className="workflow-card-icon-inner">{Icon && <Icon size={34} />}</div>
                  </div>
                  <span className="workflow-card-seq">0{index + 1}</span>
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                  {index !== processSteps.length - 1 && <span className="workflow-connector" />}
                </motion.div>
              );
            })}
          </div>
          <div className="workflow-footnote">
            <span>Get Free Quote</span>
            <Link to="/contact">Let's talk! We'll reply within a day</Link>
          </div>
        </div>
      </section>

      <section className="testimonial-section py-5">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="testimonial-left">
              <div className="testimonial-eyebrow">
                <p className="text-uppercase fw-bold mb-0" style={{ color: "#FFA500", fontSize: "0.75rem", letterSpacing: "0.2em", fontWeight: 600 }}>
                  Testimonials
                </p>
              </div>
              <div className="testimonial-heading">
                <div>
                  <h2 style={{ color: "#003B6D", fontSize: "2.75rem", fontWeight: 700, marginBottom: "12px" }}>Genuine reviews from satisfied customers</h2>
                  {/* <p style={{ color: "#4c627a", fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 }}>CXOs, founders, and families trust us with capital moments because we stay present beyond disbursal.</p> */}
                </div>
              </div>
              {currentTestimonial && (
                <>
                  <motion.blockquote
                    key={currentTestimonial.id}
                    className="testimonial-quote"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    “{currentTestimonial.content}”
                  </motion.blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{testimonialInitials}</div>
                    <div>
                      <p className="testimonial-author-name">{currentTestimonial.name}</p>
                      <p className="testimonial-author-role">{currentTestimonial.role}</p>
                    </div>
                  </div>
                </>
              )}
              <div className="testimonial-controls">
                <button type="button" className="testimonial-control-btn" onClick={goToPrevTestimonial} aria-label="Previous testimonial">
                  <Icons.ArrowLeft size={18} />
                </button>
                <button type="button" className="testimonial-control-btn" onClick={goToNextTestimonial} aria-label="Next testimonial">
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>
            {/* <div className="testimonial-metrics">
              {testimonialStatsData.map((metric) => (
                <div key={metric.id} className="testimonial-metric">
                  <p className="testimonial-metric-value">{metric.value}</p>
                  <p className="testimonial-metric-title">{metric.title}</p>
                  <p className="testimonial-metric-desc">{metric.description}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-5 text-white" style={{ background: "linear-gradient(120deg, #001022, #003B6D)" }}>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-3" style={{ fontSize: "2.5rem", fontWeight: 700, color: "white" }}>Ready to choreograph your next financial move?</h2>
              <p className="mb-0" style={{ maxWidth: "600px", fontSize: "1rem", fontWeight: 400, lineHeight: 1.6, color: "white" }}>
                Book a discovery workshop with our strategists and walk out with a custom credit plan, risk heat-map, and execution roadmap.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex flex-wrap gap-3 justify-content-lg-end">
                <Link
                  to="/contact"
                  className="btn btn-lg px-5 py-3"
                  style={{ backgroundColor: "#FFA500", color: "#001935", borderRadius: "50px", fontWeight: 700 }}
                >
                  Book Workshop
                </Link>
                <Link
                  to="/loancalculator"
                  className="btn btn-lg px-5 py-3"
                  style={{ border: "1px solid rgba(255,255,255,0.6)", borderRadius: "50px", color: "white", fontWeight: 600 }}
                >
                  Calculate EMI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
