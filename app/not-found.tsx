import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found — Sarana Davaa",
  description: "Not Found",
};

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-panel">
        <div className="not-found-content">
          <div className="not-found-title">Page Not Found</div>
          <div className="not-found-message not-found-message-accent">
            The page you are looking for doesn&rsquo;t exist or has been moved.
          </div>
        </div>
        <Link href="/" className="btn btn-white w-inline-block">
          <div>Go Back to Safety</div>
        </Link>
      </div>
    </div>
  );
}
