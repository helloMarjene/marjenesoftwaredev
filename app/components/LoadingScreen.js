"use client";

import { useState, useEffect } from "react";
import BrandWordmark from "./BrandWordmark";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`loading-screen ${hidden ? "hidden" : ""}`} id="loadingScreen">
      <div className="loading-content">
        <BrandWordmark variant="loading" />
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <div className="loading-text">Loading Experience...</div>
      </div>
    </div>
  );
}
