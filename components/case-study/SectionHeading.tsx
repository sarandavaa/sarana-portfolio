import type { CSSProperties, ReactNode, Ref } from "react";

export default function SectionHeading({
  as = "section",
  tag: Tag = "h1",
  variant,
  wrapperClassName,
  headingRef,
  headingStyle,
  children,
}: {
  as?: "section" | "subsection";
  tag?: "h1" | "h2";
  variant?: string;
  wrapperClassName?: string;
  headingRef?: Ref<HTMLHeadingElement>;
  headingStyle?: CSSProperties;
  children: ReactNode;
}) {
  const wrapperClass = as === "section" ? "section-heading" : "subsection-heading";
  return (
    <div className={wrapperClassName ? `${wrapperClass} ${wrapperClassName}` : wrapperClass}>
      <Tag ref={headingRef} style={headingStyle} className={variant}>
        {children}
      </Tag>
    </div>
  );
}
