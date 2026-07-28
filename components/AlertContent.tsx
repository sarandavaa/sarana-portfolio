"use client";

import Link from "next/link";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import SectionHeading from "@/components/case-study/SectionHeading";
import TwoColumnSection from "@/components/case-study/TwoColumnSection";
import ImagePanel from "@/components/case-study/ImagePanel";
import { useFadeIn } from "@/components/FadeIn";

export default function AlertContent() {
  const keyProblemsHeading = useFadeIn<HTMLHeadingElement>();
  const screenshotBlock = useFadeIn<HTMLDivElement>(0.15);
  const goalImageBlock = useFadeIn<HTMLDivElement>();
  const alertMobileImg = useFadeIn<HTMLImageElement>();

  return (
    <CaseStudyShell>
      <CaseStudyHero
        title={
          <>
            Security Alert <br />
            Mobile Design
          </>
        }
        linkHref="#"
        linkLabel="Verkada - Physical Security Platform"
        beforeSrc="/images/alert-before.png"
        beforeSrcSet="/images/81513995325b311293d6f9f7d52212da_alert-before-p-500.png 500w, /images/81513995325b311293d6f9f7d52212da_alert-before-p-800.png 800w, /images/81513995325b311293d6f9f7d52212da_alert-before-p-1080.png 1080w, /images/alert-before.png 1122w"
        afterSrc="/images/alert-after.png"
        afterSrcSet="/images/565decded03bb6b95343dd296af6bc92_alert-after-p-500.png 500w, /images/565decded03bb6b95343dd296af6bc92_alert-after-p-800.png 800w, /images/565decded03bb6b95343dd296af6bc92_alert-after-p-1080.png 1080w, /images/alert-after.png 1122w"
      />

      <section className="project-background-section">
        <SectionHeading variant="section-heading-accent">Project Background</SectionHeading>
        <TwoColumnSection>
          <div className="column-left-text">
            <p className="body-copy-light">
              Before the Verkada 3.0 redesign, security alerts—such as motion detection, door
              tampering, and vape detection—were scattered across individual product pages, making
              it difficult for users to get a clear, comprehensive view of incidents. The new{" "}
              <strong>Alerts Page consolidates all alerts into a single, intuitive hub,</strong>{" "}
              improving visibility, streamlining investigations, and reducing cognitive load.
              <br />
              ‍<br />
              As a Product Designer, I ensured a seamless migration to the unified Alerts Page by
              maintaining{" "}
              <strong>
                design consistency, optimizing for mobile usability, and enhancing the overall
                user experience.
              </strong>
            </p>
          </div>
          <ImagePanel
            wrapperClassName="image-panel-md"
            src="/images/Alert-types.png"
            sizes="(max-width: 547px) 100vw, 547px"
            srcSet="/images/fc9b492b3c3430f4849591bf2a0ef43f_Alert-types-p-500.png 500w, /images/Alert-types.png 547w"
            imgClassName="alert-types-photo"
          />
        </TwoColumnSection>
      </section>

      <section className="why-redesign light-bright">
        <div className="w-layout-blockcontainer slide-container-vertical w-container">
          <SectionHeading
            as="subsection"
            tag="h1"
            variant="section-heading-dark"
            headingRef={keyProblemsHeading.ref}
            headingStyle={keyProblemsHeading.style}
          >
            Key Problems
          </SectionHeading>
          <div className="two-column-wrapper">
            <div className="problem">
              <div className="problem-block">
                <h1 className="problem-heading">🔹 Inconsistent Design Patterns </h1>
                <div className="problem-text">Each product had its own unique alert design</div>
              </div>
              <div className="problem-block">
                <h1 className="problem-heading">🔹 Mobile responsiveness</h1>
                <div className="problem-text">
                  Some designs were not optimized for mobile users, impacting usability on smaller
                  screens.
                </div>
              </div>
              <div className="problem-block">
                <h1 className="problem-heading">🔹 Lack of Contextual Information</h1>
                <div className="problem-text">
                  Alerts often lacked the necessary details for users to assess urgency and take
                  action.
                </div>
              </div>
            </div>
            <div className="image-panel-sm">
              <img
                src="/images/Business-Problem.gif"
                loading="lazy"
                alt=""
                className="business-problem-photo"
              />
            </div>
          </div>
          <ImagePanel
            wrapperClassName="image-panel-full-alt"
            wrapperRef={screenshotBlock.ref}
            wrapperStyle={screenshotBlock.style}
            src="/images/Screenshot-2025-04-10-at-4.23.50-PM.png"
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
            srcSet="/images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-500.png 500w, /images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-800.png 800w, /images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-1080.png 1080w, /images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-1600.png 1600w, /images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-2000.png 2000w, /images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-2600.png 2600w, /images/Screenshot-2025-04-10-at-4.23.50-PM.png 3192w"
          />
        </div>
      </section>

      <section className="research no-subtitle">
        <SectionHeading variant="section-heading-accent">Goals</SectionHeading>
        <TwoColumnSection>
          <div className="column-left-text">
            <div className="column-left-text">
              <ul role="list" className="list-dark bold">
                <li className="alert-checklist-item">
                  🎯 Create a consistent design for all alerts while meeting the product specific
                  priorities.
                  <br />
                </li>
                <li className="alert-checklist-item">
                  🎯 Ensure full responsiveness and usability on mobile devices.
                  <br />
                </li>
                <li className="alert-checklist-item">
                  🎯 Provide clear, contextual details to help users taking next steps.
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div className="goal-image-frame">
            <ImagePanel
              wrapperClassName="image-panel-padded"
              wrapperRef={goalImageBlock.ref}
              wrapperStyle={goalImageBlock.style}
              src="/images/Goal-image.png"
              imgClassName="photo-md"
            />
          </div>
        </TwoColumnSection>
      </section>

      <section className="learnings no-subtitle">
        <SectionHeading variant="section-heading-dark">
          What&rsquo;s important to know from alert?
        </SectionHeading>
        <TwoColumnSection>
          <div className="problem">
            <div className="problem-block">
              <h1 className="problem-heading">1. What happened?</h1>
              <div className="problem-text">Example: Air quality sensor detected Vape</div>
            </div>
            <div className="problem-block">
              <h1 className="problem-heading">2. Where did it happen?</h1>
              <div className="problem-text">Today at 12:30PM</div>
            </div>
            <div className="problem-block">
              <h1 className="problem-heading">3. When did it happen?</h1>
              <div className="problem-text">
                Summer green high school, 3rd floor, girls bathroom
              </div>
            </div>
            <div className="problem-block">
              <h1 className="problem-heading">4. Why &amp; Who?</h1>
              <div className="problem-text">
                Video footage for investigation and faces detected nearby cameras prior to event
                would be helpful investigation
              </div>
            </div>
          </div>
          <div className="alert-scenario-frame">
            <div className="alert-mobile-frame">
              <ImagePanel
                src="/images/alert-mobile.png"
                imgClassName="photo-md"
                imgRef={alertMobileImg.ref}
                imgStyle={alertMobileImg.style}
              />
            </div>
          </div>
        </TwoColumnSection>
      </section>

      <section className="exploration">
        <SectionHeading variant="section-heading-accent">Final Design</SectionHeading>
        <div className="image-panel-full frame-color">
          <img
            src="/images/Alert-Final.png"
            loading="lazy"
            sizes="100vw"
            srcSet="/images/b23d626e9ce6426ebc08b3a4d101e8be_Alert-Final-p-500.png 500w, /images/b23d626e9ce6426ebc08b3a4d101e8be_Alert-Final-p-800.png 800w, /images/b23d626e9ce6426ebc08b3a4d101e8be_Alert-Final-p-1080.png 1080w, /images/Alert-Final.png 1444w"
            alt=""
          />
        </div>
        <TwoColumnSection
          heading={
            <SectionHeading as="subsection" tag="h1" variant="subsection-heading-plain">
              Outcome
            </SectionHeading>
          }
        >
          <div className="column-left-text">
            <ul role="list" className="list-dark bold">
              <li className="alert-checklist-item">
                ✅ Consistent layout for all alert types
                <br />
              </li>
              <li className="alert-checklist-item">
                ✅ Improved Contextual information and support for taking further actions
                <br />
              </li>
              <li className="alert-checklist-item">
                ✅ Mobile experience optimized{" "}
                <br />
              </li>
            </ul>
          </div>
          <ImagePanel
            wrapperClassName="image-panel-half-alt wrapped"
            src="/images/Alert---Outcome.png"
            imgClassName="alert-outcome-photo"
          />
        </TwoColumnSection>
      </section>

      <div className="case-study-footer">
        <Link href="/work/sites-redesign">← Back to Sites Page Redesign</Link>
      </div>
    </CaseStudyShell>
  );
}
