import { type ThemeConfig } from "tailwindcss/types/config";
import { system } from "./system";
import { primitives } from "./primitives";

export const pillColors = {
  offwhite: {
    bg: {
      primary: system.bg.component["soft-primary"].default,
      informational: primitives["chad-blue"][95],
      success: primitives["green"][95],
      warning: primitives["amber"][95],
      semantic: {
        soft: {
          hover: {
            informational: system.bg.semantic.hover.informational,
          },
        },
      },
    },
  },
  bg: {
    primary: system.bg.component.primary.default,
    informational: system.bg.semantic.default.informational,
    success: system.bg.semantic.default.success,
    warning: system.bg.semantic.default.warning,
    semantic: {
      soft: {
        hover: {
          informational: system.bg.semantic.hover.informational,
        },
      },
    },
  },
  text: {
    primary: system.text.regular["soft-primary"],
    informational: system.text.regular.semantic.informational,
    success: system.text.regular.semantic.success,
    warning: system.text.regular.semantic.warning,
    semantic: {
      bold: {
        default: {
          informational: system.text.regular.semantic.informational,
        },
      },
    },
  },
} as const satisfies ThemeConfig["colors"];
