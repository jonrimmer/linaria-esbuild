import { CSSProperties, FC } from "react";

export const Button: FC<{ className?: string; style?: CSSProperties }> = ({
  children,
  className,
  style,
}) => (
  <button className={className} style={style}>
    {children}
  </button>
);
