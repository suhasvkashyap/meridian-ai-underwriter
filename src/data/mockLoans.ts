export type LoanStatus = "Approved" | "Rejected" | "Needs More Info" | "Under Review";

export interface LoanApplication {
  id: string;
  businessName: string;
  businessType: string;
  yearsInOperation: number;
  annualRevenue: number;
  netIncome: number;
  ownerName: string;
  ownerCreditScore: number;
  debtToIncomeRatio: number;
  existingDebt: string;
  loanAmount: number;
  loanPurpose: string;
  loanTermYears: number;
  collateral: string;
  collateralValue: number;
  interestRateTier: string;
  dateSubmitted: string;
  status: LoanStatus;
  riskScore: number | null;
  riskFactors: string[];
  creditMemo: string;
  ragSources: string[];
  missingDocs?: string[];
}

export const loanApplications: LoanApplication[] = [
  // APPROVED (4)
  {
    id: "CL-2026-0847",
    businessName: "Pacific Ridge Construction LLC",
    businessType: "Construction & Engineering",
    yearsInOperation: 18,
    annualRevenue: 12500000,
    netIncome: 1750000,
    ownerName: "Robert Chen",
    ownerCreditScore: 780,
    debtToIncomeRatio: 1.8,
    existingDebt: "$2.1M term loan (Wells Fargo, matures 2028)",
    loanAmount: 3200000,
    loanPurpose: "Equipment Expansion",
    loanTermYears: 7,
    collateral: "Heavy construction equipment fleet + commercial warehouse",
    collateralValue: 4640000,
    interestRateTier: "Prime + 1.25%",
    dateSubmitted: "2026-02-12",
    status: "Approved",
    riskScore: 15,
    riskFactors: [
      "Strong debt-to-income ratio of 1.8x (well within policy limit of 3.5x)",
      "Consistent revenue growth: +15% CAGR over last 3 fiscal years",
      "Excellent owner credit score: 780 (exceeds minimum of 680)",
      "Collateral coverage at 145% of loan value (minimum 80% required)",
      "Industry sector (commercial construction) shows strong backlog and below-average default rates"
    ],
    creditMemo: `Policy Alignment: This application meets or exceeds all requirements under Fed Aura Capital's Commercial Lending Policy (Rev. 2025-Q4). All key metrics fall within acceptable parameters for the requested loan tier.

Financial Health: Pacific Ridge Construction demonstrates exceptionally strong financial fundamentals with 15% compound annual revenue growth over three fiscal years. Operating margins stand at 14.0%, with a robust current ratio of 2.8. Cash flow analysis indicates a projected DSCR of 2.6x, providing substantial debt service headroom well above the 1.25x minimum.

Market Position: The applicant operates in the commercial construction sector, which continues to benefit from infrastructure spending legislation and sustained demand in the Pacific Northwest region. The company holds active contracts with two municipal governments and a regional hospital system, providing $8.2M in contracted revenue visibility through Q2 2027.

Recommendation: Approve. The application presents a strong credit profile with diversified revenue streams, substantial collateral coverage, and favorable market positioning. Suggested terms: Prime + 1.25%, 7-year term with annual review.`,
    ragSources: [
      "Fed Aura Capital Commercial Lending Policy v2025-Q4 (Sections 2.1, 3.1, 4.2)",
      "Pacific Ridge Construction 10-K Filing — FY2025",
      "Pacific Ridge Construction Quarterly Financial Statements — Q1-Q4 2025",
      "Industry Risk Report — Associated General Contractors of America, Q4 2025",
      "Federal Reserve Beige Book — February 2026"
    ]
  },
  {
    id: "CL-2026-0891",
    businessName: "Greenfield Organic Foods Inc.",
    businessType: "Food Manufacturing & Distribution",
    yearsInOperation: 12,
    annualRevenue: 8700000,
    netIncome: 1218000,
    ownerName: "Maria Santos",
    ownerCreditScore: 755,
    debtToIncomeRatio: 2.1,
    existingDebt: "$1.4M equipment loan (Bank of America, matures 2027)",
    loanAmount: 2450000,
    loanPurpose: "Facility Expansion",
    loanTermYears: 10,
    collateral: "Manufacturing facility + organic certification inventory",
    collateralValue: 3920000,
    interestRateTier: "Prime + 1.50%",
    dateSubmitted: "2026-02-18",
    status: "Approved",
    riskScore: 22,
    riskFactors: [
      "Healthy debt-to-income ratio of 2.1x (within policy limit of 3.5x)",
      "Organic food sector experiencing 18% annual market growth",
      "Strong owner credit score: 755 (above 680 minimum)",
      "Collateral coverage at 160% of loan value (well above 80% minimum)",
      "12-year operating history demonstrates business stability and resilience"
    ],
    creditMemo: `Policy Alignment: This application satisfies all lending criteria under Fed Aura Capital's Commercial Lending Policy (Rev. 2025-Q4). The applicant's financial profile places this loan in the low-risk tier for food manufacturing sector lending.

Financial Health: Greenfield Organic Foods has maintained a strong growth trajectory with 12% compound annual revenue growth. The company's operating margin of 14.0% exceeds the sector median of 9.8%. Current ratio of 2.1 and quick ratio of 1.6 indicate healthy liquidity. Projected DSCR of 2.3x provides comfortable coverage above the 1.25x threshold.

Market Position: The organic food manufacturing sector continues to outperform conventional food categories with 18% annual growth. Greenfield holds USDA Organic and Non-GMO Project verified certifications, providing competitive differentiation. The company supplies 47 retail chains across four states with multi-year supply agreements.

Recommendation: Approve. Strong credit fundamentals, growing market position, and experienced management team present an attractive lending opportunity. Suggested terms: Prime + 1.50%, 10-year term with annual review.`,
    ragSources: [
      "Fed Aura Capital Commercial Lending Policy v2025-Q4 (Sections 2.1, 3.1)",
      "Greenfield Organic Foods 10-K Filing — FY2025",
      "Greenfield Organic Foods Quarterly Statements — Q1-Q4 2025",
      "Organic Trade Association Annual Industry Report 2025",
      "USDA Economic Research Service — Organic Market Overview Q4 2025"
    ]
  },
  {
    id: "CL-2026-0923",
    businessName: "Summit Healthcare Partners",
    businessType: "Healthcare Services",
    yearsInOperation: 9,
    annualRevenue: 15200000,
    netIncome: 2128000,
    ownerName: "Dr. Angela Morrison",
    ownerCreditScore: 810,
    debtToIncomeRatio: 1.4,
    existingDebt: "$3.2M commercial mortgage (Chase, matures 2031)",
    loanAmount: 4500000,
    loanPurpose: "Practice Acquisition",
    loanTermYears: 10,
    collateral: "Medical office buildings (2) + accounts receivable",
    collateralValue: 7200000,
    interestRateTier: "Prime + 1.00%",
    dateSubmitted: "2026-02-25",
    status: "Approved",
    riskScore: 18,
    riskFactors: [
      "Excellent debt-to-income ratio of 1.4x (well within policy limit of 3.5x)",
      "Healthcare services sector shows resilient demand with below-average default rates",
      "Outstanding owner credit score: 810 (significantly exceeds 680 minimum)",
      "Collateral coverage at 160% of loan value (minimum 80% required)",
      "Established contracts with three major regional hospital networks"
    ],
    creditMemo: `Policy Alignment: This application exceeds all requirements under Fed Aura Capital's Commercial Lending Policy (Rev. 2025-Q4). The applicant qualifies for preferred rate tier based on credit metrics and sector classification.

Financial Health: Summit Healthcare Partners demonstrates exceptional financial stability with 22% revenue growth over the past three fiscal years. Operating margins of 14.2% reflect efficient practice management. The current ratio of 2.4 and DSCR of 2.1x indicate strong capacity to service additional debt. Accounts receivable aging shows 94% collection within 60 days, consistent with well-managed healthcare billing operations.

Market Position: The healthcare services sector continues to show resilient demand driven by demographic trends and regional population growth. Summit holds established contracts with three major regional hospital networks—Providence Health, PeaceHealth, and MultiCare—providing diversified and predictable revenue streams. The planned acquisition of Cascade Medical Group would increase patient capacity by 35% and add two additional specialty service lines.

Recommendation: Approve. The application presents a strong credit profile with diversified revenue streams, adequate collateral, and favorable market positioning. Suggested terms: Prime + 1.00%, 10-year term with annual review.`,
    ragSources: [
      "Fed Aura Capital Commercial Lending Policy v2025-Q4 (Sections 2.1, 3.1, 4.2)",
      "Summit Healthcare Partners 10-K Filing — FY2025",
      "Summit Healthcare Partners Quarterly Statements — Q1-Q4 2025",
      "Bureau of Labor Statistics — Healthcare Employment Projections 2025-2030",
      "Federal Reserve Beige Book — February 2026"
    ]
  },
  {
    id: "CL-2026-0945",
    businessName: "Cornerstone Property Management",
    businessType: "Commercial Real Estate",
    yearsInOperation: 22,
    annualRevenue: 6800000,
    netIncome: 1020000,
    ownerName: "David Harrington",
    ownerCreditScore: 745,
    debtToIncomeRatio: 2.3,
    existingDebt: "$4.8M portfolio of commercial mortgages (various, staggered maturity)",
    loanAmount: 1800000,
    loanPurpose: "Property Renovation",
    loanTermYears: 5,
    collateral: "Class B office building, downtown Portland",
    collateralValue: 2700000,
    interestRateTier: "Prime + 1.75%",
    dateSubmitted: "2026-03-01",
    status: "Approved",
    riskScore: 28,
    riskFactors: [
      "Debt-to-income ratio of 2.3x remains within policy limit of 3.5x",
      "22-year operating history demonstrates long-term business viability",
      "Solid owner credit score: 745 (above 680 minimum)",
      "Collateral coverage at 150% of loan value (above 80% minimum)",
      "Renovation expected to increase property NOI by 25% upon completion"
    ],
    creditMemo: `Policy Alignment: This application meets all requirements under Fed Aura Capital's Commercial Lending Policy (Rev. 2025-Q4). While the applicant carries a more complex existing debt structure, overall leverage remains within acceptable parameters for seasoned commercial real estate operators.

Financial Health: Cornerstone Property Management has maintained stable cash flows over 22 years of continuous operations. Portfolio occupancy rates average 91%, above the regional market average of 84%. Operating margins of 15.0% reflect disciplined property management. The projected DSCR of 1.8x after the renovation loan provides adequate coverage. The renovation scope—HVAC modernization, lobby renovation, and fiber connectivity upgrades—is projected to increase the property's NOI by 25% and extend competitive positioning by 10+ years.

Market Position: The Portland commercial office market shows early recovery signals following post-pandemic adjustments. Class B properties with modern amenities are capturing tenants migrating from premium Class A space seeking cost optimization. Cornerstone's downtown location benefits from proximity to transit and recently approved mixed-use development projects.

Recommendation: Approve. Experienced operator with strong track record, adequate collateral, and sound renovation thesis. Suggested terms: Prime + 1.75%, 5-year term, draw schedule tied to renovation milestones.`,
    ragSources: [
      "Fed Aura Capital Commercial Lending Policy v2025-Q4 (Sections 2.1, 3.3, 5.1)",
      "Cornerstone Property Management Financial Statements — FY2023-FY2025",
      "CBRE Portland Office Market Report Q4 2025",
      "Multnomah County Property Tax Assessment Records 2025",
      "Federal Reserve Beige Book — February 2026"
    ]
  },
  // REJECTED (3)
  {
    id: "CL-2026-0862",
    businessName: "Bella Cucina Restaurant Group",
    businessType: "Casual Dining / Food Service",
    yearsInOperation: 6,
    annualRevenue: 2800000,
    netIncome: 86800,
    ownerName: "Anthony Russo",
    ownerCreditScore: 640,
    debtToIncomeRatio: 4.8,
    existingDebt: "$890K equipment loan + $340K line of credit (both current lender)",
    loanAmount: 1250000,
    loanPurpose: "New Location Expansion",
    loanTermYears: 7,
    collateral: "Commercial kitchen equipment",
    collateralValue: 780000,
    interestRateTier: "N/A — Declined",
    dateSubmitted: "2026-02-15",
    status: "Rejected",
    riskScore: 87,
    riskFactors: [
      "Debt-to-income ratio of 4.8x exceeds policy threshold of 3.5x",
      "Industry sector (casual dining) shows 23% increased default rate in current economic cycle",
      "Declining revenue trend: -12% YoY over last 3 fiscal years",
      "Insufficient collateral coverage: collateral covers only 62% of loan value (minimum 80% required)",
      "Owner credit score of 640 falls below the 680 minimum for loans exceeding $1M"
    ],
    creditMemo: `Policy Alignment Analysis: This application has been evaluated against Fed Aura Capital's Commercial Lending Policy (Rev. 2025-Q4). The following policy violations were identified:

1. Section 4.2.1 — Debt Service Coverage: The applicant's projected debt service coverage ratio (DSCR) of 0.94x falls below the minimum required DSCR of 1.25x for commercial loans in the hospitality/food service sector. This indicates the business may not generate sufficient cash flow to service the proposed debt.

2. Section 3.1.3 — Collateral Requirements: Per bank policy, unsecured exposure for loans above $1M requires a minimum collateral coverage of 80%. The offered collateral (commercial kitchen equipment valued at $780,000) provides only 62% coverage against the requested $1,250,000 loan.

3. Section 2.3.1 — Borrower Credit Standards: The owner's personal credit score of 640 does not meet the minimum threshold of 680 required for commercial loans exceeding $1M.

Financial Filing Review: Analysis of the applicant's submitted financial statements (FY2023-FY2025) reveals a concerning downward revenue trajectory. Gross revenue declined from $3.2M (FY2023) to $2.8M (FY2025), representing a compound annual decline of 6.4%. Operating margins have contracted from 8.2% to 3.1% during the same period, indicating increasing cost pressure.

Market Context: The casual dining segment has experienced elevated stress in the current macroeconomic environment. Industry reports from Q4 2025 indicate a 23% increase in default rates among similar businesses, driven by persistent labor cost inflation (+8.4% YoY) and shifting consumer spending patterns toward quick-service and home delivery alternatives.

Recommendation: Decline. The combination of insufficient cash flow coverage, below-threshold collateral, deteriorating financial performance, and adverse sector conditions presents unacceptable credit risk under current bank policy guidelines.`,
    ragSources: [
      "Fed Aura Capital Commercial Lending Policy v2025-Q4 (Sections 2.3, 3.1, 4.2)",
      "Bella Cucina Restaurant Group Tax Returns — FY2023-FY2025",
      "Bella Cucina Quarterly Financial Statements — Q1-Q4 2025",
      "Industry Risk Report — National Restaurant Association, Q4 2025",
      "Federal Reserve Beige Book — February 2026"
    ]
  },
  {
    id: "CL-2026-0878",
    businessName: "TrendVibe Social Media Agency",
    businessType: "Digital Marketing Services",
    yearsInOperation: 3,
    annualRevenue: 980000,
    netIncome: -45000,
    ownerName: "Jessica Park",
    ownerCreditScore: 665,
    debtToIncomeRatio: 6.2,
    existingDebt: "$220K SBA microloan + $180K business credit cards",
    loanAmount: 750000,
    loanPurpose: "Working Capital",
    loanTermYears: 5,
    collateral: "Office furniture and computer equipment",
    collateralValue: 95000,
    interestRateTier: "N/A — Declined",
    dateSubmitted: "2026-02-20",
    status: "Rejected",
    riskScore: 93,
    riskFactors: [
      "Debt-to-income ratio of 6.2x critically exceeds policy threshold of 3.5x",
      "Business reported net operating loss in most recent fiscal year (-$45,000)",
      "Only 3 years in operation — below minimum 5-year threshold for unsecured lending over $500K",
      "Collateral coverage at 12.7% of loan value (critically below 80% minimum)",
      "Owner credit score of 665 below 680 minimum for commercial lending"
    ],
    creditMemo: `Policy Alignment Analysis: This application has been evaluated against Fed Aura Capital's Commercial Lending Policy (Rev. 2025-Q4). Multiple critical policy violations were identified:

1. Section 2.1.2 — Operating History: The applicant's 3-year operating history falls below the minimum 5-year threshold required for unsecured commercial loans exceeding $500,000. This requirement exists to ensure adequate track record for reliable cash flow projection.

2. Section 4.2.1 — Debt Service Coverage: The applicant reported a net operating loss of -$45,000 in FY2025, resulting in negative cash flow available for debt service. The projected DSCR is 0.62x, significantly below the 1.25x minimum.

3. Section 3.1.3 — Collateral Requirements: The offered collateral (office furniture and IT equipment valued at $95,000) provides only 12.7% coverage against the $750,000 loan request, critically below the 80% policy minimum. Additionally, office equipment is classified as rapidly depreciating collateral per Section 3.2.1, requiring a 40% haircut in valuation.

Financial Filing Review: TrendVibe's financial trajectory shows a concerning pattern. While revenue grew from $420K (FY2023) to $980K (FY2025), operating expenses grew faster, driven by aggressive hiring and marketing spend. The business has been cash-flow negative for 8 of the last 12 months. The requested working capital loan appears intended to fund operating deficits rather than growth investment.

Market Context: The digital marketing agency sector faces increasing commoditization pressure from AI-powered marketing tools and offshore competition. Client retention rates in the sub-$1M agency segment have declined 15% industry-wide in 2025, and average contract values have decreased 22%.

Recommendation: Decline. The application fails to meet minimum thresholds across multiple critical lending criteria. The combination of operating losses, insufficient operating history, negligible collateral, and unfavorable market dynamics presents a risk profile that falls outside bank lending parameters.`,
    ragSources: [
      "Fed Aura Capital Commercial Lending Policy v2025-Q4 (Sections 2.1, 2.3, 3.1, 3.2, 4.2)",
      "TrendVibe Social Media Agency Tax Returns — FY2023-FY2025",
      "TrendVibe Bank Statements — January-December 2025",
      "IBISWorld — Digital Advertising Agencies Industry Report 2025",
      "SBA Office of Advocacy — Small Business Lending Statistics Q4 2025"
    ]
  },
  {
    id: "CL-2026-0901",
    businessName: "Ironclad Auto Body & Paint",
    businessType: "Automotive Repair Services",
    yearsInOperation: 14,
    annualRevenue: 3100000,
    netIncome: 155000,
    ownerName: "Marcus Williams",
    ownerCreditScore: 695,
    debtToIncomeRatio: 3.9,
    existingDebt: "$1.1M commercial mortgage + $420K equipment financing",
    loanAmount: 1800000,
    loanPurpose: "Second Location",
    loanTermYears: 10,
    collateral: "Existing auto body shop property",
    collateralValue: 1260000,
    interestRateTier: "N/A — Declined",
    dateSubmitted: "2026-02-22",
    status: "Rejected",
    riskScore: 72,
    riskFactors: [
      "Debt-to-income ratio of 3.9x exceeds policy threshold of 3.5x",
      "Collateral coverage at 70% of loan value (below 80% minimum required)",
      "Net income margin of 5.0% suggests limited capacity to absorb additional debt service",
      "Second location expansion increases operational complexity and execution risk",
      "Existing debt obligations total $1.52M with $420K maturing within 18 months"
    ],
    creditMemo: `Policy Alignment Analysis: This application has been evaluated against Fed Aura Capital's Commercial Lending Policy (Rev. 2025-Q4). The following policy concerns were identified:

1. Section 4.1.2 — Leverage Ratio: The applicant's debt-to-income ratio of 3.9x exceeds the maximum allowable leverage of 3.5x per bank policy. Including the proposed loan, total debt obligations would reach $3.32M against annual net income of $155,000, resulting in a leverage ratio that falls outside acceptable risk parameters.

2. Section 3.1.3 — Collateral Requirements: The offered collateral (existing auto body shop property valued at $1,260,000) provides 70% coverage against the $1,800,000 loan request, falling below the 80% minimum. An additional $180,000 in collateral value would be required to meet policy thresholds.

Financial Filing Review: Ironclad Auto Body & Paint shows stable but thin-margin operations. Revenue has been flat at approximately $3.1M for three consecutive years. Net income margin of 5.0% provides limited cushion for debt service on the proposed loan. The projected DSCR of 1.08x falls below the 1.25x minimum required for commercial loans in the services sector.

Market Context: The automotive repair sector faces moderate headwinds from the increasing adoption of electric vehicles, which require fewer mechanical repairs, and the growing prevalence of ADAS (Advanced Driver Assistance Systems) technology, which is reducing collision frequency by an estimated 6% annually. While these trends affect the long-term outlook rather than immediate operations, they introduce planning risk for a 10-year loan commitment.

Recommendation: Decline. While the applicant has a solid 14-year operating track record, the combination of above-threshold leverage, insufficient collateral coverage, and thin operating margins does not support the requested loan amount. The applicant may wish to consider a reduced loan amount of $1.2M or less, which could potentially meet collateral and leverage requirements with restructured terms.`,
    ragSources: [
      "Fed Aura Capital Commercial Lending Policy v2025-Q4 (Sections 3.1, 4.1, 4.2)",
      "Ironclad Auto Body & Paint Tax Returns — FY2023-FY2025",
      "Ironclad Auto Body & Paint Property Appraisal — January 2026",
      "IBISWorld — Auto Body Shops Industry Report 2025",
      "National Highway Traffic Safety Administration — ADAS Impact Study 2025"
    ]
  },
  // NEEDS MORE INFO (3)
  {
    id: "CL-2026-0912",
    businessName: "Atlas Maritime Logistics Corp.",
    businessType: "Freight & Logistics",
    yearsInOperation: 8,
    annualRevenue: 22000000,
    netIncome: 1760000,
    ownerName: "Nikolai Petrov",
    ownerCreditScore: 720,
    debtToIncomeRatio: 2.8,
    existingDebt: "$6.4M vessel financing (DNB, matures 2029)",
    loanAmount: 5500000,
    loanPurpose: "Fleet Expansion",
    loanTermYears: 8,
    collateral: "Two dry cargo vessels (2019, 2021 builds)",
    collateralValue: 7150000,
    interestRateTier: "TBD — Pending Review",
    dateSubmitted: "2026-02-28",
    status: "Needs More Info",
    riskScore: 52,
    riskFactors: [
      "Preliminary risk assessment indicates moderate risk — final score pending document review",
      "Maritime logistics sector carries inherent cyclical risk requiring enhanced due diligence",
      "Large loan amount ($5.5M) triggers enhanced documentation requirements per Section 5.1",
      "Foreign-flagged vessel collateral requires additional maritime lien verification"
    ],
    creditMemo: "",
    ragSources: [],
    missingDocs: [
      "Updated Financial Statements: Most recent quarterly financials (Q4 2025) have not been submitted. Last available filing is Q2 2025.",
      "Vessel Survey Reports: Independent marine survey reports for both vessels offered as collateral are required. Reports must be dated within 6 months per bank maritime lending policy.",
      "Maritime Insurance Certificates: Current hull and P&I insurance documentation for the existing fleet has not been provided.",
      "Personal Guarantee Documentation: For loans exceeding $5M, bank policy requires personal guarantee from all owners with >25% stake. Owner financial statements have not been submitted."
    ]
  },
  {
    id: "CL-2026-0934",
    businessName: "Solaris Renewable Energy LLC",
    businessType: "Renewable Energy / Solar Installation",
    yearsInOperation: 5,
    annualRevenue: 4200000,
    netIncome: 378000,
    ownerName: "Sarah Kim",
    ownerCreditScore: 735,
    debtToIncomeRatio: 2.4,
    existingDebt: "$800K equipment lease (Caterpillar Financial)",
    loanAmount: 2800000,
    loanPurpose: "Warehouse & Inventory Expansion",
    loanTermYears: 7,
    collateral: "Commercial warehouse property (under contract)",
    collateralValue: 3080000,
    interestRateTier: "TBD — Pending Review",
    dateSubmitted: "2026-03-02",
    status: "Needs More Info",
    riskScore: 48,
    riskFactors: [
      "Preliminary indicators suggest moderate risk — assessment contingent on missing documentation",
      "Rapid business growth (5 years) requires validation through complete financial history",
      "Collateral property is under purchase contract, not yet owned — requires title verification"
    ],
    creditMemo: "",
    ragSources: [],
    missingDocs: [
      "Collateral Appraisal Report: Independent appraisal of the offered commercial property has not been provided. Bank policy requires appraisals dated within 90 days.",
      "Business Tax Returns: Federal tax returns for FY2024 and FY2025 are missing from the application package. Only FY2023 returns were submitted.",
      "Environmental Compliance Documentation: For properties involving industrial/warehouse use, Phase I environmental assessment is required per Section 3.4.2 of lending policy.",
      "Proof of Contracts: Applicant references $1.8M in signed installation contracts — supporting documentation has not been provided."
    ]
  },
  {
    id: "CL-2026-0956",
    businessName: "Brightpath Education Centers",
    businessType: "Private Education / Childcare",
    yearsInOperation: 7,
    annualRevenue: 3600000,
    netIncome: 288000,
    ownerName: "Linda Chen & James Chen",
    ownerCreditScore: 710,
    debtToIncomeRatio: 2.6,
    existingDebt: "$1.2M commercial mortgage (US Bank)",
    loanAmount: 2200000,
    loanPurpose: "New Campus Construction",
    loanTermYears: 15,
    collateral: "Existing campus property + land parcel for new campus",
    collateralValue: 2860000,
    interestRateTier: "TBD — Pending Review",
    dateSubmitted: "2026-03-04",
    status: "Needs More Info",
    riskScore: 55,
    riskFactors: [
      "15-year loan term exceeds standard 10-year maximum — requires exception approval committee review",
      "Construction loan component introduces completion risk and timeline uncertainty",
      "Dual-owner structure requires both personal guarantees and cross-collateralization documentation"
    ],
    creditMemo: "",
    ragSources: [],
    missingDocs: [
      "Construction Plans & Permits: Approved building plans, permits, and contractor bids have not been submitted. Required per Section 5.3 for construction-phase lending.",
      "Personal Financial Statements: Both owners (Linda Chen — 60% stake, James Chen — 40% stake) must submit personal financial statements dated within 90 days. Neither has been received.",
      "Enrollment Projections: For education sector lending, bank policy requires independent enrollment demand study for new facility locations.",
      "Business Tax Returns: FY2025 federal and state tax returns are pending. Application includes only FY2023 and FY2024 returns."
    ]
  },
  // UNDER REVIEW (2)
  {
    id: "CL-2026-0967",
    businessName: "NovaTech Software Solutions",
    businessType: "Enterprise Software / SaaS",
    yearsInOperation: 4,
    annualRevenue: 5400000,
    netIncome: 540000,
    ownerName: "Rajesh Patel",
    ownerCreditScore: 760,
    debtToIncomeRatio: 1.6,
    existingDebt: "$500K venture debt (Silicon Valley Bank)",
    loanAmount: 3000000,
    loanPurpose: "Working Capital & Hiring",
    loanTermYears: 5,
    collateral: "IP portfolio + accounts receivable",
    collateralValue: 4200000,
    interestRateTier: "TBD — Under Analysis",
    dateSubmitted: "2026-03-07",
    status: "Under Review",
    riskScore: null,
    riskFactors: [],
    creditMemo: "",
    ragSources: []
  },
  {
    id: "CL-2026-0978",
    businessName: "Heritage Timber & Millwork Co.",
    businessType: "Wood Products Manufacturing",
    yearsInOperation: 31,
    annualRevenue: 9200000,
    netIncome: 828000,
    ownerName: "Thomas Erikson",
    ownerCreditScore: 730,
    debtToIncomeRatio: 2.2,
    existingDebt: "$2.8M term loan (KeyBank, matures 2028)",
    loanAmount: 4100000,
    loanPurpose: "Equipment Modernization",
    loanTermYears: 7,
    collateral: "Manufacturing facility + timber inventory",
    collateralValue: 5740000,
    interestRateTier: "TBD — Under Analysis",
    dateSubmitted: "2026-03-08",
    status: "Under Review",
    riskScore: null,
    riskFactors: [],
    creditMemo: "",
    ragSources: []
  }
];

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
