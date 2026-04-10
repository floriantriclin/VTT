import React from "react";

const HandyTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  const fontSize = width ? Math.round(width * 0.45) : 54;
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        width: width,
        height: height,
        fontSize: `${fontSize}px`,
        fontWeight: 700,
        letterSpacing: "-0.03em",
        lineHeight: 1,
      }}
    >
      vtt
    </span>
  );
};

export default HandyTextLogo;
