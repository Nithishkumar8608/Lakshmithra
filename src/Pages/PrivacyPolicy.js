import React from "react";
import { Shield } from "lucide-react";

function PrivacyPolicy() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-primary text-white py-5">
        <div className="container py-5 text-center">
          <div className="d-inline-flex align-items-center justify-content-center bg-white bg-opacity-10 rounded-circle p-3 mb-4">
            <Shield size={48} />
          </div>
          <h1 className="display-4 fw-bold mb-3">Privacy Policy</h1>
          <p className="lead">Your privacy is important to us</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  
                  {/* Last Updated */}
                  <p className="text-muted mb-4">
                    <strong>Last Updated:</strong> March 1, 2024
                  </p>

                  {/* 1. Introduction */}
                  <div className="mb-5">
                    <h3 className="mb-3">1. Introduction</h3>
                    <p className="text-muted lh-lg">
                      Lakshmithra Finance ("we," "our," or "us") is committed to protecting your privacy. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                      when you visit our website or use our services. If you do not agree with the terms of this 
                      policy, please do not access the site.
                    </p>
                  </div>

                  {/* 2. Information We Collect */}
                  <div className="mb-5">
                    <h3 className="mb-3">2. Information We Collect</h3>
                    <p className="text-muted lh-lg">
                      We may collect information about you in a variety of ways, including:
                    </p>
                    <ul className="text-muted lh-lg">
                      <li>Personal Data: Name, email, phone number, address</li>
                      <li>Financial Information: Income details, credit history, loan data</li>
                      <li>Identity Verification: PAN, Aadhaar, government IDs</li>
                      <li>Technical Data: IP address, browser type, device info</li>
                    </ul>
                  </div>

                  {/* 3. How We Use Your Information */}
                  <div className="mb-5">
                    <h3 className="mb-3">3. How We Use Your Information</h3>
                    <p className="text-muted lh-lg">
                      We use your information for:
                    </p>
                    <ul className="text-muted lh-lg">
                      <li>Loan processing and verification</li>
                      <li>Identity and fraud prevention</li>
                      <li>Communication and customer support</li>
                      <li>Legal and regulatory compliance</li>
                      <li>Improving services and website performance</li>
                      <li>Marketing communications (with consent)</li>
                    </ul>
                  </div>

                  {/* 4. Disclosure of Your Information */}
                  <div className="mb-5">
                    <h3 className="mb-3">4. Disclosure of Your Information</h3>
                    <p className="text-muted lh-lg">
                      We may share your information in the following cases:
                    </p>
                    <ul className="text-muted lh-lg">
                      <li>With banks, NBFCs, and credit bureaus</li>
                      <li>With regulatory authorities (as required)</li>
                      <li>With third-party service providers</li>
                      <li>During mergers, acquisitions, or business transfers</li>
                    </ul>
                  </div>

                  {/* 5. Security */}
                  <div className="mb-5">
                    <h3 className="mb-3">5. Security of Your Information</h3>
                    <p className="text-muted lh-lg">
                      We use advanced security measures to protect your data, but no system is 100% secure. 
                      We recommend you also take precautions when sharing sensitive information online.
                    </p>
                  </div>

                  {/* 6. Your Rights */}
                  <div className="mb-5">
                    <h3 className="mb-3">6. Your Rights</h3>
                    <p className="text-muted lh-lg">
                      You have the right to:
                    </p>
                    <ul className="text-muted lh-lg">
                      <li>Access your data</li>
                      <li>Request corrections</li>
                      <li>Request data deletion</li>
                      <li>Withdraw marketing consent</li>
                      <li>File complaints with regulators</li>
                    </ul>
                  </div>

                  {/* 7. Cookies */}
                  <div className="mb-5">
                    <h3 className="mb-3">7. Cookies and Tracking</h3>
                    <p className="text-muted lh-lg">
                      We may use cookies and tracking technologies for analytics and performance. 
                      You can disable cookies from your browser settings.
                    </p>
                  </div>

                  {/* 8. Changes */}
                  <div className="mb-5">
                    <h3 className="mb-3">8. Changes to This Privacy Policy</h3>
                    <p className="text-muted lh-lg">
                      We may update this policy as needed. Any changes will be posted on this page.
                    </p>
                  </div>

                  {/* 9. Contact */}
                  <div className="mb-5">
                    <h3 className="mb-3">9. Contact Us</h3>
                    <p className="text-muted lh-lg">
                      For questions or concerns, contact us:
                    </p>
                    <div className="bg-light rounded p-3">
                      <p className="mb-2"><strong>Lakshmithra Finance</strong></p>
                      <p className="mb-2">123 Finance Street, Business District</p>
                      <p className="mb-2">City - 500001</p>
                      <p className="mb-2">Email: privacy@lakshmithrafinance.com</p>
                      <p className="mb-0">Phone: +91 1234567890</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
