import { type ThemeConfig } from "tailwindcss/types/config";
import { primitives } from "./primitives";
import { system } from "./system";

export const tooltipColors = {
  informational: {
    bg: primitives["md-shade"][20],
    text: {
      primary: system.text["dark-bg"].primary,
    },
  },
} as const satisfies ThemeConfig["colors"];
