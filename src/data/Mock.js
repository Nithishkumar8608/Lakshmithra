

export const services = [
  {
    id: 'business-loan',
    name: 'Business Loan',
    icon: 'Building2',
    shortDesc: 'Fuel your business growth with flexible financing solutions tailored to your needs.',
    benefits: [
      'Quick approval within 48 hours',
      'Flexible repayment options up to 5 years',
      'Loan amounts from ₹1 Lakh to ₹50 Crores',
      'Minimal documentation required',
      'Competitive interest rates',
      'No prepayment penalties'
    ],
    eligibility: [
      'Business operational for at least 2 years',
      'Annual turnover minimum ₹10 Lakhs',
      'Good credit score (650+)',
      'Age between 21-65 years',
      'Valid business registration'
    ],
    documents: [
      'Business registration certificate',
      'PAN card and Aadhaar card',
      'Bank statements (last 6 months)',
      'ITR for last 2 years',
      'Business address proof',
      'Financial statements (Balance sheet, P&L)'
    ],
    interestRate: '10.5% - 18% per annum',
    howToApply: [
      'Fill out the online application form',
      'Submit required documents',
      'Our team will verify your details',
      'Get instant approval notification',
      'Loan amount disbursed within 48 hours'
    ]
  },

  {
    id: 'personal-loan',
    name: 'Personal Loan',
    icon: 'User',
    shortDesc: 'Get instant funds for your personal needs with minimal paperwork and fast approval.',
    benefits: [
      'Instant approval in 30 minutes',
      'Loan amounts from ₹50,000 to ₹25 Lakhs',
      'Tenure up to 5 years',
      'No collateral required',
      'Flexible EMI options',
      'Multi-purpose usage'
    ],
    eligibility: [
      'Age between 21-60 years',
      'Minimum monthly income ₹25,000',
      'Credit score 700+',
      'Employed (salaried or self-employed)',
      'Indian resident'
    ],
    documents: [
      'PAN card',
      'Aadhaar card',
      'Salary slips (last 3 months)',
      'Bank statements (last 6 months)',
      'Employment proof',
      'Residence proof'
    ],
    interestRate: '11% - 24% per annum',
    howToApply: [
      'Check eligibility online',
      'Complete the application form',
      'Upload required documents',
      'Get instant approval decision',
      'Receive funds in your account within 24 hours'
    ]
  },

  {
    id: 'gold-loan',
    name: 'Gold Loan',
    icon: 'Coins',
    shortDesc: 'Unlock the value of your gold with instant loans at attractive interest rates.',
    benefits: [
      'Instant loan approval',
      'Up to 75% of gold value',
      'Low interest rates starting 7.5%',
      'Flexible repayment options',
      'Safe and secure gold storage',
      'Part payment facility available'
    ],
    eligibility: [
      'Age 18 years and above',
      'Owner of gold jewelry/coins',
      'Valid identification proof',
      'Any employment status accepted'
    ],
    documents: [
      'PAN card',
      'Aadhaar card or Voter ID',
      'Passport size photographs',
      'Gold jewelry/coins for assessment'
    ],
    interestRate: '7.5% - 12% per annum',
    howToApply: [
      'Visit our nearest branch with gold',
      'Get instant gold valuation',
      'Submit KYC documents',
      'Receive loan amount immediately',
      'Gold stored securely with full insurance'
    ]
  },

  {
    id: 'vehicle-loan',
    name: 'Vehicle Loan',
    icon: 'Car',
    shortDesc: 'Drive your dream vehicle home with affordable EMIs and quick loan approval.',
    benefits: [
      'Up to 90% on-road price financing',
      'Tenure up to 7 years',
      'Competitive interest rates',
      'Minimal down payment',
      'Quick processing within 3 days',
      'Free insurance assistance'
    ],
    eligibility: [
      'Age between 21-65 years',
      'Minimum monthly income ₹20,000',
      'Credit score 650+',
      'Valid driving license',
      'Stable employment'
    ],
    documents: [
      'PAN card and Aadhaar card',
      'Driving license',
      'Income proof (salary slips/ITR)',
      'Bank statements (last 6 months)',
      'Address proof',
      'Vehicle quotation/proforma invoice'
    ],
    interestRate: '8.5% - 14% per annum',
    howToApply: [
      'Choose your vehicle',
      'Apply online with documents',
      'Get pre-approval within 24 hours',
      'Complete documentation',
      'Drive home your vehicle'
    ]
  },

  {
    id: 'mortgage-loan',
    name: 'Mortgage Loan',
    icon: 'Home',
    shortDesc: 'Leverage your property value to access funds for any purpose with competitive rates.',
    benefits: [
      'High loan amounts up to ₹10 Crores',
      'Long tenure up to 20 years',
      'Lower interest rates',
      'Flexible end-use',
      'Balance transfer facility',
      'Top-up loan available'
    ],
    eligibility: [
      'Age between 21-70 years',
      'Property owner with clear title',
      'Stable income source',
      'Good credit history',
      'Property within approved locations'
    ],
    documents: [
      'Property ownership documents',
      'PAN card and Aadhaar card',
      'Income proof',
      'Bank statements (last 12 months)',
      'Property valuation report',
      'NOC from society/builder'
    ],
    interestRate: '9% - 15% per annum',
    howToApply: [
      'Submit property details online',
      'Get property valuation done',
      'Submit required documents',
      'Legal verification of property',
      'Loan disbursement after approval'
    ]
  },

  {
    id: 'home-loan',
    name: 'Home Loan',
    icon: 'Building',
    shortDesc: 'Turn your dream home into reality with affordable home loans and tax benefits.',
    benefits: [
      'Up to 90% property value financing',
      'Tenure up to 30 years',
      'Tax benefits under Section 80C & 24',
      'Special rates for women borrowers',
      'Free property valuation',
      'Doorstep service available'
    ],
    eligibility: [
      'Age between 21-65 years',
      'Minimum annual income ₹3 Lakhs',
      'Credit score 750+',
      'Employed or self-employed',
      'Property in approved project'
    ],
    documents: [
      'PAN card and Aadhaar card',
      'Salary slips/ITR (last 2 years)',
      'Bank statements (last 6 months)',
      'Property documents',
      'Employer certificate',
      'Sanctioned building plan'
    ],
    interestRate: '8.5% - 11% per annum',
    howToApply: [
      'Check home loan eligibility',
      'Choose your property',
      'Submit loan application',
      'Property legal verification',
      'Loan sanction and disbursement'
    ]
  }
];

