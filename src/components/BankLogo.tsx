const BankLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#DC3545" />
      <path d="M16 6L6 16H10V24H14V19H18V24H22V16H26L16 6Z" fill="white" />
    </svg>
    <div className="flex flex-col">
      <span className="text-sm font-semibold leading-tight tracking-tight text-foreground">Fed Aura Capital</span>
    </div>
  </div>
);

export default BankLogo;
