import { useEffect, useState } from "react";

const DEMO = new Date(2026, 8, 8, 9, 41, 0);

export function useClock() {
  const [now, setNow] = useState<Date>(DEMO);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return now;
}