// Testimonials (JS version)
export const testimonials = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    content:
      'Lakshmithra Finance helped me expand my business with their quick business loan approval. The process was seamless and the team was very supportive throughout.',
    rating: 5
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Homemaker',
    content:
      "I got a gold loan within minutes for my daughter's education. The interest rates were very reasonable and the gold was kept safe. Highly recommend!",
    rating: 5
  },
  {
    id: '3',
    name: 'Arun Menon',
    role: 'Software Engineer',
    content:
      'Got my dream home with their home loan. The documentation was minimal and the entire process was transparent. Thank you Lakshmithra Finance!',
    rating: 5
  },
  {
    id: '4',
    name: 'Kavitha Reddy',
    role: 'Entrepreneur',
    content:
      'Their personal loan came through when I needed it the most. Fast approval, great rates, and excellent customer service. Truly a trusted partner!',
    rating: 5
  }
];

// Stats
export const stats = [
  { id: '1', value: '50,000+', label: 'Happy Customers' },
  { id: '2', value: '98%', label: 'Approval Rate' },
  { id: '3', value: '₹500+ Cr', label: 'Loan Amount Disbursed' },
  { id: '4', value: '10+ Years', label: 'Industry Experience' }
];

// Why Choose Us
export const whyChooseUs = [
  {
    id: '1',
    icon: 'Zap',
    title: 'Quick Approval',
    description: 'Get your loan approved within 48 hours with minimal documentation'
  },
  {
    id: '2',
    icon: 'Shield',
    title: 'Secure & Safe',
    description: 'Your data and assets are protected with bank-grade security'
  },
  {
    id: '3',
    icon: 'TrendingDown',
    title: 'Competitive Rates',
    description: 'Enjoy industry-leading interest rates and flexible repayment options'
  },
  {
    id: '4',
    icon: 'Users',
    title: 'Expert Support',
    description: '24/7 customer support to assist you at every step of your journey'
  }
];

// Company Values
export const companyValues = [
  {
    id: '1',
    icon: 'Shield',
    title: 'Security',
    description:
      'Your financial data and personal information are protected with highest security standards'
  },
  {
    id: '2',
    icon: 'Heart',
    title: 'Trust',
    description: 'Building long-term relationships based on transparency and reliability'
  },
  {
    id: '3',
    icon: 'Eye',
    title: 'Transparency',
    description: 'No hidden charges, clear terms, and honest communication at every step'
  },
  {
    id: '4',
    icon: 'Award',
    title: 'Excellence',
    description:
      'Committed to delivering exceptional service and financial solutions'
  }
];

// Process Steps
export const processSteps = [
  {
    id: '1',
    step: 'Step 1',
    title: 'Apply Online',
    description:
      'Fill out our simple online application form with your basic details'
  },
  {
    id: '2',
    step: 'Step 2',
    title: 'Document Verification',
    description:
      'Submit required documents and our team will verify them promptly'
  },
  {
    id: '3',
    step: 'Step 3',
    title: 'Loan Approval',
    description:
      'Get instant approval notification and loan sanction letter'
  },
  {
    id: '4',
    step: 'Step 4',
    title: 'Disbursement',
    description:
      'Receive the loan amount directly in your bank account'
  }
];
