import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

const steps = [
  "Querying bank lending policies...",
  "Retrieving applicant financial filings...",
  "Analyzing market conditions for sector...",
  "Generating explanation...",
];

interface Props {
  onComplete: () => void;
}

const RAGLoadingAnimation = ({ onComplete }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedSteps((prev) => {
        const next = [...prev, currentStep];
        return next;
      });
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return prev;
        }
        return prev + 1;
      });
    }, 900);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="space-y-3 py-4">
      <AnimatePresence mode="popLayout">
        {steps.map((step, i) => {
          const isComplete = completedSteps.includes(i);
          const isActive = i === currentStep && !isComplete;
          const isVisible = i <= currentStep;

          if (!isVisible) return null;

          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isComplete ? 0.5 : 1, y: 0 }}
              exit={{ opacity: 0, filter: "blur(4px)", scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2.5 font-mono text-sm"
            >
              {isComplete ? (
                <CheckCircle size={16} className="text-success shrink-0" />
              ) : isActive ? (
                <Loader2 size={16} className="animate-spin text-brand shrink-0" />
              ) : null}
              <span className={isComplete ? "text-muted-foreground line-through" : "text-foreground"}>
                {step}
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default RAGLoadingAnimation;
