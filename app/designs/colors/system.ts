import { type ThemeConfig } from "tailwindcss/types/config";
import { primitives, std } from "./primitives";

const semantic = {
  bold: {
    default: {
      success: primitives.green[10],
      error: primitives.red[0],
      warning: primitives.amber[0],
      informational: primitives["chad-blue"][0],
    },
    hover: {
      success: primitives.green[30],
      error: primitives.red[20],
      warning: primitives.amber[20],
      informational: primitives["chad-blue"][20],
    },
  },

  soft: {
    default: {
      success: primitives.green[100],
      error: primitives.red[100],
      warning: primitives.amber[100],
      informational: primitives["chad-blue"][100],
    },
    hover: {
      success: primitives.green[95],
      error: primitives.red[95],
      warning: primitives.amber[95],
      informational: primitives["chad-blue"][95],
    },
  },
} as const satisfies ThemeConfig["colors"];

export const system = {
  semantic,
  text: {
    regular: {
      primary: primitives["md-shade"][0],
      "soft-primary": primitives["md-shade"][40],
      secondary: primitives["md-shade"][60],
      accent: primitives["chad-blue"][0],
      disabled: primitives["md-shade"][70],
      placeholder: primitives["md-shade"][80],
      semantic: {
        success: semantic.bold.default.success,
        error: semantic.bold.default.error,
        warning: semantic.bold.default.warning,
        informational: semantic.bold.default.informational,
      },
    },
    "dark-bg": {
      primary: primitives["md-shade"][100],
      "soft-primary": primitives["md-shade"][90],
      secondary: primitives["md-shade"][70],
    },
  },
  border: {
    primary: primitives["md-shade"][0],
    secondary: primitives["md-shade"][40],
    disabled: primitives["md-shade"][70],
    subtle: primitives["md-shade"][95],
    active: primitives["chad-blue"][0],
    semantic: {
      success: semantic.bold.default.success,
      error: semantic.bold.default.error,
      warning: semantic.bold.default.warning,
      informational: semantic.bold.default.informational,
    },
  },
  bg: {
    default: primitives["md-shade"][100],
    "pure-white": std["pure-white"],
    component: {
      primary: {
        default: primitives["md-shade"][100],
        hover: primitives["md-shade"][99],
        pressed: primitives["md-shade"][95],
      },
      "soft-primary": {
        default: primitives["md-shade"][99],
        hover: primitives["md-shade"][95],
        pressed: primitives["md-shade"][90],
        disabled: primitives["md-shade"][99],
      },
    },
    semantic: {
      default: {
        success: semantic.soft.default.success,
        error: semantic.soft.default.error,
        warning: semantic.soft.default.warning,
        informational: semantic.soft.default.informational,
      },
      hover: {
        success: semantic.soft.hover.success,
        error: semantic.soft.hover.error,
        warning: semantic.soft.hover.warning,
        informational: semantic.soft.hover.informational,
      },
    },
  },
} as const satisfies ThemeConfig["colors"];
