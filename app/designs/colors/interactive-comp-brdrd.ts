import { type ThemeConfig } from "tailwindcss/types/config";
import { system } from "./system";
import { primitives } from "./primitives";

export const interactiveCompBrdrdColors = {
  primary: {
    bg: {
      default: system.bg.component.primary.default,
      hover: system.bg.component.primary.hover,
      pressed: system.bg.component.primary.pressed,
    },
    border: {
      default: system.border.subtle,
      hover: primitives["md-shade"][90],
    },
    text: {
      default: system.text.regular.primary,
    },
  },
  "soft-primary": {
    bg: {
      default: system.bg.component["soft-primary"].default,
      hover: system.bg.component["soft-primary"].hover,
      pressed: system.bg.component["soft-primary"].pressed,
    },
    border: {
      default: system.border.subtle,
      hover: primitives["md-shade"][90],
    },
    text: {
      default: system.text.regular.primary,
    },
  },
} as const satisfies ThemeConfig["colors"];
