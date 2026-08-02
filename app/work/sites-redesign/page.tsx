import type { Metadata } from "next";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import CaseStudyTabs from "@/components/case-study/CaseStudyTabs";
import SectionHeading from "@/components/case-study/SectionHeading";
import ProjectRow from "@/components/ProjectRow";

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
              <div className="hero-meta-value">Product Designer</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">Timeline</div>
              <div className="hero-meta-value">3 months</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">Skills</div>
              <div className="hero-meta-value">UX Research, Interaction Design</div>
            </div>
          </div>
          <div className="hero-before-after">
            <img
              src="/images/Sites_Before-After.png"
              alt="Before / after — legacy grid vs. redesigned Sites page"
              width={2400}
              height={750}
              style={{ width: "100%", height: "auto", display: "block", borderRadius: 20 }}
            />
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-muted)", marginTop: 12 }}>
              Before / after — legacy grid vs. redesigned Sites page
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
                <img
                  src="/images/Verkada_products.png"
                  alt="Verkada product lineup — cameras, access control, sensors, and other devices managed from one platform"
                  width={999}
                  height={1080}
                  style={{
                    width: "100%",
                    height: 300,
                    display: "block",
                    borderRadius: 16,
                    objectFit: "cover",
                  }}
                />
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

          </section>

          <section id="why" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">02</div>
              <div className="cs-content">
                <h2 className="cs-h2">Why It Needed to Change</h2>
                <div className="cs-image-frame">
                  <img
                    src="/images/Sites-Problems.png"
                    alt="Problems with the existing Sites page — dense, spreadsheet-style grid unusable on mobile"
                    width={1360}
                    height={800}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
                <div>
                  <h3 className="cs-h3">Not usable on mobile.</h3>
                  <p className="cs-body">
                    Users expect high-quality SaaS products to support core functions on mobile,
                    and there was a company-wide push to make the entire Verkada web platform usable on mobile devices.
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
                  <h3 className="cs-h3">Visually and structurally outdated.</h3>
                  <p className="cs-body">
                    The page hadn't been touched in a while, so it wasn't aligned with the recently rolled out Verkada 3.0.
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
                    <div className="cs-card-desc">What are the main jobs users accomplish here?
                      What functions are done here that nowhere else can be done?
                    </div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">Usability issues</div>
                    <div className="cs-card-desc">What&rsquo;s obstacles make the current design difficult to use?</div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">Opportunity</div>
                    <div className="cs-card-desc">Could this page do more than it currently does?</div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">Prioritization</div>
                    <div className="cs-card-desc">What&rsquo;s noise vs. signal in the current design?
                      What can be taken out or hidden?
                    </div>
                  </div>
                </div>

                <p className="cs-body">
                  To answer these, I combined a UX audit, stakeholder and design-history
                  interviews, sessions with Solutions Engineers (who see how large enterprise
                  customers actually configure their sites), and direct customer interviews.
                </p>

                <h3 className="cs-h3-serif">What I learned</h3>
                <p className="cs-body">
                  One of the intentional constraints of the Verkada platform is that user permissions are granted per site, not per device.
                  As organizations get more familiar with the platform over time, they often revise their naming conventions and site hierarchy
                  — and this restructuring surfaced real friction, especially for large enterprises managing hundreds of locations and devices.
                  The friction was concentrated in three places:
                </p>
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

                <div className="cs-highlight-block">
                  <p className="cs-body">Some of the data points that shaped prioritization:</p>
                  <ul className="cs-list">
                    <li>
                      One Solutions Engineer was writing a custom script for an enterprise customer
                      with 700+ sites to help them change the site structure.
                    </li>
                    <li>
                      A Solutions Engineering Manager noted that one of Verkada&rsquo;s largest
                      customers restructures roughly 10 subsites into different parents every year.
                    </li>
                    <li>
                      A customer requested drag-and-drop restructuring at a Verkada
                      customer conference.Customers needed to change site hierarchy without
                      deleting and recreating sites, since that meant re-adding every device and
                      resetting every configuration from scratch.
                    </li>
                    <li>
                      A customers highlighted the importance of naming convensions and they had to
                      iterate multiple times.
                    </li>
                  </ul>
                </div>

                <p className="cs-body">
                  Beyond the core friction, a few opportunities stood out: the Sites page had
                  potential as a homepage (Verkada currently defaults to the Camera page),
                  floorplan integration was a natural extension since floorplans are site-based,
                  and customers wanted the ability to pin key sites and export site data for
                  compliance reporting.
                </p>
              </div>
            </div>
          </section>

          <section id="exploration" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">04</div>
              <div className="cs-content">
                <h2 className="cs-h2">Design Exploration &amp; Rationale</h2>
                <p className="cs-body">
                  I explored three layout approaches, each solving for immediate visibility
                  into site structure.
                </p>
              </div>
            </div>

            <div className="cs-content-align" style={{ marginTop: 32 }}>
              <div className="cs-option-list">
                <div className="cs-option">
                  <img
                    src="/images/Sites_Panel_View.png"
                    alt="Panel View — persistent side panel showing hierarchy alongside detail"
                    width={1200}
                    height={800}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div>
                    <h3 className="cs-h3">Panel View</h3>
                    <p className="cs-card-desc">
                      A persistent side panel showing hierarchy alongside detail. Best for admins who work across many sites at once and need to keep context while drilling into one.
                    </p>
                  </div>
                </div>
                <div className="cs-option">
                  <img
                    src="/images/Expanded_List.png"
                    alt="Expanded List View — flat, scrollable list for scanning device counts and permissions"
                    width={1200}
                    height={800}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div>
                    <h3 className="cs-h3">Expanded List View</h3>
                    <p className="cs-card-desc">
                      A flat, scrollable list that expands to disclose details when a user clicks into an item. A matter of preference more than a fit for a particular use case.
                    </p>
                  </div>
                </div>
                <div className="cs-option">
                  <img
                    src="/images/Toggle_Panel_View.png"
                    alt="Toggle View — switch between Panel View and Expanded List View"
                    width={1200}
                    height={800}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div>
                    <h3 className="cs-h3">Toggle View (Panel &amp; List)</h3>
                    <p className="cs-card-desc">Lets the user switch between the two. Ultimately dropped, since it expanded the scope of the project without much added benefit.</p>
                  </div>
                </div>
              </div>

              <p className="cs-body" style={{ marginTop: 24 }}>
                Panel View won. It surfaces the overall site structure while still giving access to site details, devices, users, bandwidth usage, and floorplans in one place — and it's scalable, responsive, and supports the full restructuring workflow.              </p>
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
              <img
                src="/images/Sites-Final.png"
                alt="Final Sites page design — restructuring and permission management in the redesigned layout"
                width={2388}
                height={1063}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: 16 }}
              />
              <p className="cs-body" style={{ marginTop: 24 }}>
                The final design gives a full view of the site list alongside a right-hand panel showing device details, user permissions, bandwidth settings, floorplans, and alarm details for the selected site. It also supports the full restructuring workflow — renaming sites, adding subsites, and reaching devices and permissions without leaving the view.
              </p>
            </div>
          </section>

          <section id="constraints" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">06</div>
              <div className="cs-content">
                <h2 className="cs-h2">Navigating Constraints</h2>
                <ul className="cs-list cs-list-bulleted">
                  <li>Drag-and-drop was rejected for technical reasons.</li>
                  <li>Bulk actions weren&rsquo;t supported in this phase.</li>
                  <li>Bandwidth settings were added mid-project as a new requirement.</li>
                </ul>
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
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span> High-level view of the entire site with everything related to the site
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="reflection" className="cs-section cs-section-end">
            <div className="cs-row">
              <div className="cs-index">08</div>
              <div className="cs-content">
                <h2 className="cs-h2">Reflection</h2>
                <p className="cs-body">
                  I came into this project from a UX research background, and it's where my drive to simplify complexity started. I was excited to work on it going in — the existing page had so much room to improve, and that potential is what drew me to it. Partway through, though, I didn't always have the trust or autonomy from the team to move as freely as I needed to, and I was moved off the project before I could fully close it out.
                  <br></br>
                  <br></br>
                  Looking back, I'd have designed my stakeholder feedback sessions differently — I tried to fix too many things at once. Stakeholders aren't automatically your creative collaboration team; sometimes the better move is to take full ownership and make the decision simple for people to weigh in on, rather than opening everything up for debate.
                  <br></br>
                  <br></br>
                  The research surfaced more complexity than I expected, especially for customers managing multiple locations with hundreds of devices. The team genuinely didn't have enough backend engineering resources to work through everything I surfaced — a real structural constraint, separate from the trust issues above. Through all of it, I kept taking small steps forward instead of waiting for full clarity or approval — that is what I value most from working on this project.
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
        <ul className="project-list">
          <ProjectRow
            index={1}
            project={{
              type: "Interaction Design",
              title: "Security Alert Mobile Design",
              company: "Verkada",
              description:
                "One alert layout that scales cleanly across cameras, air quality sensors, and access control.",
              image: "/images/vape-alert.gif",
              width: 1745,
              height: 3520,
              phone: true,
              href: "/work/archive/alert",
              cta: "View project",
            }}
          />
        </ul>
      </section>
    </CaseStudyShell>
  );
}
