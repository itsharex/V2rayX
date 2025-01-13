import { type ThemeConfig } from "tailwindcss/types/config";
import { system } from "./system";

export const toastColors = {
  bg: {
    success: system.bg.semantic.default.success,
    error: system.bg.semantic.default.error,
    warning: system.bg.semantic.default.warning,
    informational: system.bg.semantic.default.informational,
    neutral: system.bg.default,
  },
  text: {
    success: system.text.regular.semantic.success,
    error: system.text.regular.semantic.error,
    warning: system.text.regular.semantic.warning,
    informational: system.text.regular.semantic.informational,
    neutral: system.text.regular["soft-primary"],
  },
  border: {
    success: system.border.semantic.success,
    error: system.border.semantic.error,
    warning: system.border.semantic.warning,
    informational: system.border.semantic.informational,
    neutral: system.border.secondary,
  },
} as const satisfies ThemeConfig["colors"];
