import { Bell } from "lucide-react";
import BankLogo from "./BankLogo";

const navLinks = ["Dashboard", "Reports", "Settings"];

const Navbar = () => (
  <nav className="sticky top-0 z-50 flex h-14 items-center justify-between bg-navy px-6">
    <div className="flex items-center gap-8">
      <BankLogo />
      <div className="flex items-center gap-1">
        {navLinks.map((link) => (
          <button
            key={link}
            className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
              link === "Dashboard"
                ? "bg-navy-light text-gold"
                : "text-navy-foreground/70 hover:text-navy-foreground"
            }`}
          >
            {link}
          </button>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-5">
      <button className="relative text-navy-foreground/70 hover:text-navy-foreground transition-colors">
        <Bell size={18} />
        <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] font-bold text-navy-foreground">
          3
        </span>
      </button>
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
          JM
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-sm font-medium leading-tight text-navy-foreground">James Mitchell</span>
          <span className="text-[11px] text-navy-foreground/50">Senior Loan Officer</span>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
