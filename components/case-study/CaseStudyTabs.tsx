"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./CaseStudyTabs.css";

export type CaseStudyTab = { id: string; label: string };

export default function CaseStudyTabs({
  tabs,
  backHref = "/",
  backLabel = "Back",
}: {
  tabs: CaseStudyTab[];
  backHref?: string;
  backLabel?: string;
}) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  useEffect(() => {
    const sections = tabs
      .map((tab) => document.getElementById(tab.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveId(topMost.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [tabs]);

  const activeIndex = Math.max(
    0,
    tabs.findIndex((tab) => tab.id === activeId)
  );

  return (
    <aside className="cs-tabs">
      <Link href={backHref} className="cs-tabs-back">
        <span className="cs-tabs-back-arrow" aria-hidden="true">
          &larr;
        </span>
        {backLabel}
      </Link>
      <nav className="cs-tabs-nav" aria-label="Case study sections">
        <div className="cs-tabs-list">
          <span
            className="cs-tabs-indicator"
            style={{ transform: `translateY(${activeIndex * 40}px)` }}
            aria-hidden="true"
          />
          <ul className="cs-tabs-items">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className={tab.id === activeId ? "cs-tab cs-tab-active" : "cs-tab"}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
