import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FlowField from "@/components/FlowField";
import "./case-study.css";

export default function CaseStudyShell({ children }: { children: ReactNode }) {
  return (
    <>
      <FlowField />
      <div className="ambient-wrap">
        <div className="case-study">
          <Nav current="sub" variant="light" />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
