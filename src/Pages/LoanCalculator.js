import { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Calculator, IndianRupee } from 'lucide-react';
// import SectionTitle from '../Component/SectionTitle';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(36);

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const numberOfMonths = tenure;

    const emi =
      (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths)) /
      (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);

    const totalAmount = emi * numberOfMonths;
    const totalInterest = totalAmount - principal;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
    };
  };

  const results = calculateEMI();

  const chartData = [
    { name: 'Principal Amount', value: loanAmount, color: '#003B6D' },
    { name: 'Total Interest', value: results.totalInterest, color: '#FFA500' },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="calculator-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero bg-primary text-white py-5">
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Calculator size={64} className="mb-3" />
            <h1 className="display-3 fw-bold mb-3">Loan EMI Calculator</h1>
            <p className="lead">Calculate your monthly EMI and plan your finances better</p>
          </motion.div>
        </div>
      </section>

      {/* ===== CALCULATOR SECTION ===== */}
      <section className="py-5" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="row g-5">
            {/* ===== LEFT SIDE FORM ===== */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3 shadow-sm p-4"
              >
                <h3 className="fw-bold mb-4">Loan Details</h3>

                {/* Loan Amount */}
                <div className="mb-4">
                  <label className="form-label fw-semibold d-flex justify-content-between">
                    <span>Loan Amount</span>
                    <span className="text-primary">{formatCurrency(loanAmount)}</span>
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="50000"
                    max="10000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between small text-muted">
                    <span>₹50K</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="mb-4">
                  <label className="form-label fw-semibold d-flex justify-content-between">
                    <span>Interest Rate (p.a.)</span>
                    <span className="text-primary">{interestRate}%</span>
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="5"
                    max="20"
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between small text-muted">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div className="mb-4">
                  <label className="form-label fw-semibold d-flex justify-content-between">
                    <span>Loan Tenure</span>
                    <span className="text-primary">
                      {tenure} months ({(tenure / 12).toFixed(1)} years)
                    </span>
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="6"
                    max="360"
                    step="6"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between small text-muted">
                    <span>6 months</span>
                    <span>30 years</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ===== RIGHT SIDE RESULTS ===== */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3 shadow-sm p-4 h-100"
              >
                <h3 className="fw-bold mb-4">Calculation Results</h3>

                {/* EMI Card */}
                <div className="result-card bg-primary text-white rounded-3 p-4 mb-4">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <IndianRupee size={24} />
                    <h6 className="mb-0 text-uppercase small">Monthly EMI</h6>
                  </div>
                  <h2 className="display-4 fw-bold mb-0">{formatCurrency(results.emi)}</h2>
                </div>

                {/* Data Cards */}
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="card border-0 bg-light">
                      <div className="card-body p-3">
                        <p className="small text-muted mb-1">Principal Amount</p>
                        <h5 className="fw-bold mb-0">{formatCurrency(loanAmount)}</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="card border-0 bg-light">
                      <div className="card-body p-3">
                        <p className="small text-muted mb-1">Total Interest</p>
                        <h5 className="fw-bold mb-0 text-secondary">
                          {formatCurrency(results.totalInterest)}
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card border-0 bg-light">
                      <div className="card-body p-3">
                        <p className="small text-muted mb-1">Total Amount Payable</p>
                        <h5 className="fw-bold mb-0">{formatCurrency(results.totalAmount)}</h5>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="chart-container" style={{ height: '250px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(entry) => `${entry.name}: ${formatCurrency(entry.value)}`}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ===== EMI Formula Section ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-5 bg-light rounded-3 p-4"
          >
            <h4 className="fw-bold mb-3">Understanding EMI Calculation</h4>
            <p className="text-muted mb-3">
              EMI (Equated Monthly Installment) is calculated using the following formula:
            </p>

            <div className="bg-white rounded p-3 mb-3 border">
              <code>EMI = [P × R × (1 + R)^N] / [(1 + R)^N - 1]</code>
            </div>

            <p className="text-muted mb-2">Where:</p>
            <ul className="text-muted">
              <li><strong>P</strong> = Principal loan amount</li>
              <li><strong>R</strong> = Monthly interest rate (Annual rate / 12 / 100)</li>
              <li><strong>N</strong> = Loan tenure in months</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LoanCalculator;
