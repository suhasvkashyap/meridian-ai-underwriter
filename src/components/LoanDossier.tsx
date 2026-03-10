import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, Flag, Loader2 } from "lucide-react";
import { loanApplications, formatCurrency, formatDate } from "@/data/mockLoans";
import RiskGauge from "./RiskGauge";
import RAGLoadingAnimation from "./RAGLoadingAnimation";

interface Props {
  loanId: string;
  onClose: () => void;
}

const LoanDossier = ({ loanId, onClose }: Props) => {
  const loan = loanApplications.find((l) => l.id === loanId);
  const [showRAG, setShowRAG] = useState(loan?.status === "Approved");
  const [ragLoading, setRagLoading] = useState(false);

  const handleExplain = useCallback(() => {
    setRagLoading(true);
  }, []);

  const handleRAGComplete = useCallback(() => {
    setRagLoading(false);
    setShowRAG(true);
  }, []);

  if (!loan) return null;

  const panelClass =
    loan.status === "Approved"
      ? "panel-approved"
      : loan.status === "Rejected"
      ? "panel-rejected"
      : loan.status === "Needs More Info"
      ? "panel-needs-info"
      : "";

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 dossier-overlay"
        onClick={onClose}
      />
      {/* Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-4xl flex-col bg-card shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-foreground">{loan.id}</h2>
            <span
              className={
                loan.status === "Approved"
                  ? "status-approved"
                  : loan.status === "Rejected"
                  ? "status-rejected"
                  : loan.status === "Needs More Info"
                  ? "status-needs-info"
                  : "status-under-review"
              }
            >
              {loan.status}
            </span>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Top info grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Applicant details */}
              <div className="rounded-md bg-muted/60 p-4 space-y-2.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">Applicant Details</h3>
                <InfoRow label="Business Name" value={loan.businessName} />
                <InfoRow label="Industry" value={loan.businessType} />
                <InfoRow label="Years in Operation" value={String(loan.yearsInOperation)} />
                <InfoRow label="Owner" value={loan.ownerName} />
                <InfoRow label="Owner Credit Score" value={String(loan.ownerCreditScore)} />
                <InfoRow label="Annual Revenue" value={formatCurrency(loan.annualRevenue)} />
                <InfoRow label="Net Income" value={formatCurrency(loan.netIncome)} />
                <InfoRow label="Existing Debt" value={loan.existingDebt} />
              </div>
              {/* Loan details */}
              <div className="rounded-md bg-muted/60 p-4 space-y-2.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">Loan Details</h3>
                <InfoRow label="Amount Requested" value={formatCurrency(loan.loanAmount)} />
                <InfoRow label="Purpose" value={loan.loanPurpose} />
                <InfoRow label="Term" value={`${loan.loanTermYears} years`} />
                <InfoRow label="Collateral" value={loan.collateral} />
                <InfoRow label="Collateral Value" value={formatCurrency(loan.collateralValue)} />
                <InfoRow label="Interest Rate Tier" value={loan.interestRateTier} />
                <InfoRow label="DTI Ratio" value={`${loan.debtToIncomeRatio}x`} />
                <InfoRow label="Date Submitted" value={formatDate(loan.dateSubmitted)} />
              </div>
            </div>

            {/* Under Review state */}
            {loan.status === "Under Review" && (
              <div className="rounded-md bg-muted/60 p-8 flex flex-col items-center justify-center gap-3">
                <Loader2 size={28} className="animate-spin text-accent" />
                <p className="text-sm text-foreground/80">AI analysis in progress...</p>
                <p className="text-xs text-muted-foreground">
                  Submitted {formatDate(loan.dateSubmitted)} · Estimated completion: 2-4 hours
                </p>
              </div>
            )}

            {/* AI Risk Assessment */}
            {loan.riskScore !== null && (
              <div className={`rounded-md p-5 ${panelClass}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      AI Risk Assessment{loan.status === "Needs More Info" ? " — Incomplete" : ""}
                    </h3>
                  </div>
                  <span className="badge-redhat">Powered by Red Hat AI — AutoML</span>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <RiskGauge score={loan.riskScore} status={loan.status} />
                  <div className="flex-1 space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">
                      {loan.status === "Approved"
                        ? "Positive Indicators"
                        : loan.status === "Rejected"
                        ? "Key Risk Factors"
                        : "Preliminary Indicators"}
                    </h4>
                    <ul className="space-y-1.5">
                      {loan.riskFactors.map((f, i) => (
                        <li key={i} className="text-sm text-foreground/80 leading-relaxed">
                          • {f}
                        </li>
                      ))}
                    </ul>
                    {loan.status !== "Needs More Info" && (
                      <p className="text-xs text-muted-foreground mt-3 italic">
                        Risk model trained on 50,000+ historical loan outcomes using automated machine learning pipeline
                      </p>
                    )}
                    {loan.status === "Needs More Info" && (
                      <p className="text-xs text-muted-foreground mt-3 italic">
                        Final risk score cannot be determined. The information gaps below must be resolved before the model can produce a definitive assessment.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Missing Docs for Needs More Info */}
            {loan.status === "Needs More Info" && loan.missingDocs && (
              <div className={`rounded-md p-5 panel-needs-info`}>
                <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                  Action Required — Missing Documentation
                </h3>
                <ul className="space-y-3">
                  {loan.missingDocs.map((doc, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-foreground/80">
                      <input type="checkbox" disabled className="mt-1 shrink-0 accent-gold" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-2">
                  <button className="inline-flex items-center gap-1.5 rounded bg-gold px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:bg-gold-dark">
                    <Send size={14} />
                    Send Request to Applicant
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded border border-foreground/20 px-3 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted">
                    <Flag size={14} />
                    Flag for Follow-Up
                  </button>
                </div>
              </div>
            )}

            {/* Explain button for Rejected */}
            {loan.status === "Rejected" && !showRAG && !ragLoading && (
              <button
                onClick={handleExplain}
                className="inline-flex items-center gap-2 rounded bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                <Sparkles size={16} />
                Explain with Full Context
              </button>
            )}

            {/* RAG Loading */}
            {ragLoading && (
              <div className={`rounded-md p-5 ${panelClass}`}>
                <RAGLoadingAnimation onComplete={handleRAGComplete} />
              </div>
            )}

            {/* Credit Memo / RAG Output */}
            {showRAG && loan.creditMemo && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`rounded-md p-5 ${panelClass}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-semibold text-foreground">
                    {loan.status === "Approved" ? "Credit Assessment Summary" : "Contextual Risk Explanation"}
                  </h3>
                  <span className="badge-redhat">Powered by Red Hat AI — AutoRAG</span>
                </div>
                <div className="font-serif-doc text-sm leading-relaxed text-foreground/85 whitespace-pre-line">
                  {loan.creditMemo}
                </div>

                {/* Sources */}
                {loan.ragSources.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-foreground/10">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Sources Retrieved
                    </h4>
                    <ul className="space-y-1">
                      {loan.ragSources.map((src, i) => (
                        <li key={i} className="text-xs text-muted-foreground">
                          {i + 1}. {src}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between gap-2">
    <span className="text-xs text-navy-foreground/50">{label}</span>
    <span className="text-xs font-medium text-navy-foreground text-right">{value}</span>
  </div>
);

export default LoanDossier;
