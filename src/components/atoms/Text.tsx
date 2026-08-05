import type { ElementType, HTMLAttributes, ReactNode } from "react";

type TextWeight = "normal" | "medium" | "semibold" | "bold";
type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
type TextColor =
  | "default"
  | "muted"
  | "accent"
  | "light"
  | "success"
  | "warning";

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
  base: "text-sm md:text-base",
  lg: "text-base md:text-lg",
  xl: "text-lg md:text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
};

const colorStyles: Record<TextColor, string> = {
  default: "text-text",
  muted: "text-text-50",
  accent: "text-text-accent",
  light: "text-text-light",
  success: "text-text-success",
  warning: "text-text-warning",
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
