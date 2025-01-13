import { type ThemeConfig } from "tailwindcss/types/config";
import { system } from "./system";
import { primitives, std } from "./primitives";
import { interactiveCompBrdrdColors } from "./interactive-comp-brdrd";

export const selectorColors = {
  checkbox: {
    bg: {
      unchecked: {
        default: system.bg["pure-white"],
        hover: interactiveCompBrdrdColors["soft-primary"].bg.hover,
      },
      checked: {
        default: primitives["chad-blue"][0],
        hover: primitives["chad-blue"][20],
        disabled: primitives["md-shade"][70],
      },
    },
    border: {
      default: system.border.secondary,
      disabled: system.border.disabled,
    },
    icon: {
      default: std["pure-white"],
    },
  },

  "radio-button": {
    bg: {
      unchecked: {
        default: system.bg["pure-white"],
        hover: interactiveCompBrdrdColors["soft-primary"].bg.hover,
      },
      checked: {
        default: primitives["chad-blue"][0],
        hover: primitives["chad-blue"][20],
        disabled: primitives["md-shade"][70],
      },
    },
    border: {
      default: system.border.secondary,
      disabled: system.border.disabled,
    },
  },
} as const satisfies ThemeConfig["colors"];
