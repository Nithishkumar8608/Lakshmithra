import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Search } from 'lucide-react';
import SectionTitle from '../Component/SectionTitle';
import jobsData from '../data/jobsData.json'; 

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [locationFilter, setLocationFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const locations = ['All', ...new Set(jobsData.map(job => job.location))];
  const types = ['All', ...new Set(jobsData.map(job => job.type))];

  const filteredJobs = jobsData.filter(job => {
    const matchesLocation = locationFilter === 'All' || job.location === locationFilter;
    const matchesType = typeFilter === 'All' || job.type === typeFilter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesLocation && matchesType && matchesSearch;
  });

  const selectedJobData = jobsData.find(job => job.id === selectedJob);

  return (
    <div className="career-page">
      
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero bg-primary text-white py-5">
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Briefcase size={64} className="mb-3" />
            <h1 className="display-3 fw-bold mb-3">Join Our Team</h1>
            <p className="lead">Build your career with India's leading finance company</p>
          </motion.div>
        </div>
      </section>

      {/* ===== JOB FILTERS + JOB LIST ===== */}
      <section className="py-5" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          
          <SectionTitle
            subtitle="Current Openings"
            title="Explore Career Opportunities"
            description="Find your perfect role and become part of our growing team"
          />

          {/* FILTERS */}
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-end-0">
                  <Search size={20} />
                </span>

                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search jobs by title or department..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-3">
              <select
                className="form-select form-select-lg"
                value={locationFilter}
                onChange={e => setLocationFilter(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-lg-3">
              <select
                className="form-select form-select-lg"
                value={typeFilter}
                onChange={e => setTypeFilter(e.target.value)}
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ===== JOB LIST AND DETAILS ===== */}
          <div className="row g-4">

            {/* LEFT SIDE — JOB LIST */}
            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="jobs-list">
                  {filteredJobs.length === 0 ? (
                    <div className="text-center py-5">
                      <p className="text-muted">No jobs found matching your criteria</p>
                    </div>
                  ) : (
                    filteredJobs.map((job, index) => (
                      <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`job-card card border-0 shadow-sm rounded-3 mb-3 cursor-pointer ${
                          selectedJob === job.id ? 'border-primary border-2' : ''
                        }`}
                        onClick={() => setSelectedJob(job.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="card-body p-4">
                          <h5 className="fw-bold mb-2">{job.title}</h5>
                          <p className="text-muted small mb-3">{job.department}</p>

                          <div className="d-flex flex-wrap gap-2 small">
                            <span className="badge bg-light text-dark">
                              <MapPin size={14} className="me-1" />
                              {job.location}
                            </span>

                            <span className="badge bg-light text-dark">
                              <Briefcase size={14} className="me-1" />
                              {job.type}
                            </span>

                            <span className="badge bg-light text-dark">
                              <Clock size={14} className="me-1" />
                              {job.experience}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE — JOB DETAILS */}
            <div className="col-lg-7">
              <motion.div
                key={selectedJob}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky-top"
                style={{ top: '100px' }}
              >
                {selectedJobData ? (
                  <div className="job-detail bg-white rounded-3 shadow-sm p-5">

                    <div className="mb-4">
                      <h2 className="fw-bold mb-2">{selectedJobData.title}</h2>
                      <p className="text-muted mb-3">{selectedJobData.department}</p>

                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-primary">
                          <MapPin size={14} className="me-1" />
                          {selectedJobData.location}
                        </span>
                        <span className="badge bg-primary">
                          <Briefcase size={14} className="me-1" />
                          {selectedJobData.type}
                        </span>
                        <span className="badge bg-primary">
                          <Clock size={14} className="me-1" />
                          {selectedJobData.experience}
                        </span>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3">Job Description</h5>
                      <p className="text-muted">{selectedJobData.description}</p>
                    </div>

                    {/* RESPONSIBILITIES */}
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3">Key Responsibilities</h5>
                      <ul className="list-unstyled">
                        {selectedJobData.responsibilities.map((resp, index) => (
                          <li key={index} className="mb-2 d-flex align-items-start">
                            <span
                              className="badge bg-primary rounded-circle me-2 mt-1"
                              style={{ width: '6px', height: '6px' }}
                            ></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* QUALIFICATIONS */}
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3">Qualifications</h5>
                      <ul className="list-unstyled">
                        {selectedJobData.qualifications.map((qual, index) => (
                          <li key={index} className="mb-2 d-flex align-items-start">
                            <span
                              className="badge bg-secondary rounded-circle me-2 mt-1"
                              style={{ width: '6px', height: '6px' }}
                            ></span>
                            <span>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* APPLY BUTTON */}
                    <button
                      className="btn btn-primary btn-lg w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#applyModal"
                    >
                      Apply for this Position
                    </button>
                  </div>
                ) : (
                  <div className="bg-light rounded-3 p-5 text-center">
                    <Briefcase size={64} className="text-muted mb-3" />
                    <h4 className="text-muted">Select a job to view details</h4>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY MODAL */}
      <div className="modal fade" id="applyModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h4 className="modal-title fw-bold">Apply for Position</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body p-4">
              
              <form>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Full Name *</label>
                    <input type="text" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email *</label>
                    <input type="email" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone *</label>
                    <input type="tel" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Total Experience (years) *</label>
                    <input type="number" className="form-control" required />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Upload Resume (PDF) *</label>
                    <input type="file" className="form-control" accept=".pdf" required />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Cover Letter</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Tell us why you're a great fit for this role..."
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      Submit Application
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Career;