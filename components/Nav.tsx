"use client";

import { useState } from "react";
import Link from "next/link";
import "./Nav.css";

export default function Nav({
  current = "home",
  variant = "legacy",
}: {
  current?: "home" | "sub";
  variant?: "light" | "legacy";
}) {
  const [open, setOpen] = useState(false);

  return (
    <div role="banner" className={variant === "light" ? "navbar navbar-light" : "navbar"}>
      <div className="nav-inner">
        <div className="nav-logo-wrap">
          <Link
            href="/"
            aria-current={current === "home" ? "page" : undefined}
            className={current === "home" ? "name-logo is-current" : "name-logo"}
          >
            Sarana Davaa
          </Link>
        </div>
        <nav
          role="navigation"
          className="nav-menu"
          {...(open ? { "data-nav-menu-open": "" } : {})}
        >
          <a
            href="https://docs.google.com/document/d/1b0CAbHsg6YJwmnFgzCj_SvGTTkOfNpmL/edit?usp=sharing&ouid=110912305056131051486&rtpof=true&sd=true"
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
