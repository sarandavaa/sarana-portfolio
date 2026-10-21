import type { Metadata } from "next";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import CaseStudyTabs from "@/components/case-study/CaseStudyTabs";

export const metadata: Metadata = {
  title: "Commonships — Sarana Davaa",
  description: "Commonships",
};

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem Statement" },
  { id: "objectives", label: "Objectives" },
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
            <h1 className="hero-h1">Commonships</h1>
            <p className="body-copy-light" style={{ textAlign: "center", margin: "0 auto" }}>
              SF Dharma Collective &amp; Berkeley Alembic — Volunteer Coordination Platform
            </p>
          </div>
          <div className="hero-meta-row">
            <div className="hero-meta-item">
              <div className="hero-meta-label">Role</div>
              <div className="hero-meta-value">Product Designer &amp; Developer (solo)</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">Timeline</div>
              <div className="hero-meta-value">2026, ongoing</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">Skills</div>
              <div className="hero-meta-value">
                Research, Product Strategy, UX/UI Design, Full-Stack Development
              </div>
            </div>
          </div>
          <div className="hero-before-after">
            <div className="cs-placeholder cs-placeholder--hero">
              Image placeholder — product screenshot of Commonships
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
                  Commonships is a volunteer coordination platform for community-focused
                  organizations. It&rsquo;s intended to make it clear and easy to contribute to a
                  community, and to be the system coordinators can rely on &mdash; replacing
                  manual spreadsheets, email threads, and text chains with automated coordination.
                </p>

                <div className="cs-card-grid">
                  <div className="cs-card">
                    <div className="cs-label">Role</div>
                    <div className="cs-card-desc">
                      Product designer and developer (solo); concurrent volunteer at SF Dharma
                      Collective
                    </div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">Scope</div>
                    <div className="cs-card-desc">
                      Research, product strategy, UX and UI design, front-end and back-end
                      development
                    </div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">Pilots</div>
                    <div className="cs-card-desc">
                      SF Dharma Collective, a community-run meditation center; Berkeley Alembic, a
                      community-focused spiritual learning center
                    </div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">Timeline</div>
                    <div className="cs-card-desc">2026, ongoing</div>
                  </div>
                  <div className="cs-card">
                    <div className="cs-label">Status</div>
                    <div className="cs-card-desc">MVP in deployment with SF Dharma Collective</div>
                  </div>
                </div>
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
                  left &mdash; a pattern that leads directly to coordinator burnout.
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
                  The constraint was never volunteer interest &mdash; it was coordinator capacity:
                  onboarding and training new volunteers, identifying who to contact, and, most
                  critically, sourcing a last-minute replacement or absorbing the role themselves
                  when no one else was available.
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

                <h3 className="cs-h3-serif">Design Principles</h3>
                <ul className="cs-list cs-list-bulleted">
                  <li>Sign-up is simple and unambiguous</li>
                  <li>Withdrawing a commitment carries no social cost</li>
                  <li>Coverage can be picked up easily by someone else</li>
                  <li>Coordinators can trust the system to manage the process</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="decisions" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">04</div>
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
                      Each organization operates within a private workspace, comparable to a
                      dedicated Slack instance. Coordinators import existing volunteer contact
                      lists; volunteers join with a single click and no password required.
                    </p>
                    <div className="cs-label" style={{ marginTop: 12 }}>
                      Rationale
                    </div>
                    <p className="cs-card-desc">
                      Onboarding should not require searching through historical email threads to
                      locate a sign-up link.
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
                      Onboarding collects only two data points: role preference and general
                      availability.
                    </p>
                    <div className="cs-label" style={{ marginTop: 12 }}>
                      Rationale
                    </div>
                    <p className="cs-card-desc">
                      Each additional onboarding question reduces conversion. These two inputs are
                      sufficient for the system to surface the right volunteers later.
                    </p>
                  </div>
                </div>

                <div className="cs-option">
                  <div className="cs-placeholder" style={{ minHeight: 160 }}>
                    Screenshot placeholder — coordinator outreach email
                  </div>
                  <div>
                    <h3 className="cs-h3">
                      3. Coordinator-Directed Outreach for Open Shifts
                    </h3>
                    <p className="cs-card-desc">
                      When a shift opens &mdash; whether from a cancellation or an unstaffed new
                      event &mdash; the coordinator receives a single email identifying likely
                      candidates, based on role history or stated availability, with a one-click
                      &ldquo;Ask&rdquo; action. The first volunteer to respond is confirmed, and
                      all parties are notified automatically.
                    </p>
                    <div className="cs-label" style={{ marginTop: 12 }}>
                      Rationale
                    </div>
                    <p className="cs-card-desc">
                      This formalizes a process regulars already manage informally, and extends it
                      to the full volunteer base. Not every open shift requires outreach, so the
                      system surfaces candidates while leaving the decision to the coordinator.
                      Because historical sign-up data is imported at setup, recommendations are
                      accurate from launch.
                    </p>
                  </div>
                </div>

                <div className="cs-option">
                  <div className="cs-placeholder" style={{ minHeight: 160 }}>
                    Screenshot placeholder — notification preferences &amp; opt-out
                  </div>
                  <div>
                    <h3 className="cs-h3">4. Notification Discipline by Design</h3>
                    <p className="cs-card-desc">
                      The system issues a single reminder per commitment, asks each volunteer
                      about a given open shift no more than once, and treats non-response as a
                      neutral outcome. Every outreach includes a one-click opt-out for that
                      specific request.
                    </p>
                    <div className="cs-label" style={{ marginTop: 12 }}>
                      Rationale
                    </div>
                    <p className="cs-card-desc">
                      Volunteers who feel pressured for declining a request are less likely to
                      sign up again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="scope" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">05</div>
              <div className="cs-content">
                <h2 className="cs-h2">Scope &amp; Constraints</h2>
                <p className="cs-body">
                  To validate the core workflow quickly, the initial release is scoped to what one
                  organization needs to operate without a spreadsheet for one month. The following
                  were designed but deferred to a later release:
                </p>
                <ul className="cs-list cs-list-bulleted">
                  <li>Role-specific training and approval workflows</li>
                  <li>Notification preferences and a paused status for inactive volunteers</li>
                  <li>Organization-wide announcement emails</li>
                  <li>SMS notifications</li>
                  <li>Berkeley Alembic&rsquo;s onboarding</li>
                </ul>

                <h3 className="cs-h3-serif">Initial Design Direction (Discarded)</h3>
                <div className="cs-image-frame">
                  <div className="cs-placeholder">
                    Image placeholder — early browse-card design direction (discarded)
                  </div>
                </div>
                <p className="cs-body">
                  An earlier iteration redesigned the volunteer home screen around a browsable,
                  Luma-inspired event-card layout. While visually polished, it was designed for
                  the wrong user: recurring volunteers already know their slot and have no need to
                  browse, while the volunteers who do need visibility &mdash; newcomers and
                  occasional contributors &mdash; needed a list of open shifts, not an event
                  gallery.
                </p>
              </div>
            </div>
          </section>

          <section id="metrics" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">06</div>
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
                      <td>Share of shifts held by the coordinator</td>
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
                <p className="cs-body">
                  Commonships will launch with SF Dharma Collective first. Results will be
                  incorporated into this case study following an initial four-week deployment
                  period.
                </p>
              </div>
            </div>
          </section>

          <section id="reflection" className="cs-section cs-section-end">
            <div className="cs-row">
              <div className="cs-index">07</div>
              <div className="cs-content">
                <h2 className="cs-h2">Reflection</h2>
                <ul className="cs-check-list">
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span>
                    <span>
                      <strong>Coordinator capacity, not volunteer interest, was the binding
                      constraint.</strong>{" "}Designing around the coordinator&rsquo;s available
                      time, rather than optimizing for sign-up volume, informed every subsequent
                      decision.
                    </span>
                  </li>
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span>
                    <span>
                      <strong>Existing informal behavior is a stronger design input than a
                      blank-slate solution.</strong>{" "}The most effective backfill mechanism
                      already existed as an ad hoc group text between regulars; Commonships
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
