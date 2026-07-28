import type { ReactNode } from "react";

export default function TwoColumnSection({
  reverse = false,
  className,
  heading,
  children,
}: {
  reverse?: boolean;
  className?: string;
  heading?: ReactNode;
  children: [ReactNode, ReactNode];
}) {
  const wrapperClass = reverse ? "two-column-wrapper column-text-right" : "two-column-wrapper";
  return (
    <div className={className ? `slide-container ${className}` : "slide-container"}>
      {heading}
      <div className={wrapperClass}>
        {children[0]}
        {children[1]}
      </div>
    </div>
  );
}
