import { useEffect, useState } from "react";
import type { LoanStatus } from "@/data/mockLoans";

interface RiskGaugeProps {
  score: number;
  status: LoanStatus;
}

const RiskGauge = ({ score, status }: RiskGaugeProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(score), 100);
    return () => clearTimeout(timer);
  }, [score]);

  const radius = 54;
  const circumference = Math.PI * radius; // semi-circle
  const progress = (animatedScore / 100) * circumference;

  let color: string;
  let label: string;
  let sublabel: string;
  const isDashed = status === "Needs More Info";

  if (score <= 35) {
    color = "#16A34A";
    label = "Low Risk";
    sublabel = "Default Probability: Minimal";
  } else if (score <= 65) {
    color = "#D4A843";
    label = "Moderate Risk";
    sublabel = "Assessment Incomplete";
  } else {
    color = "#DC2626";
    label = "High Risk";
    sublabel = "Default Probability: Elevated";
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="140" height="80" viewBox="0 0 140 80">
        {/* Background arc */}
        <path
          d="M 10 75 A 54 54 0 0 1 130 75"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={isDashed ? "6 4" : "none"}
        />
        {/* Progress arc */}
        <path
          d="M 10 75 A 54 54 0 0 1 130 75"
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={isDashed ? `${progress} ${circumference}` : `${progress} ${circumference}`}
          style={{ transition: "stroke-dasharray 1s ease-out" }}
        />
        <text x="70" y="60" textAnchor="middle" className="font-sans text-2xl font-bold" fill={color}>
          {animatedScore}
        </text>
        <text x="70" y="74" textAnchor="middle" className="font-sans text-[10px]" fill="hsl(var(--muted-foreground))">
          / 100
        </text>
      </svg>
      <div className="text-center">
        <p className="text-sm font-semibold" style={{ color }}>{status === "Needs More Info" ? `Preliminary: ${score}/100` : label}</p>
        <p className="text-xs text-muted-foreground">{sublabel}</p>
      </div>
    </div>
  );
};

export default RiskGauge;
