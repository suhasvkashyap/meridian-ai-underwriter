const BankLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="4" fill="#D4A843" />
      <path d="M6 24V12L16 6L26 12V24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 24V16H14V24" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 24V16H22V24" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="4" y1="24" x2="28" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <div className="flex flex-col">
      <span className="text-sm font-semibold leading-tight tracking-tight text-navy-foreground">Meridian National</span>
      <span className="text-[10px] font-medium uppercase tracking-widest text-navy-foreground/60">Bank</span>
    </div>
  </div>
);

export default BankLogo;
