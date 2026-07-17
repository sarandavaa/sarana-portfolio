"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import FlowField from "@/components/FlowField";
import { useFadeIn } from "@/components/FadeIn";
import "./home.css";

const projects = [
  {
    type: "Interaction Design",
    title: "Sites Page Redesign",
    company: "Verkada",
    description:
      "Turned an unscalable, spreadsheet-like device manager into a fast, mobile-ready workflow.",
    image: "/images/Sites-page---edited.png",
    width: 5440,
    height: 3512,
    phone: false,
    href: "/work/sites-redesign",
    cta: "View project",
  },
  {
    type: "Interaction Design",
    title: "Security Alert Mobile Design",
    company: "Verkada",
    description:
      "One alert layout that scales cleanly across cameras, air quality sensors, and access control.",
    image: "/images/vape_detected_alert.png",
    width: 1745,
    height: 3520,
    phone: true,
    href: "/work/alert",
    cta: "View project",
  },
  {
    type: "Interaction Design",
    title: "Guest Log Page Design",
    company: "Verkada Guest",
    description: "Search and filter, rebuilt for visitor logs at scale.",
    image: "/images/Guest-log.png",
    width: 5680,
    height: 3816,
    phone: false,
    href: null,
    cta: "Coming soon",
  },
] as const;

type Project = (typeof projects)[number];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const row = useFadeIn<HTMLLIElement>(0.1, index);
  const rowIndex = String(index + 1).padStart(2, "0");

  const content = (
    <>
      <div className="project-row__index">{rowIndex}</div>
      <div>
        <div className="project-row__type">{project.type}</div>
        <h3 className="project-row__title">{project.title}</h3>
        <div className="project-row__company">{project.company}</div>
        <p className="project-row__desc">{project.description}</p>
        <div className="project-row__meta">
          <span className="project-row__cta">
            {project.cta}
            {project.href && (
              <span className="project-row__arrow" aria-hidden="true">
                →
              </span>
            )}
          </span>
        </div>
      </div>
      <div className={project.phone ? "project-row__visual is-phone" : "project-row__visual"}>
        <Image
          src={project.image}
          alt=""
          width={project.width}
          height={project.height}
          sizes={project.phone ? "(max-width: 900px) 100vw, 340px" : "(max-width: 900px) 100vw, 900px"}
        />
      </div>
    </>
  );

  return (
    <li ref={row.ref} style={row.style}>
      {project.href ? (
        <Link href={project.href} className="project-row">
          {content}
        </Link>
      ) : (
        <div className="project-row is-disabled">{content}</div>
      )}
    </li>
  );
}

export default function Home() {
  const hero = useFadeIn<HTMLDivElement>();

  return (
    <>
      <FlowField />
      <div className="home-page-wrap">
        <Nav current="home" variant="light" />
        <div className="home-page">
          <main className="home">
            <div ref={hero.ref} style={hero.style} className="home-hero">
              <p className="home-hero__eyebrow">Product Designer, San Francisco</p>
              <h1 className="home-hero__headline">
                Designing experiences
                <br />
                that awaken possibility.
              </h1>
              <p className="home-hero__body">
                I design products that simplify complexity and ambiguity, creating space for what
                matters.
              </p>
            </div>

            <section className="home-work">
              <h2 className="home-work__label">Selected Work</h2>
              <ul className="project-list">
                {projects.map((project, index) => (
                  <ProjectRow key={project.title} project={project} index={index} />
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
