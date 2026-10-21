"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FlowField from "@/components/FlowField";
import { useFadeIn } from "@/components/FadeIn";
import type { Project } from "@/components/ProjectRow";
import "./home.css";

const projects = [
  {
    type: "Product Design & Engineering",
    title: "CommonShips",
    company: "SF Dharma Collective & Berkeley Alembic",
    description:
      "CommonShips is a volunteer coordination platform for community-focused organizations.\n\nIt's intended to make it clear and easy to contribute to a community, and to be the system coordinators can rely on — replacing manual spreadsheets, email threads, and text chains with automated coordination.",
    phone: false,
    href: "/work/commonships",
    cta: "View project",
  },
  {
    type: "Interaction Design",
    title: "Sites Page Redesign",
    company: "Verkada",
    description:
      "Turned an unscalable, spreadsheet-like site manager page into a scalable, mobile-ready workflow.",
    image: "/images/sites-redesign-homepage.gif",
    width: 1760,
    height: 1100,
    phone: false,
    href: "/work/sites-redesign",
    cta: "View project",
  },
] as const;

// Pinned "01 — 02 — ..." stepper, modeled on cloudstudio.es's scrollytelling
// section: each project locks in place (position: sticky) for a stretch of
// scroll, then hands off to the next. Lives only on the home page — the
// shared ProjectRow/ProjectRow.css (used here before, and still used by
// every case study's "Next Project" card) is intentionally untouched (this
// only imports its `Project` type, which has zero runtime footprint).
// `Project` here, not `(typeof projects)[number]`: every current entry's
// `href` happens to be a non-empty literal, so the stricter as-const type
// makes TypeScript narrow the `!project.href` branch below to `never` —
// Project's `href?: string` keeps that branch legitimately reachable.
function WorkStep({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const step = useFadeIn<HTMLDivElement>(0.1, index);

  const tone = index % 2 === 0 ? "is-pink" : "is-blue";

  return (
    <div className="work-step" style={{ zIndex: 2 + index }}>
      <div className="work-step__sticky">
        <div className={`work-step__panel ${tone}`}>
          <div ref={step.ref} style={step.style} className="work-step__grid">
            <div className="work-step__text">
              <div className="work-step__index">
                {Array.from({ length: total }, (_, i) => i).flatMap((i) => [
                  i > 0 ? <span key={`sep-${i}`} className="work-step__index-line" /> : null,
                  <span key={i} className={i === index ? "is-active" : undefined}>
                    {String(i + 1).padStart(2, "0")}
                  </span>,
                ])}
              </div>
              <div className="work-step__type">{project.type}</div>
              <h3 className="work-step__title">{project.title}</h3>
              <div className="work-step__company">{project.company}</div>
              <p className="work-step__desc">{project.description}</p>
              <div className="work-step__meta">
                {project.href ? (
                  <Link href={project.href} className="work-step__cta">
                    {project.cta}
                    <span className="work-step__arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ) : (
                  <span className="work-step__cta is-disabled">{project.cta}</span>
                )}
              </div>
            </div>
            <div className={project.phone ? "work-step__visual is-phone" : "work-step__visual"}>
              {project.image && project.width && project.height ? (
                <Image
                  src={project.image}
                  alt=""
                  width={project.width}
                  height={project.height}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  unoptimized={project.image.endsWith(".gif")}
                />
              ) : (
                <div className="work-step__placeholder">Image placeholder — {project.title}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const hero = useFadeIn<HTMLDivElement>();

  return (
    <>
      <FlowField paper="#000000" ink="#f3f1e9" />
      <div className="ambient-wrap">
        <Nav current="home" />
        <div className="home-page">
          <main className="home">
            <div className="home-hero">
              <div ref={hero.ref} style={hero.style} className="home-hero__content">
                <p className="home-hero__eyebrow">San Francisco, Bay Area</p>
                <h1 className="home-hero__headline">Product designer</h1>
                <h1 className="home-hero__headline">who also builds.</h1>
                <p className="home-hero__body">
                  Design backed by fast, real feedback loops — talking to users, testing, adjusting —
                  plus the range to prototype it myself.
                </p>
                <div className="home-hero__actions">
                  <a href="#contact" className="home-cta-pill">
                    Contact <span aria-hidden="true">→</span>
                  </a>
                  <a href="#work" className="home-cta-ghost">
                    View work
                  </a>
                </div>
              </div>
            </div>

            <section className="home-work" id="work">
              <div className="home-work__inner">
                <h2 className="home-work__label">Selected Work</h2>
              </div>
              <div className="work-steps">
                {projects.map((project, index) => (
                  <WorkStep key={project.title} project={project} index={index} total={projects.length} />
                ))}
              </div>
            </section>

            <section className="home-contact" id="contact">
              <div className="home-contact__inner">
                <h2 className="home-contact__label">Contact</h2>
                <p className="home-contact__sub">Based in San Francisco, CA</p>
                <div className="home-contact__links">
                  <a
                    href="https://www.linkedin.com/in/saranadavaa"
                    target="_blank"
                    rel="noreferrer"
                    className="home-cta-pill"
                  >
                    LinkedIn <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href="https://claude.ai/artifact/FMvoMiTD9wcwjcC1XHNvEQ"
                    target="_blank"
                    rel="noreferrer"
                    className="home-cta-ghost"
                  >
                    View resume
                  </a>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
