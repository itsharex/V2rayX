import { type ThemeConfig } from "tailwindcss/types/config";
import { system } from "./system";
import { primitives } from "./primitives";

export const tabColors = {
  text: {
    default: system.text.regular.primary,
    hover: system.text.regular["soft-primary"],
  },
  border: {
    active: system.border.semantic.informational,
    hover: primitives["md-shade"][70],
  },
} as const satisfies ThemeConfig["colors"];
