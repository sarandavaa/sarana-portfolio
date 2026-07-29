import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import FlowField from "@/components/FlowField";
import "@/components/case-study/case-study.css";

export const metadata: Metadata = {
  title: "Sites Page Redesign — Sarana Davaa",
  description: "Sites Page Redesign",
};

export default function SitesRedesign() {
  return (
    <>
      <FlowField />
      <div className="ambient-wrap">
        <div className="case-study">
          <Nav current="sub" variant="light" />
          <section className="project-hero">
            <div className="hero-container">
              <div className="hero-info-box">
                <div className="project-type">interaction design</div>
                <div>
                  <h1 className="hero-h1">Sites Page Redesign</h1>
                </div>
                <a href="#" className="link hero-link">
                  Verkada - Physical Security Platform
                </a>
              </div>
              <div className="before-after-grid">
                <img
                  src="/images/before.png"
                  loading="lazy"
                  width={3000}
                  sizes="100vw"
                  alt=""
                  srcSet="/images/before-p-500.png 500w, /images/before-p-800.png 800w, /images/before-p-1080.png 1080w, /images/before-p-1600.png 1600w, /images/before-p-2000.png 2000w, /images/before-p-2600.png 2600w, /images/before.png 2823w"
                  className="img-rounded-mobile-left"
                />
                <img
                  src="/images/after.png"
                  loading="lazy"
                  width={3000}
                  sizes="100vw"
                  alt=""
                  srcSet="/images/after-p-500.png 500w, /images/after-p-800.png 800w, /images/after-p-1080.png 1080w, /images/after-p-1600.png 1600w, /images/after-p-2000.png 2000w, /images/after-p-2600.png 2600w, /images/after.png 2823w"
                  className="img-rounded-mobile-right"
                />
              </div>
            </div>
          </section>

          <section className="project-background-section">
            <div className="section-heading">
              <h1 className="section-heading-accent">Project Background</h1>
            </div>
            <div className="slide-container">
              <div className="two-column-wrapper">
                <div className="column-left-text">
                  <p className="body-copy-light">
                    Verkada provides enterprise <strong>physical security solutions</strong>,
                    including video surveillance, door access control, air quality monitoring,
                    alarms, intercoms, and visitor management system. <br />
                    <br />
                    ‍<strong>The Sites page</strong>—a tool for organizing devices and managing user
                    permissions—plays a critical role in shaping the overall platform user experience.
                    It was unscalable, spreadsheet-like interface that lacked usability, especially on
                    mobile. <br />
                    <br />
                    My goal was to{" "}
                    <strong>redesign it into a clean, intuitive, and scalable solution</strong> that
                    enhances efficiency, accessibility, and the overall ease of managing security
                    infrastructure.
                  </p>
                </div>
                <div className="image-panel image-panel-variant-4">
                  <img
                    src="/images/220605_Family_onWhite_centered_str8_Command.png"
                    loading="lazy"
                    sizes="(max-width: 4000px) 100vw, 4000px"
                    srcSet="/images/220605_Family_onWhite_centered_str8_Command-p-500.png 500w, /images/220605_Family_onWhite_centered_str8_Command-p-800.png 800w, /images/220605_Family_onWhite_centered_str8_Command-p-1080.png 1080w, /images/220605_Family_onWhite_centered_str8_Command-p-1600.png 1600w, /images/220605_Family_onWhite_centered_str8_Command-p-2000.png 2000w, /images/220605_Family_onWhite_centered_str8_Command-p-2600.png 2600w, /images/220605_Family_onWhite_centered_str8_Command-p-3200.png 3200w, /images/220605_Family_onWhite_centered_str8_Command.png 4000w"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="slide-container">
              <div className="subsection-heading">
                <h1 className="subsection-heading-white">What is Site?</h1>
              </div>
              <div className="two-column-wrapper column-text-right">
                <div className="image-panel image-panel-variant-5">
                  <img
                    src="/images/Sites.png"
                    loading="lazy"
                    sizes="(max-width: 1265px) 100vw, 1265px"
                    srcSet="/images/Sites-p-500.png 500w, /images/Sites-p-800.png 800w, /images/Sites-p-1080.png 1080w, /images/Sites.png 1265w"
                    alt=""
                    className="panel-image"
                  />
                </div>
                <div className="column-left-text">
                  <p className="body-copy-light">
                    Sites offer a structured <strong>way to organize devices</strong>, making it
                    easier for users to find, monitor, and manage them. Typically, devices within the
                    same physical location are grouped into a site, creating a logical hierarchy.
                    <br />
                    ‍<br />
                    For example, in a school district, each school would be a site, while individual
                    floors could be nested as sub-sites, allowing for more granular organization and
                    control.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="why-redesign">
            <div className="section-heading">
              <h1 className="section-heading-dark">Why redesign?</h1>
            </div>
            <div className="slide-container">
              <div className="two-column-wrapper">
                <div className="column-left-text">
                  <h1 className="subsection-heading-dark">Not usable on mobile 📱</h1>
                  <ul role="list" className="list-dark">
                    <li className="list-item-dark">
                      Admins rely on the Sites page for multiple use cases, making mobile usability a
                      necessity rather than a convenience.
                      <br />
                    </li>
                    <li className="list-item-dark">
                      By 2023, users expect SaaS platforms to support core functions on mobile, and
                      the existing experience fell short of that standard.
                    </li>
                  </ul>
                </div>
                <div className="image-panel-half frame-yellow-blue centered-image">
                  <img
                    src="/images/Sites-Mobile-Problem.png"
                    loading="lazy"
                    sizes="(max-width: 572px) 100vw, 572px"
                    srcSet="/images/Sites-Mobile-Problem-p-500.png 500w, /images/Sites-Mobile-Problem.png 572w"
                    alt=""
                    className="photo-framed centered-image"
                  />
                </div>
              </div>
            </div>
            <div className="slide-container">
              <div className="two-column-wrapper column-text-right">
                <div className="image-panel-half frame-purple-multi">
                  <img
                    src="/images/Not-scalable.png"
                    loading="lazy"
                    sizes="(max-width: 1000px) 100vw, 1000px"
                    srcSet="/images/Not-scalable-p-500.png 500w, /images/Not-scalable-p-800.png 800w, /images/Not-scalable.png 1000w"
                    alt=""
                    className="photo-framed centered-image"
                  />
                </div>
                <div className="column-text-right">
                  <h1 className="subsection-heading-dark">Not scalable 🫷🏼</h1>
                  <ul role="list" className="list">
                    <li className="list-item-dark">
                      Each time Verkada launched a new product, a new column was added to the Sites
                      page. This approach became unmanageable as the product ecosystem grew.
                      <br />
                    </li>
                    <li className="list-item-dark">
                      Some products were missing, preventing a unified view of all devices under a
                      site.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="slide-container">
              <div className="two-column-wrapper">
                <div className="column-left-text">
                  <h1 className="subsection-heading-dark">Not aligned with Verkada 3.0 💅🏻</h1>
                  <p className="body-copy-tight">
                    The Sites page looked outdated and didn&rsquo;t reflect the refined aesthetics of
                    Verkada&rsquo;s latest design system. It needed a visual and structural update to
                    stay consistent.
                  </p>
                </div>
                <div className="image-panel-half image-panel-variant-5">
                  <img
                    src="/images/Verkada-Command.png"
                    loading="lazy"
                    sizes="(max-width: 1092px) 100vw, 1092px"
                    srcSet="/images/Verkada-Command-p-500.png 500w, /images/Verkada-Command-p-800.png 800w, /images/Verkada-Command-p-1080.png 1080w, /images/Verkada-Command.png 1092w"
                    alt=""
                    className="photo-framed centered-image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="research">
            <div className="section-heading">
              <h1 className="section-heading-accent">Research</h1>
            </div>
            <div className="image-collage frame-purple">
              <img
                src="/images/research.png"
                loading="lazy"
                id="research-photo-main"
                sizes="(max-width: 1141px) 100vw, 1141px"
                alt=""
                srcSet="/images/research-p-500.png 500w, /images/research-p-800.png 800w, /images/research-p-1080.png 1080w, /images/research.png 1141w"
                className="research-photo-main"
              />
              <img
                src="/images/sarana-desk-3.png"
                loading="lazy"
                id="research-photo-desk"
                alt=""
                className="research-photo-desk"
              />
              <img
                src="/images/Sites-low-fi-sketch-1.png"
                loading="lazy"
                id="research-photo-sketch"
                alt=""
                className="research-photo-sketch"
              />
              <img
                src="/images/sarana-desk-4.png"
                loading="lazy"
                id="research-photo-desk-2"
                alt=""
                className="research-photo-desk-2"
              />
            </div>
            <section className="slide-container with-big-title">
              <div className="subsection-heading">
                <h1 className="subsection-heading-white">Research Process &amp; Outcomes</h1>
              </div>
              <section className="two-column-wrapper">
                <div className="column-left-text">
                  <ul role="list" className="list-white">
                    <li className="list-item">
                      <strong>UX Audit</strong> – Identified usability issues in the existing design
                    </li>
                    <li className="list-item">
                      <strong>Hypothesis Development</strong> – Defined key assumptions to validate
                    </li>
                    <li className="list-item">
                      <strong>Research Questions</strong> – Focused inquiries to guide the redesign
                    </li>
                    <li className="list-item">
                      <strong>Low-Fi Sketches</strong> – Early explorations of design concepts
                    </li>
                    <li className="list-item">
                      <strong>Stakeholder Interviews</strong> – Gathered internal perspectives{" "}
                    </li>
                    <li className="list-item">
                      <strong>Design Interviews</strong> – Aligned with past design decisions and team
                      insights
                    </li>
                    <li className="list-item">
                      <strong>Interviews with Solutions Engineers</strong> – to understand real-world
                      customer use cases, particularly in large enterprises.
                    </li>
                    <li className="list-item">
                      <strong>Customer Interviews</strong> – Uncovered real user stories, needs, and
                      pain points
                    </li>
                  </ul>
                </div>
                <div className="image-panel image-panel-variant-pink">
                  <img
                    src="/images/scribble.png"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    srcSet="/images/scribble-p-500.png 500w, /images/scribble.png 1024w"
                    alt=""
                    className="research-scribble-photo"
                  />
                  <div className="caption-text">
                    <a href="#" className="credit-link">
                      www.designsquiggle.com
                    </a>
                  </div>
                </div>
              </section>
            </section>
            <section className="slide-container">
              <div className="subsection-heading">
                <h1 className="subsection-heading-white">Research Questions</h1>
              </div>
              <section className="two-column-wrapper">
                <div className="centered-image left-aligned">
                  <div className="frame-dark">
                    <img src="/images/question-compass.png" loading="lazy" alt="" className="photo-fixed-240" />
                  </div>
                </div>
                <div className="column-left-text text-column-wide">
                  <ul role="list" className="list-white">
                    <li className="list-item">
                      <strong>Key Jobs To Be Done – </strong>What are the main jobs users accomplish
                      on the Sites page?
                    </li>
                    <li className="list-item">
                      <strong>Usability Issues </strong>– What obstacles make the current design
                      difficult to use?
                    </li>
                    <li className="list-item">
                      <strong>Opportunities </strong>– Could the Sites page serve a greater purpose?
                    </li>
                    <li className="list-item">
                      <strong>Prioritization </strong>– What elements are unnecessary and could be
                      removed or hidden?
                    </li>
                  </ul>
                </div>
              </section>
            </section>
          </section>

          <section className="learnings">
            <div className="section-heading">
              <h1 className="section-heading-dark">Learnings</h1>
            </div>
            <div className="slide-container">
              <div className="two-column-wrapper">
                <div className="column-left-text">
                  <div className="emoji-title-wrap">
                    <h1 className="subsection-heading-dark">
                      <strong>Key Jobs To Be Done</strong> 💼{" "}
                    </h1>
                  </div>
                  <p className="body-copy">
                    Org Admins and Site Admins use the Sites page primarily{" "}
                    <strong>to structure and restructure sites</strong>. Their key tasks include:
                  </p>
                  <ul role="list" className="list-dark">
                    <li className="list-item-dark">
                      <strong>Creating Sites &amp; Subsites</strong>
                      <br />
                    </li>
                    <li className="list-item-dark">
                      <strong>Naming &amp; Renaming Sites</strong>
                    </li>
                    <li className="list-item-dark">
                      <strong>Restructuring Sites</strong>, such as: <br />
                      • Breaking down a site into multiple subsites
                      <br />• Moving a subsite under a different site
                    </li>
                    <li className="list-item-dark">
                      <strong>Viewing &amp; Managing User Permissions</strong>
                    </li>
                  </ul>
                </div>
                <div className="image-panel image-panel-variant-6">
                  <img
                    src="/images/Learnings-1.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="/images/Learnings-1-p-500.png 500w, /images/Learnings-1-p-800.png 800w, /images/Learnings-1.png 847w"
                    alt=""
                    className="photo-framed image-panel-variant-6"
                  />
                </div>
              </div>
            </div>
            <div className="slide-container">
              <div className="two-column-wrapper column-text-right">
                <div className="image-panel">
                  <div className="frustration-grid frame-dark-purple">
                    <img
                      src="/images/frustrating-img-1.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="/images/frustrating-img-1-p-500.png 500w, /images/frustrating-img-1.png 516w"
                      alt=""
                      className="frustration-photo-1"
                    />
                    <img
                      src="/images/frustrating-img-2.png"
                      loading="lazy"
                      id="frustration-photo-2"
                      alt=""
                      className="frustration-photo-2"
                    />
                  </div>
                </div>
                <div className="column-text-right">
                  <div className="emoji-title-wrap">
                    <h1 className="subsection-heading-dark">
                      <strong>Usability Issues </strong> 😖
                    </h1>
                  </div>
                  <ul role="list" className="list">
                    <li className="list-item-dark">
                      <strong>Cumbersome Restructuring</strong> – Users must remove all devices and
                      subsites before deleting a site, making the process tedious.
                      <br />
                    </li>
                    <li className="list-item-dark">
                      <strong>Disjointed Workflow</strong> – Restructuring requires switching between
                      multiple pages to move devices and manage permissions.
                    </li>
                    <li className="list-item-dark">
                      <strong>No Bulk Actions </strong>– Users must make changes one by one, adding to
                      the frustration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <section className="slide-container">
              <div className="subsection-heading">
                <h1 className="subsection-heading-dark">
                  <strong>Insight Evidences 👀</strong>
                </h1>
              </div>
              <div className="quote-grid">
                <p className="quote-in-grid-transparent">
                  Designers who previously worked on Sites page recommended to{" "}
                  <strong>make changing the structure of the sites easier</strong>.
                </p>
                <p className="quote-in-grid-purple">
                  I don&rsquo;t know why but one of the largest customers{" "}
                  <strong>move about 10 subsites to another site every year</strong>.-Loren Garby,
                  Solutions Engineering Manager
                </p>
                <p className="quote-in-grid-transparent">
                  A customer who experienced frustration restructuring their sites requested{" "}
                  <strong>ability to drag and drop to move sites</strong> (and subsites) at a customer
                  conference.
                </p>
                <p className="quote-in-grid-purple">
                  The ability to move a nested site out of the tree.{" "}
                  <strong>
                    Changing hierarchy of sites without having to delete the site and re-creating in
                  </strong>
                  . This is so that users wouldn&rsquo;t have to re-add all devices and reset
                  configurations.
                  <br /> - Alex Hsieh, Software Engineer
                </p>
                <p className="quote-in-grid-transparent">
                  <strong>
                    Joel (Solutions Engineer) is writing custom script for an enterprise customer with
                    700+ sites to assist them changing the structure of their sites.{" "}
                  </strong>
                </p>
                <p className="quote-in-grid-purple">
                  We see cases where customers set up their site structure in one way, then they
                  learn more about how things work, and then they change the structure. Think about{" "}
                  <strong>how they can easily move devices between sites, also moving the permissions.</strong>
                  <br />- John, VP Design
                </p>
                <p className="quote-in-grid-transparent">
                  <strong>Naming conventions are very important for us.</strong> We iterated naming
                  conventions and site structure multiple times.
                  <br />- IT Director, REC
                </p>
                <p className="quote-in-grid-purple">
                  Device count has importance. When structuring and restructuring the sites,{" "}
                  <strong>it is helpful to see how many and what type of devices are in the site.</strong>
                  <br />- Victor, Principal designer
                </p>
                <p className="quote-in-grid-transparent">
                  I had a customer who reached out to me asking for help to restructure their sites
                  because they just couldn&rsquo;t figure it out. <br />- Derrick - Solutions Engineer
                  <br />
                </p>
              </div>
            </section>
            <section className="slide-container">
              <div className="subsection-heading no-margin">
                <h1 className="subsection-heading-dark">
                  <strong>Additional Findings ✨</strong>
                </h1>
              </div>
              <div className="two-column-wrapper">
                <div className="column-left-text wrapped">
                  <ul role="list" className="list">
                    <li className="list-item-dark">
                      <strong>Potential as a Home Page </strong>– Verkada currently defaults to the
                      Camera page as the home screen, the Sites page could evolve into a true
                      homepage, providing an overview of all sites, critical insights, and navigation.
                      <br />
                    </li>
                    <li className="list-item-dark">
                      <strong>Adding Floorplan </strong>– Floorplans are site based. Adding floor plan
                      integration would enhance site management.
                    </li>
                    <li className="list-item-dark">
                      <strong>Ability to pin site </strong>– For those managing many sites, the
                      ability to pin or star important sites at the top would improve efficiency.
                    </li>
                    <li className="list-item-dark">
                      <strong>Site Data Export </strong>– Users need to export site data for security
                      and compliance reporting.
                    </li>
                  </ul>
                </div>
                <div className="centered-image">
                  <div className="frame-dark-purple">
                    <img src="/images/Potential.png" loading="lazy" alt="" className="photo-fixed-240" />
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="exploration">
            <div className="section-heading">
              <h1 className="section-heading-accent">Exploration</h1>
            </div>
            <div className="image-panel-full">
              <img
                src="/images/Explorations.png"
                loading="lazy"
                sizes="100vw"
                srcSet="/images/a4ab35076bd5d1f5d7996e4daf890b8a_Explorations-p-500.png 500w, /images/a4ab35076bd5d1f5d7996e4daf890b8a_Explorations-p-800.png 800w, /images/a4ab35076bd5d1f5d7996e4daf890b8a_Explorations-p-1080.png 1080w, /images/a4ab35076bd5d1f5d7996e4daf890b8a_Explorations-p-1600.png 1600w, /images/a4ab35076bd5d1f5d7996e4daf890b8a_Explorations-p-2000.png 2000w, /images/a4ab35076bd5d1f5d7996e4daf890b8a_Explorations-p-2600.png 2600w, /images/a4ab35076bd5d1f5d7996e4daf890b8a_Explorations-p-3200.png 3200w, /images/Explorations.png 4780w"
                alt=""
              />
            </div>
            <div className="slide-container">
              <div className="subsection-heading">
                <h1 className="subsection-heading-plain">Prioritization</h1>
              </div>
              <div className="two-column-wrapper">
                <div>
                  <p className="body-copy-light">
                    Explored 3 different options for immediate visibility for the sites because making
                    site management easy meant different things for different people.
                  </p>
                  <img
                    src="/images/prioritization.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="/images/prioritization-p-500.png 500w, /images/prioritization.png 602w"
                    alt=""
                  />
                </div>
                <div className="image-panel-half">
                  <img
                    src="/images/Priority.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="/images/Priority-p-500.png 500w, /images/Priority-p-800.png 800w, /images/Priority-p-1080.png 1080w, /images/Priority.png 1400w"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="slide-container">
              <div className="subsection-heading">
                <h1 className="subsection-heading-plain">Layout Exploration </h1>
              </div>
              <div className="vertical-wrapper">
                <div>
                  <p className="body-copy-light">
                    Explored 3 different options for immediate visibility for the sites because making
                    site management easy meant different things for different people.
                  </p>
                </div>
                <div className="layout-comparison-grid">
                  <div
                    id="layout-panel-view"
                    className="layout-comparison-item"
                  >
                    <img
                      src="/images/Panel-View.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="/images/Panel-View-p-500.png 500w, /images/Panel-View-p-800.png 800w, /images/Panel-View-p-1080.png 1080w, /images/Panel-View.png 1400w"
                      alt=""
                    />
                    <div>Panel View</div>
                  </div>
                  <div
                    id="layout-expanded-list"
                    className="layout-comparison-item"
                  >
                    <img
                      src="/images/Expanded-list-view.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="/images/Expanded-list-view-p-500.png 500w, /images/Expanded-list-view-p-800.png 800w, /images/Expanded-list-view-p-1080.png 1080w, /images/Expanded-list-view.png 1400w"
                      alt=""
                    />
                    <div>Expanded List View</div>
                  </div>
                  <div
                    id="layout-toggle-view"
                    className="layout-comparison-item"
                  >
                    <img
                      src="/images/Property-1Panel-view.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="/images/Property-1Panel-view-p-500.png 500w, /images/Property-1Panel-view-p-800.png 800w, /images/Property-1Panel-view-p-1080.png 1080w, /images/Property-1Panel-view.png 1400w"
                      alt=""
                    />
                    <div>Toggle View (Panel &amp; List)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-container">
              <div className="subsection-heading">
                <h1 className="subsection-heading-plain">Final Design</h1>
              </div>
              <div className="vertical-wrapper">
                <div>
                  <p className="body-copy-light">
                    Explored 3 different options for immediate visibility for the sites because making
                    site management easy meant different things for different people.
                  </p>
                </div>
              </div>
              <div className="image-panel-full frame-colorful">
                <img
                  src="/images/Final-Design.png"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="/images/Final-Design-p-500.png 500w, /images/Final-Design-p-800.png 800w, /images/Final-Design-p-1080.png 1080w, /images/Final-Design-p-1600.png 1600w, /images/Final-Design.png 1728w"
                  alt=""
                />
              </div>
            </div>
            <div className="slide-container">
              <div className="subsection-heading">
                <h1 className="subsection-heading-plain">Outcome</h1>
              </div>
              <div className="two-column-wrapper">
                <div className="column-left-text">
                  <div className="column-left-text">
                    <ul role="list" className="list-dark">
                      <li className="checklist-item">
                        ✅ Responsive on mobile 📱
                        <br />
                      </li>
                      <li className="checklist-item">
                        ✅ Scalable design 🙌🏻
                        <br />
                      </li>
                      <li className="checklist-item">
                        ✅ Aligned with current design system 💅🏻
                        <br />
                      </li>
                      <li className="checklist-item">
                        ✅ Easy to view and edit user permissions 😌
                        <br />
                      </li>
                      <li className="checklist-item">
                        ✅ Easier to change the site structure 😌
                        <br />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="image-panel image-panel-variant-7">
                  <img
                    src="/images/FInal-Outcome.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="/images/FInal-Outcome-p-500.png 500w, /images/FInal-Outcome-p-800.png 800w, /images/FInal-Outcome.png 945w"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="slide-container">
              <div className="subsection-heading">
                <h1 className="subsection-heading-plain">Additional updates &amp; Constraints</h1>
              </div>
              <div className="two-column-wrapper">
                <div className="column-left-text">
                  <ul role="list" className="list-dark">
                    <li className="list-item">
                      <strong>Bandwidth Settings Added</strong> – Introduced mid-project as a new
                      requirement.
                      <br />
                    </li>
                    <li className="list-item">
                      <strong>Drag &amp; Drop Rejected </strong>– Denied due to technical limitations.
                      <br />
                    </li>
                    <li className="list-item">
                      <strong>Bulk Actions Not Supported</strong> – Limited back-end engineering
                      resources prevented implementation.
                      <br />
                    </li>
                    <li className="list-item">
                      <strong>Duplicate Function Backlogged</strong> – Feature to copy sites/subsites
                      with the same permissions was added to the backlog.
                      <br />
                    </li>
                  </ul>
                </div>
                <div className="centered-image">
                  <img src="/images/roadblock.png" loading="lazy" alt="" className="roadblock-photo" />
                </div>
              </div>
            </div>
          </section>

          <section className="next-project-section">
            <div className="section-heading">
              <h2 className="section-heading-accent">Next Project</h2>
            </div>
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
              <div className="image-panel image-panel-variant-2">
                <img
                  className="mobile-img"
                  src="/images/vape_detected_alert.png"
                  width={222}
                  alt="Verkada Sites page"
                  sizes="(max-width: 479px) 100vw, 222px"
                  loading="eager"
                  srcSet="/images/vape_detected_alert-p-500.png 500w, /images/vape_detected_alert-p-800.png 800w, /images/vape_detected_alert-p-1080.png 1080w, /images/vape_detected_alert-p-1600.png 1600w, /images/vape_detected_alert.png 1745w"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
