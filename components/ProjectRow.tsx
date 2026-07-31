import type { CSSProperties, Ref } from "react";
import Image from "next/image";
import Link from "next/link";
import "./ProjectRow.css";

export type Project = {
  type: string;
  title: string;
  company: string;
  description: string;
  image: string;
  width: number;
  height: number;
  phone: boolean;
  href?: string;
  cta: string;
};

export default function ProjectRow({
  project,
  index,
  liRef,
  liStyle,
}: {
  project: Project;
  index: number;
  liRef?: Ref<HTMLLIElement>;
  liStyle?: CSSProperties;
}) {
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
          sizes="(max-width: 900px) 100vw, 600px"
          unoptimized={project.image.endsWith(".gif")}
          style={{ maxWidth: Math.min(project.width, 600) }}
        />
      </div>
    </>
  );

  return (
    <li ref={liRef} style={liStyle}>
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
