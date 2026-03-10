import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import DashboardHeader from "@/components/DashboardHeader";
import LoanTable from "@/components/LoanTable";
import LoanDossier from "@/components/LoanDossier";

const Index = () => {
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <DashboardHeader />
      <LoanTable onSelect={setSelectedLoan} selectedId={selectedLoan} />
      <AnimatePresence>
        {selectedLoan && (
          <LoanDossier loanId={selectedLoan} onClose={() => setSelectedLoan(null)} />
        )}
      </AnimatePresence>
      <footer className="border-t border-border px-6 py-3 text-center text-xs text-muted-foreground">
        © 2026 Meridian National Bank. AI-powered underwriting system. For authorized personnel only.
      </footer>
    </div>
  );
};

export default Index;
