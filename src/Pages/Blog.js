import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import "./Blog.css"; // (Optional CSS file if needed)

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
      <section className="blog-hero text-white py-5">
        <div className="container py-5 text-center">
          <h1 className="display-4 fw-bold mb-3">Financial Blogs</h1>
          <p className="lead">
            Expert advice and tips to help you make informed financial decisions
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-4">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div
                  className={`card border-0 shadow-sm h-100 blog-card ${
                    index === 0 ? "featured-card" : ""
                  }`}
                >
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "200px" }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-100 h-100 object-fit-cover"
                    />

                    <div className="position-absolute top-0 start-0 m-3">
                      <span className="badge bg-primary">{post.category}</span>
                    </div>

                    {index === 0 && (
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-warning text-dark">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-3">{post.title}</h5>

                    <p className="card-text text-muted mb-3 flex-grow-1">
                      {post.excerpt}
                    </p>

                    <div className="d-flex align-items-center text-muted small mb-3">
                      <div className="d-flex align-items-center me-3">
                        <User size={16} className="me-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <Calendar size={16} className="me-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                      onClick={() => {
                        // TODO: Navigate to individual blog post page
                        console.log(`Reading blog post: ${post.title}`);
                      }}
                    >
                      Read More <ArrowRight size={18} className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="blog-hero py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 text-white fw-bold mb-4">Stay Updated</h2>
              <p className="lead text-white">
                Subscribe to our newsletter and get financial tips delivered to
                your inbox.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                    >
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
