import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FlowField from "@/components/FlowField";
import "./case-study.css";

export default function CaseStudyShell({ children }: { children: ReactNode }) {
  return (
    <>
      <FlowField paper="#000000" ink="#f3f1e9" />
      <div className="ambient-wrap">
        <div className="case-study">
          <Nav current="sub" />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
