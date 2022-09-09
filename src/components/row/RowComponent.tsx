import React, { PropsWithChildren } from "react";
import "./RowStyles.css";

export default function RowComponent({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return <div className={`row ${className}`}>{children}</div>;
}
