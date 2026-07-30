"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Nav.css";

const WORK_ITEMS = [
  { href: "/work/sites-redesign", label: "Sites Page Redesign" },
  { href: "/work/alert", label: "Alert — Mobile Design" },
];

export default function Nav({
  current = "home",
  variant = "legacy",
}: {
  current?: "home" | "sub";
  variant?: "light" | "legacy";
}) {
  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const workRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!workOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (workRef.current && !workRef.current.contains(e.target as Node)) {
        setWorkOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [workOpen]);

  return (
    <div role="banner" className={variant === "light" ? "navbar navbar-light" : "navbar"}>
      <div className="nav-inner">
        <div className="nav-logo-wrap">
          <Link
            href="/"
            aria-current={current === "home" ? "page" : undefined}
            className={current === "home" ? "name-logo is-current" : "name-logo"}
          >
            <Image
              src="/images/sarana_spiral_logo.png"
              alt=""
              width={44}
              height={44}
              className="name-logo-mark"
            />
            Sarana Davaa
          </Link>
        </div>
        <nav
          role="navigation"
          className="nav-menu"
          {...(open ? { "data-nav-menu-open": "" } : {})}
        >
          <div ref={workRef} className="nav-dropdown">
            <button
              type="button"
              aria-expanded={workOpen}
              aria-haspopup="true"
              onClick={() => setWorkOpen((v) => !v)}
              className={
                workOpen
                  ? "nav-link nav-dropdown-toggle is-open"
                  : "nav-link nav-dropdown-toggle"
              }
            >
              Work
              <svg
                className="nav-dropdown-chevron"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {workOpen && (
              <div className="nav-dropdown-menu">
                {WORK_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-dropdown-link"
                    onClick={() => {
                      setWorkOpen(false);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a
            href="https://drive.google.com/file/d/1T0FjDMYIHH_evDWFrttcddN5CTYt0ZAc/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/saranadavaa"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Linkedin
          </a>
        </nav>
      </div>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={open ? "nav-toggle is-open" : "nav-toggle"}
        style={open ? undefined : { background: "transparent", border: "none" }}
      >
        <div className="nav-menu-icon" />
      </button>
    </div>
  );
}
