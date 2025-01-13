import { type ThemeConfig } from "tailwindcss/types/config";
import { system } from "./system";

export const interactiveCompBrdrlessColors = {
  primary: {
    bg: {
      default: system.bg.component.primary.default,
      hover: system.bg.component.primary.hover,
      pressed: system.bg.component.primary.pressed,
    },
    text: {
      placeholder: system.text.regular.placeholder,
      "inline-cta": system.text.regular.semantic.informational,
    },
  },
  "soft-primary": {
    bg: {
      default: system.bg.component["soft-primary"].default,
      hover: system.bg.component["soft-primary"].hover,
      pressed: system.bg.component["soft-primary"].pressed,
    },
    text: {
      placeholder: system.text.regular.placeholder,
      "inline-cta": system.text.regular.semantic.informational,
    },
  },
} as const satisfies ThemeConfig["colors"];
