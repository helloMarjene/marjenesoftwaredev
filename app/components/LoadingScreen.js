"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`loading-screen ${hidden ? "hidden" : ""}`} id="loadingScreen">
      <div className="loading-content">
        <div className="loading-logo">M.A.R.J.E.N.E</div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <div className="loading-text">Loading Experience...</div>
      </div>
    </div>
  );
}
