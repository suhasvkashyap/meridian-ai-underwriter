import fedAuraLogo from "@/assets/fed-aura-logo.png";

const BankLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <img src={fedAuraLogo} alt="Fed Aura Capital" className="h-8 w-8 object-contain" />
    <div className="flex flex-col">
      <span className="text-sm font-semibold leading-tight tracking-tight text-foreground">Fed Aura Capital</span>
    </div>
  </div>
);

export default BankLogo;
