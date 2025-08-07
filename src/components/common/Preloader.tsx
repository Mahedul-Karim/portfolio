"use client";

import { useEffect, useState } from "react";
import Loader from "./loader/Loader";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);

  useEffect(() => {
    if (hasShownOnce) return;

    const id = requestAnimationFrame(() => {
      setIsReady(true);
      setHasShownOnce(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  if (!isReady) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-paper z-50">
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}
