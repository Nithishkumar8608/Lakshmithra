import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowLeft, CheckCircle, FileText, UserCheck } from "lucide-react";
import servicesData from '../data/servicesData.json';

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

  // Remove TypeScript type casting
  const IconComponent = Icons[service.icon];

  return (
    <div className="service-detail-page">
      {/* HERO SECTION */}
      <section className="page-hero bg-primary text-white py-5">
        <div
          className="container"
          style={{ paddingTop: "60px", paddingBottom: "60px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services" className="btn btn-outline-light mb-4">
              <ArrowLeft size={20} className="me-2" />
              Back to Services
            </Link>

            <div className="d-flex align-items-center gap-4 mb-3">
              <div className="icon-wrapper bg-white bg-opacity-10 rounded-3 p-3">
                {IconComponent && (
                  <IconComponent size={48} className="text-white" />
                )}
              </div>
              <h1 className="display-4 fw-bold mb-0">{service.title}</h1>
            </div>

            <p className="lead">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section
        className="py-5"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="container">
          <div className="row g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="fw-bold mb-4">About This Loan</h2>
                <p className="text-muted mb-5">{service.fullDescription}</p>

                {/* FEATURES */}
                <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <CheckCircle className="text-primary" size={28} />
                  Key Features
                </h3>

                <ul className="list-unstyled mb-5">
                  {service.features.map((feature, index) => (
                    <li key={index} className="mb-3 d-flex align-items-start">
                      <span
                        className="badge bg-primary rounded-circle me-3 mt-1"
                        style={{ width: "8px", height: "8px" }}
                      ></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* ELIGIBILITY */}
                <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <UserCheck className="text-primary" size={28} />
                  Eligibility Criteria
                </h3>

                <ul className="list-unstyled mb-5">
                  {service.eligibility.map((criteria, index) => (
                    <li key={index} className="mb-3 d-flex align-items-start">
                      <span
                        className="badge bg-secondary rounded-circle me-3 mt-1"
                        style={{ width: "8px", height: "8px" }}
                      ></span>
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>

                {/* DOCUMENTS */}
                <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <FileText className="text-primary" size={28} />
                  Required Documents
                </h3>

                <ul className="list-unstyled">
                  {service.documents.map((document, index) => (
                    <li key={index} className="mb-3 d-flex align-items-start">
                      <span className="badge bg-primary bg-opacity-10 text-primary rounded me-3 px-2 py-1 small">
                        {index + 1}
                      </span>
                      <span>{document}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky-top"
                style={{ top: "100px" }}
              >
                {/* QUICK APPLY CARD */}
                <div className="card border-0 shadow-sm rounded-3">
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-4">Quick Apply</h4>
                    <p className="text-muted mb-4">
                      Ready to get started? Apply now and get approval within 48
                      hours!
                    </p>

                    <Link
                      to="/contact"
                      className="btn btn-primary w-100 mb-3 py-3"
                    >
                      Apply Now
                    </Link>

                    <Link
                      to="/calculator"
                      className="btn btn-outline-primary w-100 py-3"
                    >
                      Calculate EMI
                    </Link>
                  </div>
                </div>

                {/* HELP CARD */}
                <div className="card border-0 shadow-sm rounded-3 mt-4">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">Need Help?</h5>
                    <p className="text-muted small mb-3">
                      Our experts are here to assist you
                    </p>

                    <div className="d-flex flex-column gap-2">
                      <a
                        href="tel:+919876543210"
                        className="btn btn-outline-primary btn-sm"
                      >
                        Call: +91 98765 43210
                      </a>

                      <a
                        href="mailto:info@lakshmithrafinance.com"
                        className="btn btn-outline-primary btn-sm"
                      >
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
