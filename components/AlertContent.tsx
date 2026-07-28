"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import FlowField from "@/components/FlowField";
import { useFadeIn } from "@/components/FadeIn";
import "@/app/case-study.css";

export default function AlertContent() {
  const keyProblemsHeading = useFadeIn<HTMLHeadingElement>();
  const screenshotBlock = useFadeIn<HTMLDivElement>(0.15);
  const goalImageBlock = useFadeIn<HTMLDivElement>();
  const alertMobileImg = useFadeIn<HTMLImageElement>();

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
              <h1 className="hero-h1">
                Security Alert <br />
                Mobile Design
              </h1>
            </div>
            <a href="#" className="link hero">
              Verkada - Physical Security Platform
            </a>
          </div>
          <div className="w-layout-grid before-after-grid">
            <img
              src="/images/alert-before.png"
              loading="lazy"
              width={3000}
              sizes="100vw"
              alt=""
              srcSet="/images/81513995325b311293d6f9f7d52212da_alert-before-p-500.png 500w, /images/81513995325b311293d6f9f7d52212da_alert-before-p-800.png 800w, /images/81513995325b311293d6f9f7d52212da_alert-before-p-1080.png 1080w, /images/alert-before.png 1122w"
              className="img-rounded-mobile-left"
            />
            <img
              src="/images/alert-after.png"
              loading="lazy"
              width={3000}
              sizes="100vw"
              alt=""
              srcSet="/images/565decded03bb6b95343dd296af6bc92_alert-after-p-500.png 500w, /images/565decded03bb6b95343dd296af6bc92_alert-after-p-800.png 800w, /images/565decded03bb6b95343dd296af6bc92_alert-after-p-1080.png 1080w, /images/alert-after.png 1122w"
              className="img-rounded-mobile-right"
            />
          </div>
        </div>
      </section>

      <section className="project-background-section">
        <div className="h2-container">
          <h1 className="h2-light-purple">Project Background</h1>
        </div>
        <div className="slide-container">
          <div className="two-column-wrapper">
            <div className="column-left-text">
              <p className="p1-light">
                Before the Verkada 3.0 redesign, security alerts—such as motion detection, door
                tampering, and vape detection—were scattered across individual product pages,
                making it difficult for users to get a clear, comprehensive view of incidents. The
                new <strong>Alerts Page consolidates all alerts into a single, intuitive hub,</strong>{" "}
                improving visibility, streamlining investigations, and reducing cognitive load.
                <br />
                ‍<br />
                As a Product Designer, I ensured a seamless migration to the unified Alerts Page
                by maintaining{" "}
                <strong>
                  design consistency, optimizing for mobile usability, and enhancing the overall
                  user experience.
                </strong>
              </p>
            </div>
            <div className="_50-block">
              <img
                src="/images/Alert-types.png"
                loading="lazy"
                sizes="(max-width: 547px) 100vw, 547px"
                srcSet="/images/fc9b492b3c3430f4849591bf2a0ef43f_Alert-types-p-500.png 500w, /images/Alert-types.png 547w"
                alt=""
                className="image-26"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="why-redesign light-bright">
        <div className="w-layout-blockcontainer slide-container-vertical w-container">
          <div className="h3-container">
            <h1 ref={keyProblemsHeading.ref} style={keyProblemsHeading.style} className="h2-dark">
              Key Problems
            </h1>
          </div>
          <div className="two-column-wrapper">
            <div className="problem">
              <div className="problem-block">
                <h1 className="h4">🔹 Inconsistent Design Patterns </h1>
                <div className="text-block">Each product had its own unique alert design</div>
              </div>
              <div className="problem-block">
                <h1 className="h4">🔹 Mobile responsiveness</h1>
                <div className="text-block">
                  Some designs were not optimized for mobile users, impacting usability on smaller
                  screens.
                </div>
              </div>
              <div className="problem-block">
                <h1 className="h4">🔹 Lack of Contextual Information</h1>
                <div className="text-block">
                  Alerts often lacked the necessary details for users to assess urgency and take
                  action.
                </div>
              </div>
            </div>
            <div className="_30-block">
              <img src="/images/Business-Problem.gif" loading="lazy" alt="" className="image-28" />
            </div>
          </div>
          <div
            ref={screenshotBlock.ref}
            style={screenshotBlock.style}
            className="centered-full-img-copy"
          >
            <img
              src="/images/Screenshot-2025-04-10-at-4.23.50-PM.png"
              alt=""
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
              loading="lazy"
              srcSet="/images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-500.png 500w, /images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-800.png 800w, /images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-1080.png 1080w, /images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-1600.png 1600w, /images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-2000.png 2000w, /images/e873fcd932639091c9b37c2296b9b89a_Screenshot-2025-04-10-at-4.23.50-PM-p-2600.png 2600w, /images/Screenshot-2025-04-10-at-4.23.50-PM.png 3192w"
            />
          </div>
        </div>
      </section>

      <section className="research no-subtitle">
        <div className="h2-container">
          <h1 className="h2-light-purple">Goals</h1>
        </div>
        <div className="slide-container">
          <div className="two-column-wrapper">
            <div className="column-left-text">
              <div className="column-left-text">
                <ul role="list" className="list-dark bold">
                  <li className="h4-white">
                    🎯 Create a consistent design for all alerts while meeting the product
                    specific priorities.
                    <br />
                  </li>
                  <li className="h4-white">
                    🎯 Ensure full responsiveness and usability on mobile devices.
                    <br />
                  </li>
                  <li className="h4-white">
                    🎯 Provide clear, contextual details to help users taking next steps.
                    <br />
                  </li>
                </ul>
              </div>
            </div>
            <div className="div-block-47">
              <div
                ref={goalImageBlock.ref}
                style={goalImageBlock.style}
                className="padding-10-with-back"
              >
                <img src="/images/Goal-image.png" loading="lazy" alt="" className="image-25" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="learnings no-subtitle">
        <div className="h2-container">
          <h1 className="h2-dark">What&rsquo;s important to know from alert?</h1>
        </div>
        <div className="slide-container">
          <div className="two-column-wrapper">
            <div className="problem">
              <div className="problem-block">
                <h1 className="h4">1. What happened?</h1>
                <div className="text-block">Example: Air quality sensor detected Vape</div>
              </div>
              <div className="problem-block">
                <h1 className="h4">2. Where did it happen?</h1>
                <div className="text-block">Today at 12:30PM</div>
              </div>
              <div className="problem-block">
                <h1 className="h4">3. When did it happen?</h1>
                <div className="text-block">
                  Summer green high school, 3rd floor, girls bathroom
                </div>
              </div>
              <div className="problem-block">
                <h1 className="h4">4. Why &amp; Who?</h1>
                <div className="text-block">
                  Video footage for investigation and faces detected nearby cameras prior to event
                  would be helpful investigation
                </div>
              </div>
            </div>
            <div className="div-block-48">
              <div className="div-block-45">
                <img
                  ref={alertMobileImg.ref}
                  style={alertMobileImg.style}
                  src="/images/alert-mobile.png"
                  loading="lazy"
                  alt=""
                  className="image-25"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="exploration">
        <div className="h2-container">
          <h1 className="h2-light-purple">Final Design</h1>
        </div>
        <div className="centered-full-img color-back">
          <img
            src="/images/Alert-Final.png"
            loading="lazy"
            sizes="100vw"
            srcSet="/images/b23d626e9ce6426ebc08b3a4d101e8be_Alert-Final-p-500.png 500w, /images/b23d626e9ce6426ebc08b3a4d101e8be_Alert-Final-p-800.png 800w, /images/b23d626e9ce6426ebc08b3a4d101e8be_Alert-Final-p-1080.png 1080w, /images/Alert-Final.png 1444w"
            alt=""
          />
        </div>
        <div className="slide-container">
          <div className="h3-container">
            <h1 className="h3">Outcome</h1>
          </div>
          <div className="two-column-wrapper">
            <div className="column-left-text">
              <ul role="list" className="list-dark bold">
                <li className="h4-white">
                  ✅ Consistent layout for all alert types
                  <br />
                </li>
                <li className="h4-white">
                  ✅ Improved Contextual information and support for taking further actions
                  <br />
                </li>
                <li className="h4-white">
                  ✅ Mobile experience optimized{" "}
                  <br />
                </li>
              </ul>
            </div>
            <div className="column-50-copy wrapped">
              <img src="/images/Alert---Outcome.png" loading="lazy" alt="" className="image-27" />
            </div>
          </div>
        </div>
      </section>

      <div className="case-study-footer">
        <Link href="/work/sites-redesign">← Back to Sites Page Redesign</Link>
      </div>
      </div>
      </div>
    </>
  );
}
