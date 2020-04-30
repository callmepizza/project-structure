import * as React from "react";
import Icons from "./assets/icons.svg";

interface ICustomIconProps {
  className?: string;
  name: "arrow-left" | "arrow-right" | "circle-dots";
  fill?: string;
  size?: string;
  onClick?: () => void;
}

export const CustomIcon = ({ className, name, fill = "black", size = "24px", onClick }: ICustomIconProps) => (
  <svg className={`${className}`} fill={fill} width={size} height={size} onClick={onClick}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);
