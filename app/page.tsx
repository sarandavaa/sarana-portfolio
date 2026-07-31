"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FlowField from "@/components/FlowField";
import ProjectRow from "@/components/ProjectRow";
import { useFadeIn } from "@/components/FadeIn";
import "./home.css";

const projects = [
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
  {
    type: "Interaction Design",
    title: "Security Alert Mobile Design",
    company: "Verkada",
    description:
      "One alert layout that scales cleanly across cameras, air quality sensors, and access control.",
    image: "/images/vape-alert.gif",
    width: 1745,
    height: 3520,
    phone: true,
    href: "/work/alert",
    cta: "View project",
  },

] as const;

function FadeInProjectRow({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const row = useFadeIn<HTMLLIElement>(0.1, index);
  return <ProjectRow project={project} index={index} liRef={row.ref} liStyle={row.style} />;
}

export default function Home() {
  const hero = useFadeIn<HTMLDivElement>();

  return (
    <>
      <FlowField />
      <div className="ambient-wrap">
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
                  <FadeInProjectRow key={project.title} project={project} index={index} />
                ))}
              </ul>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
