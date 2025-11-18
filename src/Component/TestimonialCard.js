import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialCard = ({ name, designation, content, rating, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-100"
    >
      <div className="card h-100 border-0 shadow-sm rounded-3">
        <div className="card-body p-4">

          {/* Rating Stars */}
          <div className="d-flex mb-3">
            {[...Array(rating)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className="text-warning"
                fill="currentColor"
              />
            ))}
          </div>

          {/* Content */}
          <p className="card-text text-muted mb-4 fst-italic">
            "{content}"
          </p>

          {/* User Details */}
          <div className="d-flex align-items-center gap-3">
            <div
              className="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-semibold"
              style={{ width: "50px", height: "50px" }}
            >
              {image}
            </div>

            <div>
              <h6 className="mb-0 fw-semibold">{name}</h6>
              <small className="text-muted">{designation}</small>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
