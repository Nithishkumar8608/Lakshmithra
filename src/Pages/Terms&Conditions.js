import React from "react";
import { FileText } from "lucide-react";
import "./Terms&conditions.css"; // optional

function TermsConditions() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="terms-hero text-white py-5">
        <div className="container py-5 text-center">
          <div className="icon-circle mb-4">
            <FileText size={48} />
          </div>
          <h1 className="display-4 fw-bold mb-3">Terms & Conditions</h1>
          <p className="lead">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">

                  <p className="text-muted mb-4">
                    <strong>Last Updated:</strong> March 1, 2024
                  </p>

                  {/* 1 */}
                  <div className="mb-5">
                    <h3 className="mb-3">1. Acceptance of Terms</h3>
                    <p className="text-muted lh-lg">
                      By accessing and using the services of Lakshmithra Finance,
                      you accept and agree to be bound by these terms. If you do
                      not agree, please do not use our services.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="mb-5">
                    <h3 className="mb-3">2. Loan Application Process</h3>
                    <p className="text-muted lh-lg">
                      When applying for a loan through Lakshmithra Finance:
                    </p>
                    <ul className="text-muted lh-lg">
                      <li>All information provided must be accurate and complete</li>
                      <li>False or incomplete information may lead to rejection</li>
                      <li>Approval depends on eligibility & credit verification</li>
                      <li>We may reject applications without stating reasons</li>
                      <li>Processing fees are non-refundable</li>
                    </ul>
                  </div>

                  {/* 3 */}
                  <div className="mb-5">
                    <h3 className="mb-3">3. Interest Rates and Charges</h3>
                    <p className="text-muted lh-lg">
                      Interest rates and additional charges:
                    </p>
                    <ul className="text-muted lh-lg">
                      <li>Rates depend on tenure, amount & credit score</li>
                      <li>Rates may change based on RBI or market conditions</li>
                      <li>All charges will be disclosed upfront</li>
                      <li>Taxes are applicable as per law</li>
                    </ul>
                  </div>

                  {/* 4 */}
                  <div className="mb-5">
                    <h3 className="mb-3">4. Repayment Terms</h3>
                    <p className="text-muted lh-lg">
                      Borrowers must:
                    </p>
                    <ul className="text-muted lh-lg">
                      <li>Pay EMI on time as per schedule</li>
                      <li>Maintain sufficient bank balance</li>
                      <li>Update us on financial or contact changes</li>
                      <li>Pay penalty on late payment</li>
                      <li>Follow lock-in period rules</li>
                    </ul>
                  </div>

                  {/* 5 */}
                  <div className="mb-5">
                    <h3 className="mb-3">5. Default and Consequences</h3>
                    <p className="text-muted lh-lg">If borrower defaults:</p>
                    <ul className="text-muted lh-lg">
                      <li>Penalty charges will apply</li>
                      <li>Credit score may be negatively impacted</li>
                      <li>Information shared with credit bureaus</li>
                      <li>Legal recovery may be initiated</li>
                      <li>Collateral may be seized</li>
                    </ul>
                  </div>

                  {/* 6 */}
                  <div className="mb-5">
                    <h3 className="mb-3">6. Collateral and Security</h3>
                    <p className="text-muted lh-lg">
                      For secured loans, collateral remains with the company until
                      full repayment. Natural damages or force-majeure events are
                      not the company’s liability.
                    </p>
                  </div>

                  {/* 7 */}
                  <div className="mb-5">
                    <h3 className="mb-3">7. Prepayment and Foreclosure</h3>
                    <p className="text-muted lh-lg">Prepayment requires:</p>
                    <ul className="text-muted lh-lg">
                      <li>Foreclosure charges (if applicable)</li>
                      <li>Completion of lock-in period</li>
                      <li>Written notice</li>
                      <li>Clearing all outstanding dues</li>
                    </ul>
                  </div>

                  {/* 8 */}
                  <div className="mb-5">
                    <h3 className="mb-3">8. Privacy and Data Protection</h3>
                    <p className="text-muted lh-lg">
                      Your data will be handled per our Privacy Policy and may be
                      shared for verification and regulatory requirements.
                    </p>
                  </div>

                  {/* 9 */}
                  <div className="mb-5">
                    <h3 className="mb-3">9. Dispute Resolution</h3>
                    <p className="text-muted lh-lg">
                      Disputes will be resolved through arbitration under the law
                      and jurisdiction of our head office city.
                    </p>
                  </div>

                  {/* 10 */}
                  <div className="mb-5">
                    <h3 className="mb-3">10. Modifications to Terms</h3>
                    <p className="text-muted lh-lg">
                      We may modify terms anytime. Continued use means acceptance
                      of updated terms.
                    </p>
                  </div>

                  {/* 11 */}
                  <div className="mb-5">
                    <h3 className="mb-3">11. Governing Law</h3>
                    <p className="text-muted lh-lg">
                      Governed by Indian law. Legal matters fall under jurisdiction
                      of our registered office city.
                    </p>
                  </div>

                  {/* 12 */}
                  <div className="mb-5">
                    <h3 className="mb-3">12. Contact Information</h3>
                    <p className="text-muted lh-lg">
                      For queries related to these terms:
                    </p>
                    <div className="bg-light rounded p-3">
                      <p className="mb-2"><strong>Lakshmithra Finance</strong></p>
                      <p className="mb-2">123 Finance Street, Business District</p>
                      <p className="mb-2">City - 500001</p>
                      <p className="mb-2">Email: legal@lakshmithrafinance.com</p>
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

export default TermsConditions;
