import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import CaseStudyTabs from "@/components/case-study/CaseStudyTabs";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";
import SectionHeading from "@/components/case-study/SectionHeading";
import ImagePanel from "@/components/case-study/ImagePanel";

export const metadata: Metadata = {
  title: "Security Alert Mobile Design — Sarana Davaa",
  description: "Security Alert Mobile Design",
};

const tabs = [
  { id: "background", label: "Background" },
  { id: "problems", label: "Key Problems" },
  { id: "goals", label: "Goals" },
  { id: "framing", label: "Framing" },
  { id: "final", label: "Final Design" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export default function Alert() {
  return (
    <CaseStudyShell>
      <section className="project-hero">
        <div className="hero-container">
          <div className="hero-info-box">
            <div className="project-type">Case Study — 02</div>
            <h1 className="hero-h1">Security Alert Mobile Design</h1>
            <p className="body-copy-light" style={{ textAlign: "center", margin: "0 auto" }}>
              Verkada — Physical Security Platform Interaction Design
            </p>
          </div>
          <div className="hero-meta-row">
            <div className="hero-meta-item">
              <div className="hero-meta-label">Role</div>
              <div className="hero-meta-value">Product Designer</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">Timeline</div>
              <div className="hero-meta-value">3 months</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">Skills</div>
              <div className="hero-meta-value">Interaction Design</div>
            </div>
          </div>
          <div className="hero-before-after">
            <img
              src="/images/alert-before-after.png"
              alt="Before / after — fragmented per-product alerts vs. the unified Alerts Page"
              width={2000}
              height={1114}
              style={{
                width: "auto",
                maxWidth: "100%",
                height: "auto",
                maxHeight: 480,
                display: "block",
                margin: "0 auto",
                borderRadius: 20,
              }}
            />
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-muted)", marginTop: 12 }}>
              Before / after — fragmented per-product alerts vs. the unified Alerts Page
            </p>
          </div>
        </div>
      </section>

      <div className="cs-page">
        <CaseStudyTabs tabs={tabs} backHref="/" backLabel="Back to home" />

        <div className="cs-page-content">
          <section id="background" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">01</div>
              <div className="cs-content">
                <h2 className="cs-h2">Project Background</h2>
                <p className="cs-body">
                  Before the Verkada 3.0 redesign, security alerts — motion detection, door
                  tampering, vape detection, and more — were scattered across individual product
                  pages, one design per product line. There was no single place to see everything
                  happening across a site, which made triage and investigation slower than it
                  needed to be.
                </p>
                <p className="cs-body">
                  The new Alerts Page consolidates every alert type into a single, unified hub —
                  improving visibility, streamlining investigations, and reducing the cognitive
                  load of piecing together an incident from multiple disconnected views.
                </p>
                <p className="cs-body">
                  As the lead designer, I owned the migration of every existing alert type into
                  one consistent system: unifying the design language across products, optimizing
                  for mobile, and rethinking what information an alert actually needs to surface
                  to be useful in the moment.
                </p>
              </div>
            </div>
          </section>

          <section id="problems" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">02</div>
              <div className="cs-content">
                <h2 className="cs-h2">Key Problems</h2>
                <div>
                  <h3 className="cs-h3">Inconsistent design patterns.</h3>
                  <p className="cs-body">
                    Every product team had built its own alert UI independently — different
                    layouts, different terminology, different levels of detail — so users had to
                    relearn the interface every time they moved between alert types.
                  </p>
                </div>
                <div>
                  <h3 className="cs-h3">Not mobile-optimized.</h3>
                  <p className="cs-body">
                    Alerts are often acted on in the moment, away from a desk. Several existing
                    designs weren&rsquo;t responsive, which directly undercut that use case.
                  </p>
                </div>
                <div>
                  <h3 className="cs-h3">Lack of contextual information.</h3>
                  <p className="cs-body">
                    Alerts frequently didn&rsquo;t include enough detail for a user to judge
                    urgency or decide on next steps without leaving the alert to dig elsewhere.
                  </p>
                </div>
              </div>
            </div>
            <div className="cs-content-align" style={{ marginTop: 32 }}>
              <ImagePlaceholder label="Problem illustration" style={{ minHeight: 260 }} />
            </div>
          </section>

          <section id="goals" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">03</div>
              <div className="cs-content">
                <h2 className="cs-h2">Goals</h2>
                <ul className="cs-list">
                  <li>
                    Create one consistent alert design that still flexes to each product&rsquo;s
                    specific needs
                  </li>
                  <li>Ensure full responsiveness and usability on mobile</li>
                  <li>
                    Surface clear, contextual detail so users can act without hunting for more
                    information
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="framing" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">04</div>
              <div className="cs-content">
                <h2 className="cs-h2">Framing: What Does an Alert Actually Need to Tell You?</h2>
                <p className="cs-body">
                  I broke this down into four questions every alert needed to answer, regardless
                  of product line:
                </p>

                <div className="cs-card-grid">
                  <div className="cs-card">
                    <div className="cs-label">1. What happened?</div>
                    <div className="cs-card-desc">e.g., air quality sensor detected vape</div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">2. When did it happen?</div>
                    <div className="cs-card-desc">e.g., today at 12:30 PM</div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">3. Where did it happen?</div>
                    <div className="cs-card-desc">
                      e.g., Summer Green High School, 3rd floor, girls&rsquo; bathroom
                    </div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">4. Why &amp; who?</div>
                    <div className="cs-card-desc">
                      e.g., footage from the event, and faces detected on nearby cameras
                      beforehand — both useful for investigation
                    </div>
                  </div>
                </div>

                <p className="cs-quote cs-placeholder-text">
                  [One or two sentences: how did you land on these four specifically — user
                  interviews, support ticket patterns, stakeholder input?]
                </p>
              </div>
            </div>
            <div className="cs-content-align cs-photo-grid" style={{ marginTop: 32 }}>
              <ImagePlaceholder label="Mobile alert screenshot" style={{ minHeight: 380 }} />
            </div>
          </section>

          <section id="final" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">05</div>
              <div className="cs-content">
                <h2 className="cs-h2">Final Design</h2>
              </div>
            </div>
            <div className="cs-content-align" style={{ marginTop: 32 }}>
              <ImagePlaceholder label="Final design screenshot" style={{ minHeight: 480 }} />
              <p className="cs-body" style={{ marginTop: 24 }}>
                The final design applies this consistent four-part structure across every alert
                type, replacing the fragmented per-product patterns with one system that scales as
                new alert types get added.
              </p>
              <p className="cs-quote cs-placeholder-text">
                [One sentence on a specific trade-off or constraint you navigated — e.g., a
                product team that pushed back on losing their custom layout, or a technical limit
                on what data was available for certain alert types.]
              </p>
            </div>
          </section>

          <section id="outcome" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">06</div>
              <div className="cs-content">
                <h2 className="cs-h2">Outcome</h2>
                <ul className="cs-check-list">
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span> Consistent layout across all alert
                    types
                  </li>
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span> Improved contextual information and
                    support for taking action
                  </li>
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span> Mobile experience optimized
                  </li>
                </ul>
                <p className="cs-body cs-placeholder-text">
                  [Add one number or scale statement if you have it — how many alert types were
                  migrated, how many products/customers this shipped to, or any usage/support-ticket
                  shift you&rsquo;re aware of.]
                </p>
              </div>
            </div>
          </section>

          <section id="reflection" className="cs-section cs-section-end">
            <div className="cs-row">
              <div className="cs-index">07</div>
              <div className="cs-content">
                <h2 className="cs-h2">Reflection</h2>
                <p
                  className="cs-quote cs-placeholder-text"
                  style={{ borderLeft: "none", paddingLeft: 0 }}
                >
                  [2 sentences: one thing you&rsquo;d do differently, one thing it taught you.]
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="next-project-section">
        <SectionHeading tag="h2" variant="section-heading-accent">
          Next Project
        </SectionHeading>
        <div className="home-project-container">
          <div className="home-page-project-info">
            <div className="project-type">Interaction Design</div>
            <div className="title-and-desc">
              <h3 className="next-project-title">
                <strong className="subsection-heading-plain">Sites Page Redesign</strong>
              </h3>
              <a href="#">Verkada</a>
              <p className="body-copy-light">
                A redesign of the Sites page — where admins organize devices and manage
                permissions across every location their organization runs — into something
                scalable, mobile-capable, and aligned with the Verkada 3.0 design language.
              </p>
            </div>
            <Link href="/work/sites-redesign" className="action-link">
              View Project
            </Link>
          </div>
          <ImagePanel
            wrapperClassName="image-panel image-panel-variant-2"
            src="/images/vape_detected_alert.png"
            width={222}
            alt="Verkada Sites page"
            sizes="(max-width: 479px) 100vw, 222px"
            loading="eager"
            srcSet="/images/vape_detected_alert-p-500.png 500w, /images/vape_detected_alert-p-800.png 800w, /images/vape_detected_alert-p-1080.png 1080w, /images/vape_detected_alert-p-1600.png 1600w, /images/vape_detected_alert.png 1745w"
            imgClassName="mobile-img"
          />
        </div>
      </section>
    </CaseStudyShell>
  );
}
