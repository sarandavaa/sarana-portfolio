import type { ReactNode } from "react";

export default function CaseStudyHero({
  title,
  linkHref,
  linkLabel,
  beforeSrc,
  beforeSrcSet,
  afterSrc,
  afterSrcSet,
}: {
  title: ReactNode;
  linkHref: string;
  linkLabel: string;
  beforeSrc: string;
  beforeSrcSet: string;
  afterSrc: string;
  afterSrcSet: string;
}) {
  return (
    <section className="project-hero">
      <div className="hero-container">
        <div className="hero-info-box">
          <div className="project-type">interaction design</div>
          <div>
            <h1 className="hero-h1">{title}</h1>
          </div>
          <a href={linkHref} className="link hero-link">
            {linkLabel}
          </a>
        </div>
        <div className="before-after-grid">
          <img
            src={beforeSrc}
            loading="lazy"
            width={3000}
            sizes="100vw"
            alt=""
            srcSet={beforeSrcSet}
            className="img-rounded-mobile-left"
          />
          <img
            src={afterSrc}
            loading="lazy"
            width={3000}
            sizes="100vw"
            alt=""
            srcSet={afterSrcSet}
            className="img-rounded-mobile-right"
          />
        </div>
      </div>
    </section>
  );
}
