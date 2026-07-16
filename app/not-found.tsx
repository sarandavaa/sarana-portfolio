import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found — Sarana Davaa",
  description: "Not Found",
};

export default function NotFound() {
  return (
    <div className="utility-page-wrap">
      <div className="_404-wrap">
        <div className="_404-content-wrap">
          <div className="p0-normal">Page Not Found</div>
          <div className="paragraph-bigger cc-bigger-light">
            The page you are looking for doesn&rsquo;t exist or has been moved.
          </div>
        </div>
        <Link href="/" className="button cc-white-button w-inline-block">
          <div>Go Back to Safety</div>
        </Link>
      </div>
    </div>
  );
}
