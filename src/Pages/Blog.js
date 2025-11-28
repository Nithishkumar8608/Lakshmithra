import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Blog.css";
import SectionTitle from "../Component/SectionTitle";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Personal Loans: A Complete Guide",
      excerpt:
        "Learn everything you need to know about personal loans, from eligibility criteria to repayment strategies.",
      author: "Rajesh Kumar",
      date: "March 15, 2024",
      category: "Personal Finance",
      image:
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "How to Build a Strong Credit Score",
      excerpt:
        "Discover practical tips to improve your credit score and maintain healthy financial standing.",
      author: "Priya Sharma",
      date: "March 10, 2024",
      category: "Credit Tips",
      image:
        "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "Gold Loans vs Personal Loans: Which is Right for You?",
      excerpt:
        "Compare the benefits and considerations of gold loans and personal loans to make an informed decision.",
      author: "Arun Patel",
      date: "March 5, 2024",
      category: "Loan Comparison",
      image:
        "https://images.pexels.com/photos/6289019/pexels-photo-6289019.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      title: "Smart Financial Planning for Small Businesses",
      excerpt:
        "Essential financial planning strategies to help your small business thrive in competitive markets.",
      author: "Meera Reddy",
      date: "February 28, 2024",
      category: "Business Finance",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      title: "Emergency Fund: Why You Need One",
      excerpt:
        "Understanding the importance of emergency funds and how to build one effectively for financial security.",
      author: "Vijay Singh",
      date: "February 20, 2024",
      category: "Savings",
      image:
        "https://images.pexels.com/photos/6289070/pexels-photo-6289070.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      title: "Tax Benefits on Loans: What You Should Know",
      excerpt:
        "Explore the various tax benefits available on different types of loans and how to maximize them.",
      author: "Anjali Mehta",
      date: "February 15, 2024",
      category: "Tax Planning",
      image:
        "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section 
        className="position-relative text-white py-5 d-flex align-items-center"
        style={{
          minHeight: "500px",
          background: "linear-gradient(rgba(0, 59, 109, 0.85), rgba(0, 59, 109, 0.8)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80) center/cover",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-3 fw-bold mb-4">Financial Insights & Blogs</h1>
            <p className="lead fs-5">
              Expert advice and tips to help you make informed financial decisions
            </p>
          </motion.div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <SectionTitle
            subtitle="Our Blogs"
            title="Latest Financial Insights"
            description="Stay informed with our expert articles and tips on personal finance, business growth, and loan management"
          />

          <div className="row g-4">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.id} 
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden"
                  style={{ transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 59, 109, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "250px" }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-100 h-100 object-fit-cover"
                      style={{ transition: "transform 0.3s ease" }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />

                    <div className="position-absolute top-0 start-0 m-3">
                      <span 
                        className="badge"
                        style={{
                          backgroundColor: "#003B6D",
                          color: "white",
                          fontWeight: "600"
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {index === 0 && (
                      <div className="position-absolute top-0 end-0 m-3">
                        <span 
                          className="badge"
                          style={{
                            backgroundColor: "#FFA500",
                            color: "white",
                            fontWeight: "600"
                          }}
                        >
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title mb-3 fw-bold" style={{ color: "#003B6D" }}>
                      {post.title}
                    </h5>

                    <p className="card-text text-muted mb-3 flex-grow-1">
                      {post.excerpt}
                    </p>

                    <div className="d-flex align-items-center text-muted small mb-3">
                      <div className="d-flex align-items-center me-3">
                        <User size={14} className="me-1" style={{ color: "#FFA500" }} />
                        <span>{post.author}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <Calendar size={14} className="me-1" style={{ color: "#FFA500" }} />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn d-flex align-items-center justify-content-center fw-semibold"
                      style={{
                        backgroundColor: "#003B6D",
                        color: "white",
                        borderRadius: "6px"
                      }}
                    >
                      Read More <ArrowRight size={18} className="ms-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section 
        className="py-5 text-white"
        style={{
          backgroundColor: "#003B6D",
          paddingTop: "80px",
          paddingBottom: "80px"
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="row align-items-center g-5"
          >
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-4">Stay Updated</h2>
              <p className="lead">
                Subscribe to our newsletter and get latest financial tips, insights, and exclusive offers delivered to your inbox.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body p-4">
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control rounded-3"
                        placeholder="Enter your email address"
                        style={{ padding: "12px 16px", borderColor: "#003B6D" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-lg w-100 fw-bold"
                      style={{
                        backgroundColor: "#003B6D",
                        color: "white",
                        borderRadius: "8px",
                        border: "none"
                      }}
                    >
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      {/* <section
        className="py-5 text-white"
        style={{
          backgroundColor: "#f8f9fa",
          paddingTop: "80px",
          paddingBottom: "80px"
        }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="display-4 fw-bold mb-4" style={{ color: "#003B6D" }}>
              Ready to Achieve Your Financial Goals?
            </h2>

            <p className="lead mb-5 mx-auto" style={{ maxWidth: "600px", color: "#666" }}>
              Get in touch with our expert team and start your journey to financial freedom today!
            </p>

            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link
                to="/contact"
                className="btn btn-lg px-5 py-3 shadow"
                style={{
                  backgroundColor: "#003B6D",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "8px",
                  textDecoration: "none"
                }}
              >
                Get Started
              </Link>

              <Link
                to="/services"
                className="btn btn-lg px-5 py-3 shadow-sm"
                style={{
                  backgroundColor: "#FFA500",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: "none"
                }}
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}

export default Blog;
