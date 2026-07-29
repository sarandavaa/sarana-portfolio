import type { CSSProperties } from "react";

export default function ImagePlaceholder({
  label,
  wrapperClassName,
  style,
}: {
  label: string;
  wrapperClassName?: string;
  style?: CSSProperties;
}) {
  const className = wrapperClassName
    ? `cs-placeholder-image ${wrapperClassName}`
    : "cs-placeholder-image";
  return (
    <div className={className} style={style}>
      <span className="cs-placeholder-image-label">{label}</span>
    </div>
  );
}
