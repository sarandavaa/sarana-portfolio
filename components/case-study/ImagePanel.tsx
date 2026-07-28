import type { CSSProperties, ReactNode, Ref } from "react";

export default function ImagePanel({
  wrapperClassName,
  wrapperRef,
  wrapperStyle,
  wrapperId,
  src,
  srcSet,
  sizes,
  width,
  alt = "",
  imgClassName,
  imgId,
  imgRef,
  imgStyle,
  loading = "lazy",
  children,
}: {
  wrapperClassName?: string;
  wrapperRef?: Ref<HTMLDivElement>;
  wrapperStyle?: CSSProperties;
  wrapperId?: string;
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  alt?: string;
  imgClassName?: string;
  imgId?: string;
  imgRef?: Ref<HTMLImageElement>;
  imgStyle?: CSSProperties;
  loading?: "lazy" | "eager";
  children?: ReactNode;
}) {
  return (
    <div className={wrapperClassName} ref={wrapperRef} style={wrapperStyle} id={wrapperId}>
      <img
        ref={imgRef}
        style={imgStyle}
        id={imgId}
        src={src}
        loading={loading}
        width={width}
        sizes={sizes}
        srcSet={srcSet}
        alt={alt}
        className={imgClassName}
      />
      {children}
    </div>
  );
}
