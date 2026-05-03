import { useEffect, useState } from "react";
import logo from "@/assets/logo-niharika-color.png";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const hideTimer = setTimeout(() => setVisible(false), 1900);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      style={{
        transition: "opacity 0.5s ease",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <img
        src={logo}
        alt="Niharika Agencies"
        className="h-20 w-20 object-contain"
      />
      <div className="mt-6 font-display text-xl font-semibold text-primary tracking-tight">
        Niharika Agencies
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        Est. 1999
      </div>

      <div className="mt-8 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-accent"
            style={{
              animation: "loader-bounce 1s ease-in-out infinite",
              animationDelay: `${i * 0.18}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes loader-bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
