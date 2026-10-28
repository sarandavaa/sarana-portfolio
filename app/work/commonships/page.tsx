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
                  It&rsquo;s intension is to make it clear and easy to contribute to a community,
                  and to be the system coordinators can rely on. Current workflow involves manual
                  spreadsheets, email threads, and text chains.
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
                    come across the relevant sign-up sheet or open.
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
                  : identifying who to contact, sourcing a last-minute replacement, covering
                  shifts when no one else was available, and onboarding and training new
                  volunteers. How may we reduce coordinator&rsquo;s attentional and manual
                  workload and give them more time and space?
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
                    <strong>Reduce the barrier to signing up for any volunteer</strong>: new,
                    occasional, or recurring and broaden participation beyond the current core
                    group.
                  </li>
                  <li>
                    <strong>Make it easy and guilt free to cancel</strong>: trust the system to
                    notify relevant people and someone will pick it up.
                  </li>
                  <li>
                    <strong>Surface coverage automatically</strong>: when a volunteer cancels, the
                    system will reach out to people that may be able to cover without requiring
                    coordinator&rsquo;s manual follow-up.
                  </li>
                  <li>
                    <strong>Provide a system coordinators can rely on:</strong> get
                    coordinator&rsquo;s attention when there is coverage at risk.
                  </li>
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
              <div className="cs-index">05</div>
              <div className="cs-content">
                <h2 className="cs-h2">Scope &amp; Constraints</h2>
                <p className="cs-body">
                  V1 &mdash; this release &mdash; answers two of the four objectives above:
                  reducing the barrier to sign up (Decisions 1 and 2) and making cancellation
                  guilt-free (Decision 3). It&rsquo;s scoped to what SF Dharma Collective alone
                  needs to replace its spreadsheet for one month. The remaining two objectives,
                  and the second organization named in the problem statement, are sequenced into
                  later phases rather than cut:
                </p>

                <p className="cs-body">
                  <strong>V2 &mdash; close the coverage loop.</strong> The two objectives V1
                  doesn&rsquo;t yet deliver: surfacing coverage automatically, and getting
                  coordinators&rsquo; attention when a shift is at risk.
                </p>
                <ul className="cs-list cs-list-bulleted">
                  <li>Automated outreach to a wider volunteer pool when a shift goes unstaffed</li>
                  <li>Notification preferences and a paused status for inactive volunteers</li>
                  <li>Role-specific training and approval workflows</li>
                </ul>

                <p className="cs-body">
                  <strong>V3 &mdash; expand reach and scale.</strong> Berkeley Alembic, the second
                  organization from the problem statement, comes on once the workflow is proven
                  with one community.
                </p>
                <ul className="cs-list cs-list-bulleted">
                  <li>Announcements and reach-outs</li>
                  <li>SMS notifications</li>
                  <li>Berkeley Alembic&rsquo;s onboarding</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="metrics" className="cs-section">
            <div className="cs-row">
              <div className="cs-index">06</div>
              <div className="cs-content">
                <h2 className="cs-h2">Success Metrics</h2>
                <p className="cs-body">
                  Two of these track the objectives V1 was scoped to deliver &mdash; signing up,
                  and canceling without pulling the coordinator in. The other two are the broader
                  signal from the problem statement: whether coordinator capacity is actually
                  freeing up.
                </p>
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
              <div className="cs-index">07</div>
              <div className="cs-content">
                <h2 className="cs-h2">Reflection</h2>
                <ul className="cs-check-list">
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span>
                    <span>
                      <strong>Coordinator capacity, not volunteer interest, was the binding
                      constraint.</strong>{" "}Designing around the coordinator&rsquo;s available
                      time and workload, rather than optimizing for sign-up volume, informed
                      every subsequent decision.
                    </span>
                  </li>
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span>
                    <span>
                      <strong>Existing informal behavior is a stronger design input than a
                      blank-slate solution.</strong>{" "}The most effective backfill mechanism
                      already existed as an ad hoc group text between regulars; V2&rsquo;s
                      automated outreach is designed to formalize and extend that pattern rather
                      than replace it.
                    </span>
                  </li>
                  <li className="cs-check-item">
                    <span className="cs-check-mark">✓</span>
                    <span>
                      <strong>Scoping down is a design decision, not a compromise.</strong>{" "}
                      Sequencing the rest into V2 and V3, rather than cutting it, was what got a
                      working system into a real organization&rsquo;s hands fast.
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
