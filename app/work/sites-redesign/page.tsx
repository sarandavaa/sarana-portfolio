import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import CaseStudyTabs from "@/components/case-study/CaseStudyTabs";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";
import SectionHeading from "@/components/case-study/SectionHeading";
import ImagePanel from "@/components/case-study/ImagePanel";

export const metadata: Metadata = {
  title: "Sites Page Redesign — Sarana Davaa",
  description: "Sites Page Redesign",
};

const tabs = [
  { id: "background", label: "Background" },
  { id: "why", label: "Why It Changed" },
  { id: "research", label: "Research" },
  { id: "exploration", label: "Exploration" },
  { id: "final", label: "Final Design" },
  { id: "constraints", label: "Constraints" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export default function SitesRedesign() {
  return (
    <CaseStudyShell>
      <section className="project-hero">
        <div className="hero-container">
          <div className="hero-info-box">
            <div className="project-type">Case Study — 01</div>
            <h1 className="hero-h1">Sites Page Redesign</h1>
            <p className="body-copy-light" style={{ textAlign: "center", margin: "0 auto" }}>
              Verkada — Physical Security Platform Interaction Design
            </p>
          </div>
          <div className="hero-meta-row">
            <div className="hero-meta-item">
              <div className="hero-meta-label">Role</div>
              <div className="hero-meta-value">Product Designer, Lead</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">Team</div>
              <div className="hero-meta-value cs-placeholder-text">[team size/roles]</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">Timeline</div>
              <div className="hero-meta-value cs-placeholder-text">[rough dates/duration]</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">Tools</div>
              <div className="hero-meta-value">
                Figma, <span className="cs-placeholder-text">[design system name]</span>
              </div>
            </div>
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
                  Verkada provides enterprise physical security solutions — video surveillance,
                  door access control, air quality monitoring, alarms, intercoms, and visitor
                  management — all managed from one platform.
                </p>
                <p className="cs-body">
                  The Sites page is where admins organize devices and manage permissions across
                  every location their organization runs. It&rsquo;s foundational to the platform
                  experience: almost every other workflow eventually routes through it. But the
                  existing interface was a dense, spreadsheet-style grid that hadn&rsquo;t been
                  rethought as the product line grew — and it was effectively unusable on mobile.
                </p>
                <p className="cs-body">
                  My goal was to redesign it into something scalable, mobile-capable, and aligned
                  with the newer Verkada 3.0 design language — without breaking the complex
                  permission and hierarchy logic power users depended on.
                </p>
              </div>
            </div>
            <div style={{ marginTop: 32 }}>
              <ImagePlaceholder label="Before / after screenshot" style={{ minHeight: 420 }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-muted)", marginTop: 12 }}>
                Before / after — legacy grid vs. redesigned Sites page
              </p>
            </div>
          </section>

          <section id="why" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">02</div>
              <div className="cs-content">
                <h2 className="cs-h2">Why It Needed to Change</h2>
                <div>
                  <h3 className="cs-h3">Not usable on mobile.</h3>
                  <p className="cs-body">
                    Admins rely on the Sites page for time-sensitive tasks — permission changes,
                    restructuring after an incident, onboarding a new location. By 2023, users
                    expected core SaaS functions to work on mobile, and this page fell far short.
                  </p>
                </div>
                <div>
                  <h3 className="cs-h3">Not scalable.</h3>
                  <p className="cs-body">
                    Every new product line added a new column to the grid. This worked when
                    Verkada had a handful of device types; it broke down as the ecosystem grew,
                    and some products weren&rsquo;t represented in the view at all — so admins
                    couldn&rsquo;t get a unified picture of a site.
                  </p>
                </div>
                <div>
                  <h3 className="cs-h3">Visually and structurally out of step.</h3>
                  <p className="cs-body">
                    The page hadn&rsquo;t been touched since before the Verkada 3.0 design system,
                    so it looked and behaved like a legacy tool bolted onto a modern platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="research" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">03</div>
              <div className="cs-content">
                <h2 className="cs-h2">Research</h2>
                <p className="cs-body">
                  I ran a UX audit, then structured the investigation around a few research
                  questions before doing any exploration:
                </p>

                <div className="cs-card-grid">
                  <div className="cs-card">
                    <div className="cs-label">Jobs to be done</div>
                    <div className="cs-card-desc">What are admins actually trying to accomplish here?</div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">Usability issues</div>
                    <div className="cs-card-desc">What&rsquo;s actively blocking them today?</div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">Opportunity</div>
                    <div className="cs-card-desc">Could this page do more than it currently does?</div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">Prioritization</div>
                    <div className="cs-card-desc">What&rsquo;s noise vs. signal in the current design?</div>
                  </div>
                </div>

                <p className="cs-body">
                  To answer these, I combined a UX audit, stakeholder and design-history
                  interviews, sessions with Solutions Engineers (who see how large enterprise
                  customers actually configure their sites), and direct customer interviews.
                </p>

                <h3 className="cs-h3-serif">What I learned</h3>
                <p className="cs-body">
                  Org Admins and Site Admins use this page primarily to structure and restructure
                  sites: creating and naming sites and subsites, splitting a site into multiple
                  subsites, moving a subsite elsewhere in the hierarchy, and managing permissions
                  as that structure shifts.
                </p>
                <p className="cs-body">The friction was concentrated in three places:</p>
                <ul className="cs-list">
                  <li>
                    <strong>Cumbersome restructuring</strong> — users had to strip out every
                    device and subsite before they could delete or move a site.
                  </li>
                  <li>
                    <strong>Disjointed workflow</strong> — restructuring meant bouncing between
                    separate pages to move devices and separately manage permissions.
                  </li>
                  <li>
                    <strong>No bulk actions</strong> — every change was one at a time, even for
                    customers managing hundreds of sites.
                  </li>
                </ul>

                <p className="cs-body">A few data points that shaped prioritization:</p>
                <ul className="cs-list">
                  <li>
                    A Solutions Engineering Manager noted that one of Verkada&rsquo;s largest
                    customers restructures roughly 10 subsites into different parents every year.
                  </li>
                  <li>
                    A customer publicly requested drag-and-drop restructuring at a Verkada
                    customer conference.
                  </li>
                  <li>
                    An engineer described customers needing to change site hierarchy without
                    deleting and recreating sites — since that meant re-adding every device and
                    resetting every configuration from scratch.
                  </li>
                  <li>
                    One Solutions Engineer was writing a custom script for a 700+ site enterprise
                    customer just to help them manage their structure — a strong signal the
                    built-in tooling had failed them.
                  </li>
                  <li>
                    Design leadership emphasized that naming conventions and device-count
                    visibility mattered enormously to how customers reasoned about their site
                    structure.
                  </li>
                </ul>

                <p className="cs-body">
                  Beyond the core friction, a few opportunities stood out: the Sites page had
                  potential as a homepage (Verkada currently defaults to the Camera page),
                  floorplan integration was a natural extension since floorplans are site-based,
                  and customers wanted the ability to pin key sites and export site data for
                  compliance reporting.
                </p>
              </div>
            </div>
            <div className="cs-photo-grid" style={{ marginTop: 32 }}>
              <ImagePlaceholder label="Research process photo" style={{ minHeight: 260 }} />
              <ImagePlaceholder label="Research process photo" style={{ minHeight: 260 }} />
            </div>
          </section>

          <section id="exploration" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">04</div>
              <div className="cs-content">
                <h2 className="cs-h2">Design Exploration &amp; Rationale</h2>
                <p className="cs-body">
                  I explored three layout approaches, each solving for &ldquo;immediate visibility
                  into site structure&rdquo; differently, because different customer segments
                  needed different things from the same view:
                </p>
              </div>
            </div>

            <div className="cs-option-list" style={{ marginTop: 32 }}>
              <div className="cs-option">
                <ImagePlaceholder label="Panel View screenshot" style={{ minHeight: 150 }} />
                <div>
                  <h3 className="cs-h3">Panel View</h3>
                  <p className="cs-card-desc">
                    A persistent side panel showing hierarchy alongside detail. Best for admins
                    who work across many sites at once and need to keep context while drilling
                    into one.
                  </p>
                </div>
              </div>
              <div className="cs-option">
                <ImagePlaceholder label="Expanded List View screenshot" style={{ minHeight: 150 }} />
                <div>
                  <h3 className="cs-h3">Expanded List View</h3>
                  <p className="cs-card-desc">
                    A flat, scrollable list optimized for scanning device counts and permissions
                    quickly. Best for smaller sites or narrower device sets.
                  </p>
                </div>
              </div>
              <div className="cs-option">
                <ImagePlaceholder label="Toggle View screenshot" style={{ minHeight: 150 }} />
                <div>
                  <h3 className="cs-h3">Toggle View (Panel &amp; List)</h3>
                  <p className="cs-card-desc">Lets the user switch between the two.</p>
                </div>
              </div>
            </div>

            <p className="cs-quote cs-placeholder-text" style={{ marginTop: 24 }}>
              [One sentence: which one shipped, and the one reason it won.]
            </p>
          </section>

          <section id="final" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">05</div>
              <div className="cs-content">
                <h2 className="cs-h2">Final Design</h2>
              </div>
            </div>
            <div style={{ marginTop: 32 }}>
              <ImagePlaceholder label="Final design screenshot" style={{ minHeight: 480 }} />
              <p className="cs-body" style={{ marginTop: 24 }}>
                The final design supports the full restructuring workflow — creating, renaming,
                moving, and nesting sites — alongside permission management, in a layout that
                holds up on both desktop and mobile.
              </p>
            </div>
          </section>

          <section id="constraints" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">06</div>
              <div className="cs-content">
                <h2 className="cs-h2">Navigating Constraints</h2>
                <p className="cs-body">
                  Senior-level design work is as much about what you push back on and what you let
                  go of as what you ship. A few trade-offs from this project:
                </p>
                <div>
                  <h3 className="cs-h3">Drag-and-drop was rejected for technical reasons.</h3>
                  <p className="cs-card-desc cs-placeholder-text">
                    [What did you design instead to cover the same need?]
                  </p>
                </div>
                <div>
                  <h3 className="cs-h3">Bulk actions weren&rsquo;t supported in this phase.</h3>
                  <p className="cs-card-desc cs-placeholder-text">
                    [Fast-follow, or dropped? One line.]
                  </p>
                </div>
                <div>
                  <h3 className="cs-h3">Duplicate/copy functionality was backlogged rather than cut.</h3>
                </div>
                <div>
                  <h3 className="cs-h3">Bandwidth settings were added mid-project as a new requirement.</h3>
                </div>
              </div>
            </div>
          </section>

          <section id="outcome" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">07</div>
              <div className="cs-content">
                <h2 className="cs-h2">Outcome</h2>
                <ul className="cs-check-list">
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span> Fully responsive on mobile
                  </li>
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span> Scalable to Verkada&rsquo;s full,
                    growing device catalog
                  </li>
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span> Aligned with the Verkada 3.0 design
                    system
                  </li>
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span> Simplified permission viewing and
                    editing
                  </li>
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span> Faster, lower-friction site
                    restructuring
                  </li>
                </ul>
                <p className="cs-body cs-placeholder-text">
                  [Add one number or scale statement if you have it — usage, tickets, or
                  &ldquo;shipped to X customers.&rdquo; If not, skip it; the checkmarks above are
                  fine as-is.]
                </p>
              </div>
            </div>
          </section>

          <section id="reflection" className="cs-section cs-section-end">
            <div className="cs-row">
              <div className="cs-index">08</div>
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
                <strong className="subsection-heading-plain">
                  Security Alert
                  <br />
                  Mobile Design
                </strong>
              </h3>
              <a href="#">Verkada</a>
              <p className="body-copy-light">
                Alert design for the core platform&rsquo;s mobile web. Designed the layout and
                interaction that works for different alerts from camera, air quality sensors, and
                access control.
              </p>
            </div>
            <Link href="/work/alert" className="action-link">
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
