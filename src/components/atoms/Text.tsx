import { TextColor, TextSize, TextWeight } from "@/types/text";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  weight?: TextWeight;
  size?: TextSize;
  color?: TextColor;
}

const weightStyles: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const sizeStyles: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-xs md:text-sm",
  base: "text-xs md:text-sm lg:text-base",
  lg: "text-sm md:text-base lg:text-lg",
  xl: "text-base md:text-lg lg:text-xl",
  "2xl": "text-lg md:text-xl lg:text-2xl",
  "4xl": "text-2xl md:text-3xl lg:text-4xl",
};

const colorStyles: Record<TextColor, string> = {
  default: "text-text",
  muted: "text-text-50",
  accent: "text-text-accent",
  light: "text-text-light",
  lightMuted: "text-text-light-50",
  success: "text-text-success",
  warning: "text-text-warning",
  danger: "text-danger",
};

export default function Text({
  children,
  as: Tag = "p",
  weight = "normal",
  size = "base",
  color = "default",
  className = "",
  ...rest
}: TextProps) {
  return (
    <Tag
      className={`${weightStyles[weight]} ${sizeStyles[size]} ${colorStyles[color]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
