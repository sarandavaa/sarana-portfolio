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
              <p className="home-hero__eyebrow">San Francisco, Bay Area</p>
              <h1 className="home-hero__headline">Product designer</h1>
              <h1 className="home-hero__headline">who also builds.</h1>
              <p className="home-hero__body">
                Design backed by fast, real feedback loops — talking to users, testing, adjusting —
                plus the range to prototype it myself.
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
