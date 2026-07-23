import { useEffect, useState } from "react";
import { nextSunday7am } from "../pages/Users/HomePage";

export function useCountdown() {
  const [remaining, setRemaining] = useState(() => nextSunday7am().getTime() - Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(nextSunday7am().getTime() - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const clamp = Math.max(0, remaining);
  const days = Math.floor(clamp / 86400000);
  const hours = Math.floor((clamp % 86400000) / 3600000);
  const mins = Math.floor((clamp % 3600000) / 60000);
  const secs = Math.floor((clamp % 60000) / 1000);
  return { days, hours, mins, secs };
}

