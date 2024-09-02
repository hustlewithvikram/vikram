"use client"; // This directive makes this component a client component

import { useEffect, useState } from "react";

interface VisitorType {
  _id: string;
  ipAddress: string;
  visitDate: string;
}

export default function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    async function fetchVisitorData() {
      const response = await fetch("/api/visitors");
      const data: VisitorType[] = await response.json();
      setVisitorCount(data.length);
    }

    fetchVisitorData();
  }, []);

  return (
    <p className="visitor-count">🌟 Total {visitorCount} Visitors 🌟</p>
  );
}
