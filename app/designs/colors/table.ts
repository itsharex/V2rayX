import { type ThemeConfig } from "tailwindcss/types/config";
import { system } from "./system";
import { primitives } from "./primitives";
import { interactiveCompBrdrdColors } from "./interactive-comp-brdrd";

export const tableColors = {
  text: {
    primary: system.text.regular.primary,
    secondary: system.text.regular["soft-primary"],
    placeholder: system.text.regular.placeholder,
    error: system.text.regular.semantic.error,
  },
  header: {
    bg: {
      default: primitives["md-shade"][99],
    },
  },
  row: {
    bg: {
      default: system.bg["pure-white"],
      hover: system.bg.default,
      "plus-button-hover": interactiveCompBrdrdColors.primary.bg.hover,
      error: system.bg.semantic.default.error,
      "error-hover": system.semantic.soft.hover.error,
    },
  },
  border: {
    default: primitives["md-shade"][80],
    row: {
      default: system.border.subtle,
      selected: system.border.active,
    },
  },
} as const satisfies ThemeConfig["colors"];
