import { useEffect, useState } from "react";
import pceaLogo from "@/assets/pcea-logo.jpg";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 2000);
    const hideTimer = setTimeout(() => setIsVisible(false), 2700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ease-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={isFading}
      role="status"
    >
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl animate-pulse-gentle" />
          <img
            src={pceaLogo}
            alt="PCEA St. Ninians Millimani Parish logo"
            className="relative h-28 w-28 md:h-32 md:w-32 object-contain animate-float"
          />
        </div>

        <div className="text-center space-y-2 px-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--navy))] tracking-tight">
            Karibu
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-sans">
            Welcome to PCEA St. Ninians Nakuru
          </p>
        </div>

        <div className="mt-2 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-gentle" />
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-gentle animation-delay-200" />
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-gentle animation-delay-400" />
        </div>
      </div>
    </div>
  );
}
