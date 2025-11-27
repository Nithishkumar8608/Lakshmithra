import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";
import SectionTitle from "../Component/SectionTitle";

const About = () => {
  const heroHighlights = [
    {
      icon: "Feather",
      title: "Human touch",
      desc: "Embedded relationship pods stay with customers for life moments."
    },
    {
      icon: "Compass",
      title: "Guided journeys",
      desc: "Design strategists choreograph every step with clarity and warmth."
    },
    {
      icon: "Globe",
      title: "Impact network",
      desc: "Local partners amplify reach while maintaining Lakshmithra quality."
    }
  ];

  const signatureThemes = [
    {
      icon: "Sparkles",
      title: "Culture of Care",
      desc: "Deep listening, multilingual support pods, and human moments built into every milestone.",
      metric: "98% CSAT"
    },
    {
      icon: "Zap",
      title: "Bold Innovation",
      desc: "Data-led underwriting, intelligent nudges, and adaptive journeys keep us future-ready.",
      metric: "12 patented flows"
    },
    {
      icon: "Shield",
      title: "Governance First",
      desc: "Layered compliance, RBI-aligned guardrails, and live risk dashboards across teams.",
      metric: "Zero lapses"
    }
  ];

  const culturePillars = [
    {
      title: "Financial Inclusion Grid",
      detail: "Branch-light, partner-strong model ensures metro precision with rural empathy.",
      accent: "#FFA500"
    },
    {
      title: "Innovation Guilds",
      detail: "Cross-functional squads turn on-ground insights into new credit experiences every quarter.",
      accent: "#00C6FB"
    },
    {
      title: "Trust Architecture",
      detail: "Transparent pricing, secure data estates, and always-on audit trails protect every rupee.",
      accent: "#7B61FF"
    }
  ];

  const values = [
    {
      icon: "Shield",
      title: "Integrity",
      desc: "Transparent conversations, ethical lending, and zero compromise on governance."
    },
    {
      icon: "TrendingUp",
      title: "Progress",
      desc: "Relentless pursuit of smarter, faster, kinder credit experiences."
    },
    {
      icon: "Heart",
      title: "Empathy",
      desc: "Designing support systems that honor every customer's story."
    },
    {
      icon: "Users",
      title: "Community",
      desc: "Partnering with local ecosystems to amplify prosperity."
    }
  ];

  const timeline = [
    { year: "2000", event: "Lakshmithra Finance begins with a mission to democratize credit" },
    { year: "2008", event: "RBI-registered NBFC status with strong compliance stack" },
    { year: "2015", event: "Expanded across 10 states with blended branch-digital network" },
    { year: "2020", event: "₹500Cr+ capital deployed to MSMEs and families" },
    { year: "2024", event: "Experience studio launched with 98% satisfaction" }
  ];

  const teamMembers = [
    {
      name: "Tanja Ursula",
      role: "Finance Manager",
      desc: "Architects inclusive capital strategies for high-growth MSMEs"
    },
    {
      name: "Josef Jockel",
      role: "Senior Consultant",
      desc: "Shapes enterprise-grade governance and treasury models"
    },
    {
      name: "Ziska Martha",
      role: "Business Advisor",
      desc: "Guides founders through expansion, mergers, and modernisation"
    },
    {
      name: "Adam Florian",
      role: "Project Manager",
      desc: "Leads omnichannel transformation programs end-to-end"
    }
  ];

  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const accentParallax = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <div className="about-page about-new-layout">
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
                  <h1 className="display-3 fw-bold mb-4">About Us</h1>
                  <p className="lead fs-5">Built a stong Finance for  solutions</p>
                </motion.div>
              </div>
            </section>

      <section className="about-intro py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <motion.div
                className="about-intro-panel"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&q=80"
                  alt="Lakshmithra culture"
                  className="img-fluid rounded-5"
                />
                <div className="about-intro-overlay">
                  <p className="mb-0">Since 2000</p>
                  <h5 className="mb-0">Finance that feels personal</h5>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="section-tag">Our Story</p>
                <h2 className="fw-bold mb-4" style={{ color: "#003B6D" }}>
                  Built on empathy, scaled with intelligence
                </h2>
                <p className="text-muted mb-3">
                  We started as a neighborhood lender with radical transparency. Today we operate as a national partner powering MSMEs, households, and new-age founders without losing the warmth of our first branch.
                </p>
                <p className="text-muted mb-4">
                  Embedded research pods, behavioural science, and community insights inspire every improvement sprint.
                </p>
                <div className="about-story-points">
                  {[
                    "Hyperlocal field teams map real needs before designing offers",
                    "Dedicated experience lab tests every message, form, and flow",
                    "Quarterly impact reviews ensure inclusion goals stay on track"
                  ].map((item) => (
                    <div key={item} className="d-flex gap-3">
                      <Icons.Check size={20} style={{ color: "#FFA500", flexShrink: 0 }} />
                      <span className="text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-signature py-5">
        <div className="container">
          <SectionTitle
            subtitle="Signature DNA"
            title="What makes us distinctly Lakshmithra"
            description="Every discipline—design, credit, service, technology—comes together to create experiences people recommend."
          />
          <div className="row g-4">
            {signatureThemes.map((item, index) => {
              const IconComponent = Icons[item.icon];
              return (
                <motion.div
                  key={item.title}
                  className="col-lg-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="about-signature-card">
                    <div className="signature-icon">
                      {IconComponent && <IconComponent size={30} />}
                    </div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted">{item.desc}</p>
                    <span className="signature-metric">{item.metric}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-culture-band position-relative overflow-hidden">
        <motion.div className="about-culture-parallax" style={{ y: heroParallax }} />
        <div className="container position-relative">
          <SectionTitle
            subtitle="Culture Stack"
            title="Systems that keep us future-ready"
            description="Scroll-linked bands highlight how we operationalise purpose."
          />
          <div className="row g-4">
            {culturePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="col-lg-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="about-culture-card" style={{ borderColor: pillar.accent }}>
                  <span className="pillar-index">0{index + 1}</span>
                  <h5 className="fw-bold">{pillar.title}</h5>
                  <p className="text-white mb-0">{pillar.detail}</p>
                  <div className="pillar-progress">
                    <span style={{ backgroundColor: pillar.accent }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values py-5">
        <div className="container">
          <SectionTitle
            subtitle="Our Values"
            title="Principles with presence"
            description="Tiles pulse softly to reinforce the anchors that guide every interaction."
          />
          <div className="row g-4">
            {values.map((value, index) => {
              const IconComponent = Icons[value.icon];
              return (
                <motion.div
                  key={value.title}
                  className="col-lg-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="about-value-card">
                    <div className="about-value-icon">
                      {IconComponent && <IconComponent size={28} />}
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">{value.title}</h5>
                      <p className="text-muted mb-0">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-journey py-5">
        <div className="container">
          <SectionTitle
            subtitle="Journey"
            title="Moments that shaped us"
            description="Milestones animate upward, mirroring the hero's parallax rhythm."
          />
          <div className="timeline-grid">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="timeline-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="timeline-marker">{item.year}</span>
                <p className="mb-0">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team py-5">
        <div className="container">
          <SectionTitle
            subtitle="Leadership"
            title="People who keep us bold"
            description="Cards tilt gently on hover, echoing the parallax-driven hero."
          />
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="about-team-card">
                  <div className="team-avatar">
                    <Icons.User size={56} />
                  </div>
                  <h5 className="fw-bold mb-1">{member.name}</h5>
                  <p className="text-warning fw-semibold mb-2" style={{ fontSize: "0.9rem" }}>
                    {member.role}
                  </p>
                  <p className="text-muted small mb-0">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="about-cta text-white position-relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0, 59, 109, 0.95), rgba(0, 27, 51, 0.92)), url(https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <motion.div className="about-cta-parallax" style={{ y: accentParallax }} />
        <div className="container text-center position-relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="hero-eyebrow text-uppercase mb-3">Next step</p>
            <h2 className="display-5 fw-bold mb-4">Grow with a partner who moves at your pace</h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: "640px" }}>
              Experience the same parallax energy from our pages inside our boardrooms—transparent, dynamic, and relentlessly customer-first.
            </p>
            <div className="d-flex gap-3 flex-wrap justify-content-center">
              <Link
                to="/contact"
                className="btn btn-lg px-5 py-3 shadow"
                style={{ backgroundColor: "#FFA500", color: "white", fontWeight: 600, border: "none", borderRadius: "12px" }}
              >
                Connect With Us
              </Link>
              <Link
                to="/services"
                className="btn btn-lg px-5 py-3"
                style={{ backgroundColor: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.7)", fontWeight: 600, borderRadius: "12px" }}
              >
                View Offerings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
