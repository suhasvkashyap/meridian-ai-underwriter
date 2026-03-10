import { useState } from "react";
import { loanApplications, formatCurrency, formatDate, type LoanStatus } from "@/data/mockLoans";

const tabs: (LoanStatus | "All")[] = ["All", "Under Review", "Approved", "Rejected", "Needs More Info"];

interface Props {
  onSelect: (id: string) => void;
  selectedId: string | null;
}

const statusClass: Record<LoanStatus, string> = {
  Approved: "status-approved",
  Rejected: "status-rejected",
  "Needs More Info": "status-needs-info",
  "Under Review": "status-under-review",
};

const LoanTable = ({ onSelect, selectedId }: Props) => {
  const [activeTab, setActiveTab] = useState<LoanStatus | "All">("All");

  const filtered = activeTab === "All" ? loanApplications : loanApplications.filter((l) => l.status === activeTab);

  return (
    <div className="px-6 pb-6">
      <div className="flex items-center gap-1 border-b border-border mb-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors -mb-px ${
              activeTab === tab
                ? "border-gold text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-0 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <th className="py-3 pr-4">Application ID</th>
              <th className="py-3 pr-4">Business Name</th>
              <th className="py-3 pr-4">Loan Amount</th>
              <th className="py-3 pr-4">Purpose</th>
              <th className="py-3 pr-4">Submitted</th>
              <th className="py-3 pr-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((loan) => (
              <tr
                key={loan.id}
                onClick={() => onSelect(loan.id)}
                className={`cursor-pointer border-b border-border/50 transition-colors hover:bg-muted/50 ${
                  selectedId === loan.id ? "bg-muted/70" : ""
                }`}
              >
                <td className="py-3 pr-4 font-mono text-xs">{loan.id}</td>
                <td className="py-3 pr-4 font-medium">
                  <div className="flex items-center gap-2">
                    {loan.businessName}
                    {loan.status === "Under Review" && (
                      <span className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse-dot" />
                    )}
                  </div>
                </td>
                <td className="py-3 pr-4 tabular-nums">{formatCurrency(loan.loanAmount)}</td>
                <td className="py-3 pr-4 text-muted-foreground">{loan.loanPurpose}</td>
                <td className="py-3 pr-4 text-muted-foreground">{formatDate(loan.dateSubmitted)}</td>
                <td className="py-3 pr-4">
                  <span className={statusClass[loan.status]}>{loan.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanTable;
