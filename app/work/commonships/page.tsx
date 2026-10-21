import type { Metadata } from "next";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import CaseStudyTabs from "@/components/case-study/CaseStudyTabs";

export const metadata: Metadata = {
  title: "CommonShips — Sarana Davaa",
  description: "CommonShips",
};

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem Statement" },
  { id: "objectives", label: "Objectives" },
  { id: "principles", label: "Design Principles" },
  { id: "decisions", label: "Key Decisions" },
  { id: "scope", label: "Scope & Constraints" },
  { id: "metrics", label: "Success Metrics" },
  { id: "reflection", label: "Reflection" },
];

export default function Commonships() {
  return (
    <CaseStudyShell>
      <section className="project-hero">
        <div className="hero-container">
          <div className="hero-info-box">
            <div className="project-type">Case Study — 02</div>
            <h1 className="hero-h1">CommonShips</h1>
            <p className="body-copy-light" style={{ textAlign: "center", margin: "0 auto" }}>
              Volunteer Coordination Tool for Community-Focused Organizations
            </p>
          </div>
          <div className="hero-meta-row">
            <div className="hero-meta-item">
              <div className="hero-meta-label">Skills</div>
              <div className="hero-meta-value">
                Research, Product Strategy, UX/UI Design, Full-Stack Development
              </div>
            </div>
          </div>
          <div className="hero-before-after">
            <div className="cs-placeholder cs-placeholder--hero">
              Image placeholder — product screenshot of CommonShips
            </div>
          </div>
        </div>
      </section>

      <div className="cs-page">
        <CaseStudyTabs tabs={tabs} backHref="/" backLabel="Back to home" />

        <div className="cs-page-content">
          <section id="overview" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">01</div>
              <div className="cs-content">
                <h2 className="cs-h2">Overview</h2>
                <p className="cs-body">
                  CommonShips is a volunteer coordination platform for community-focused
                  organizations.
                  <br></br>
                  <br></br>
                  It&rsquo;s intended to make it clear and easy to contribute to a community, and
                  to be the system coordinators can rely on &mdash; replacing manual spreadsheets,
                  email threads, and text chains with automated coordination.
                </p>
              </div>
            </div>
          </section>

          <section id="problem" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">02</div>
              <div className="cs-content">
                <h2 className="cs-h2">Problem Statement</h2>
                <p className="cs-body">
                  Both organizations are seeing growth in community interest, but not in the
                  number of active volunteers. As a result, a small subset of volunteers absorbs a
                  disproportionate share of the workload, and coordinators absorb whatever is
                  left. It&rsquo;s a pattern that leads to coordinator burnout.
                </p>
                <p className="cs-body">
                  A review of both organizations&rsquo; sign-up records, combined with first-hand
                  experience as a volunteer, surfaced a consistent pattern:
                </p>
                <ul className="cs-list">
                  <li>
                    <strong>Recurring events are largely self-sustaining.</strong>{" "}Volunteers
                    typically commit to the same recurring slot and coordinate coverage informally
                    with other regulars when unavailable.
                  </li>
                  <li>
                    <strong>New and one-off events go unstaffed.</strong>{" "}These events have no
                    established volunteer base, and visibility is limited to whoever happens to
                    locate the relevant sign-up sheet.
                  </li>
                </ul>

                <div className="cs-image-frame">
                  <div className="cs-placeholder">
                    Chart placeholder — roles-per-person-chart.png
                    <br />
                    Average roles per active volunteer, Jan 2025 – Nov 2026
                  </div>
                </div>
                <p className="cs-body" style={{ fontSize: 13, color: "var(--ink-muted)" }}>
                  SF Dharma Collective sign-up records, Jan 2025 – Nov 2026. Figures are
                  approximate.
                </p>

                <p className="cs-body">
                  <strong>
                    The problem was never lack of volunteer interest, it was coordinator capacity
                  </strong>
                  : onboarding and training new volunteers, identifying who to contact, and, most
                  critically, sourcing a last-minute replacement role themselves when no one else
                  was available.
                </p>
              </div>
            </div>
          </section>

          <section id="objectives" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">03</div>
              <div className="cs-content">
                <h2 className="cs-h2">Objectives</h2>
                <ul className="cs-list">
                  <li>
                    <strong>Reduce the barrier to signing up for any volunteer</strong>
                    &mdash;new, occasional, or recurring&mdash;to broaden participation beyond the
                    current core group.
                  </li>
                  <li>
                    <strong>Provide a system coordinators can rely on</strong>{" "}to surface coverage
                    automatically when a volunteer cancels, without requiring manual follow-up.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="principles" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">04</div>
              <div className="cs-content">
                <h2 className="cs-h2">Design Principles</h2>
                <ul className="cs-list cs-list-bulleted">
                  <li>Sign-up is simple and unambiguous</li>
                  <li>Withdrawing a commitment carries no guilt cost</li>
                  <li>Coverage can be picked up easily by someone else</li>
                  <li>Coordinators can trust the system to manage the process</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="decisions" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">05</div>
              <div className="cs-content">
                <h2 className="cs-h2">Key Decisions</h2>
              </div>
            </div>

            <div className="cs-content-align" style={{ marginTop: 32 }}>
              <div className="cs-option-list">
                <div className="cs-option">
                  <div className="cs-placeholder" style={{ minHeight: 160 }}>
                    Screenshot placeholder — invite &amp; join flow
                  </div>
                  <div>
                    <h3 className="cs-h3">1. Private, Invitation-Based Workspaces</h3>
                    <p className="cs-card-desc">
                      Each organization gets a private, invite-only workspace. Coordinators import
                      existing contact lists; volunteers join with a single click.
                    </p>
                  </div>
                </div>

                <div className="cs-option">
                  <div className="cs-placeholder" style={{ minHeight: 160 }}>
                    Screenshot placeholder — one-tap sign-up
                  </div>
                  <div>
                    <h3 className="cs-h3">
                      2. Single-Tap Sign-Up with Minimal Onboarding
                    </h3>
                    <p className="cs-card-desc">
                      Onboarding requires only two data points: role preference and general
                      availability.
                    </p>
                  </div>
                </div>

                <div className="cs-option">
                  <div className="cs-placeholder" style={{ minHeight: 160 }}>
                    Screenshot placeholder — notification preferences &amp; opt-out
                  </div>
                  <div>
                    <h3 className="cs-h3">3. Notification Discipline by Design</h3>
                    <p className="cs-card-desc">
                      One reminder per commitment. Each volunteer is asked about a given shift
                      once. Every ask includes a one-click opt-out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="scope" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">06</div>
              <div className="cs-content">
                <h2 className="cs-h2">Scope &amp; Constraints</h2>
                <p className="cs-body">
                  To validate the core workflow quickly, the initial release is scoped to what SF
                  Dharma Collective alone needs to replace its spreadsheet for one month.
                  Everything else was designed, then deliberately held back:
                </p>
                <ul className="cs-list cs-list-bulleted">
                  <li>Notification preferences and a paused status for inactive volunteers</li>
                  <li>Announcements and reach outs</li>
                  <li>SMS notifications</li>
                  <li>Role-specific training and approval workflows</li>
                  <li>
                    <strong>A second organization.</strong> Hold off Berkeley Alembic&rsquo;s
                    onboarding, proving the workflow for one community first keeps the initial
                    release small enough to ship and learn quickly.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="metrics" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">07</div>
              <div className="cs-content">
                <h2 className="cs-h2">Success Metrics</h2>
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>KPI</th>
                      <th>Baseline (Fall 2026)</th>
                      <th>Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Unique volunteers signing up per month</td>
                      <td>~16</td>
                      <td>Increase</td>
                    </tr>
                    <tr>
                      <td>New/special events with an unfilled shift</td>
                      <td>13 events (Sep–Nov)</td>
                      <td>Decrease</td>
                    </tr>
                    <tr>
                      <td>Share of shifts held by the coordinators</td>
                      <td>~33%</td>
                      <td>Decrease</td>
                    </tr>
                    <tr>
                      <td>Cancellations resolved without coordinator intervention</td>
                      <td>Not currently tracked</td>
                      <td>Majority</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="reflection" className="cs-section cs-section-end">
            <div className="cs-row">
              <div className="cs-index">08</div>
              <div className="cs-content">
                <h2 className="cs-h2">Reflection</h2>
                <ul className="cs-check-list">
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span>
                    <span>
                      <strong>Coordinator capacity, not volunteer interest, was the binding
                      constraint.</strong>{" "}Designing around the coordinator&rsquo;s available
                      time and to lessen their manual work, rather than optimizing for sign-up
                      volume, informed every subsequent decision.
                    </span>
                  </li>
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span>
                    <span>
                      <strong>Existing informal behavior is a stronger design input than a
                      blank-slate solution.</strong>{" "}The most effective backfill mechanism
                      already existed as an ad hoc group text between regulars; CommonShips
                      formalizes and extends that pattern rather than replacing it.
                    </span>
                  </li>
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span>
                    <span>
                      <strong>Scoping down is a design decision, not a compromise.</strong>{" "}
                      Deferring the majority of the originally designed feature set was necessary
                      to get a working system into a real organization&rsquo;s hands.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </CaseStudyShell>
  );
}
