import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

const RESUME_HREF =
  "https://docs.google.com/document/d/1b0CAbHsg6YJwmnFgzCj_SvGTTkOfNpmL/edit?usp=sharing&ouid=110912305056131051486&rtpof=true&sd=true";
const LINKEDIN_HREF = "https://www.linkedin.com/in/saranadavaa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link href="/" className="site-footer__logo">
            <Image
              src="/images/sarana_spiral_logo.png"
              alt=""
              width={44}
              height={44}
              className="site-footer__logo-mark"
            />
            Sarana Davaa
          </Link>
          <p className="site-footer__tagline">Product Designer, San Francisco</p>
        </div>

        <nav className="site-footer__links" aria-label="Footer">
          <Link href="/" className="site-footer__link">
            Home
          </Link>
          <a href={RESUME_HREF} target="_blank" rel="noreferrer" className="site-footer__link">
            Resume
          </a>
          <a href={LINKEDIN_HREF} target="_blank" rel="noreferrer" className="site-footer__link">
            LinkedIn
          </a>
        </nav>
      </div>

      <div className="site-footer__bottom">
        <span>© {year} Designed and Built by Sarana</span>
      </div>
    </footer>
  );
}
