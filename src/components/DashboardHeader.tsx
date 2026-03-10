import { FileText, Clock, CheckCircle, XCircle } from "lucide-react";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

const stats = [
  { label: "Total Applications", value: 24, icon: FileText, color: "text-foreground" },
  { label: "Pending Review", value: 8, icon: Clock, color: "text-gold" },
  { label: "Approved", value: 12, icon: CheckCircle, color: "text-success" },
  { label: "Rejected", value: 4, icon: XCircle, color: "text-danger" },
];

const DashboardHeader = () => (
  <div className="px-6 py-5">
    <h1 className="text-xl font-semibold text-foreground">{getGreeting()}, James</h1>
    <p className="mt-0.5 text-sm text-muted-foreground">Commercial Loan Underwriting Dashboard</p>
    <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="flex items-center gap-3 rounded-md border border-border bg-card p-4">
          <s.icon size={20} className={s.color} />
          <div>
            <p className="text-2xl font-semibold leading-none">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DashboardHeader;
