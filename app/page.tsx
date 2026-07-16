"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import { useFadeIn } from "@/components/FadeIn";

export default function Home() {
  const profileImg = useFadeIn<HTMLImageElement>();
  const heroIntro = useFadeIn<HTMLDivElement>(0.15);

  return (
    <>
      <Nav current="home" />
      <section className="hero-section">
        <div className="w-layout-hflex intro-section">
          <img
            ref={profileImg.ref}
            className="profile-img"
            src="/images/IMG_8856.JPG"
            alt=""
            style={profileImg.style}
            sizes="100vw"
            loading="lazy"
            srcSet="/images/IMG_8856-p-500.jpg 500w, /images/IMG_8856-p-800.jpg 800w, /images/IMG_8856-p-1080.jpg 1080w, /images/IMG_8856-p-1600.jpg 1600w, /images/IMG_8856-p-2000.jpg 2000w, /images/IMG_8856-p-2600.jpg 2600w, /images/IMG_8856-p-3200.jpg 3200w, /images/IMG_8856.JPG 4096w"
          />
          <div ref={heroIntro.ref} style={heroIntro.style} className="hero-intro">
            <h2 className="p0-normal">
              <strong>
                Hi! I&rsquo;m Sarana, a Designer based in San Francisco.
                <br />
              </strong>
              I lead with curiosity, creativity, and care — combining research, strategy, and
              craft to navigate uncertainty, break down complexity, reframe problems, and iterate
              toward solutions that feel simple, impactful, and essential.
              <br />
            </h2>
          </div>
        </div>
      </section>
      <section className="project-section-background">
        <div className="title-container">
          <h2 className="h2-light-purple">Selected Projects</h2>
        </div>
        <div className="home-project-container">
          <div className="home-page-project-info">
            <div className="project-type">Interaction Design</div>
            <div className="title-and-desc">
              <h3 className="heading-8">
                <strong className="h3">Sites Page Redesign</strong>
              </h3>
              <div className="link">Verkada </div>
              <p className="p1-light">
                A redesign of Sites page. Sites are a logical way of grouping and managing devices
                and user permissions within Verkada command platform.
              </p>
            </div>
            <Link href="/work/sites-redesign" className="action-link">
              View Project
            </Link>
          </div>
          <div className="column-img">
            <img
              className="desktop-img"
              src="/images/Sites-page---edited.png"
              width={2720}
              alt="Verkada Sites page"
              sizes="100vw"
              loading="eager"
              srcSet="/images/Sites-page---edited-p-500.png 500w, /images/Sites-page---edited-p-800.png 800w, /images/Sites-page---edited-p-1080.png 1080w, /images/Sites-page---edited-p-1600.png 1600w, /images/Sites-page---edited-p-2000.png 2000w, /images/Sites-page---edited-p-2600.png 2600w, /images/Sites-page---edited-p-3200.png 3200w, /images/Sites-page---edited.png 5440w"
            />
          </div>
        </div>
        <div className="home-project-container">
          <div className="home-page-project-info">
            <div className="project-type">Interaction Design</div>
            <div className="title-and-desc">
              <h3 className="heading-8">
                <strong className="h3">
                  Security Alert
                  <br />
                  Mobile Design
                </strong>
              </h3>
              <a href="#">Verkada</a>
              <p className="p1-light">
                Alert design for the core platform&rsquo;s mobile web. Designed the layout and
                interaction that works for different alerts from camera, air quality sensors, and
                access control.
              </p>
            </div>
            <Link href="/work/alert" className="action-link">
              View Project
            </Link>
          </div>
          <div className="column-img gradient-back-2">
            <img
              className="mobile-img"
              src="/images/vape_detected_alert.png"
              width={222}
              alt="Verkada Sites page"
              sizes="222px"
              loading="eager"
              srcSet="/images/vape_detected_alert-p-500.png 500w, /images/vape_detected_alert-p-800.png 800w, /images/vape_detected_alert-p-1080.png 1080w, /images/vape_detected_alert-p-1600.png 1600w, /images/vape_detected_alert.png 1745w"
            />
          </div>
        </div>
        <div className="home-project-container">
          <div className="home-page-project-info">
            <div className="project-type">Interaction Design</div>
            <div className="title-and-desc">
              <h3 className="heading-8">
                <strong className="h3">Guest Log Page Design</strong>
              </h3>
              <a href="https://www.verkada.com/workplace/guest-visitor-management-system/">
                Verkada Guest
              </a>
              <p className="p1-light">Visitor log page design, search and filter experience. </p>
            </div>
            <a href="#" className="action-link">
              Coming soon
            </a>
          </div>
          <div className="column-img gradient-back-3">
            <img
              className="desktop-img"
              src="/images/Guest-log.png"
              width={2720}
              alt="Verkada Sites page"
              sizes="100vw"
              loading="eager"
              srcSet="/images/Guest-log-p-500.png 500w, /images/Guest-log-p-800.png 800w, /images/Guest-log-p-1080.png 1080w, /images/Guest-log-p-1600.png 1600w, /images/Guest-log-p-2000.png 2000w, /images/Guest-log-p-2600.png 2600w, /images/Guest-log-p-3200.png 3200w, /images/Guest-log.png 5680w"
            />
          </div>
        </div>
      </section>
    </>
  );
}
