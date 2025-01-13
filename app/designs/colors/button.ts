import { type ThemeConfig } from "tailwindcss/types/config";
import { primitives } from "./primitives";
import { system } from "./system";

export const buttonColors = {
  cta: {
    primary: {
      bg: {
        default: primitives["md-shade"][0],
        hover: primitives["md-shade"][20],
        pressed: primitives["md-shade"][30],
        disabled: primitives["md-shade"][95],
      },
      text: {
        default: system.text["dark-bg"].primary,
        disabled: system.text["dark-bg"].primary,
      },
    },
    secondary: {
      bg: {
        default: system.bg.component["soft-primary"].default,
        hover: system.bg.component["soft-primary"].hover,
        pressed: system.bg.component["soft-primary"].pressed,
        disabled: system.bg.component["soft-primary"].disabled,
      },
      text: {
        default: system.text.regular["soft-primary"],
        disabled: system.text.regular.disabled,
      },
    },
    "destructive-bold": {
      bg: {
        default: primitives.red[0],
        hover: primitives.red[20],
        pressed: primitives.red[40],
        disabled: primitives.red[90],
      },
      text: {
        default: system.text["dark-bg"].primary,
        disabled: system.text["dark-bg"].primary,
      },
    },
    "destructive-weak": {
      bg: {
        default: primitives.red[100],
        hover: primitives.red[95],
        pressed: primitives.red[90],
        disabled: primitives.red[100],
      },
      text: {
        default: system.text.regular.semantic.error,
        disabled: primitives.red[80],
      },
    },
    blue: {
      bg: {
        default: primitives["chad-blue"][0],
        hover: primitives["chad-blue"][20],
        pressed: primitives["chad-blue"][40],
        disabled: primitives["chad-blue"][80],
      },
      text: {
        default: system.text["dark-bg"].primary,
        disabled: system.text["dark-bg"].primary,
      },
    },
  },
  "inline-cta": {
    primary: {
      default: system.text.regular.primary,
      hover: primitives["md-shade"][20],
      pressed: primitives["md-shade"][30],
      disabled: system.text.regular.disabled,
    },
    informational: {
      default: system.text.regular.semantic.informational,
      hover: primitives["chad-blue"][20],
      pressed: primitives["chad-blue"][40],
      disabled: primitives["chad-blue"][70],
    },
  },
  expand: {
    fg: {
      default: "#4F637D",
      hover: "#030E16",
    },
  },
  action: {
    primary: {
      bg: {
        hover: "#EEF1F7",
        pressed: "#DEE2ED",
      },
      text: {
        primary: "#030E16",
        "soft-primary": "#4F637D",
      },
    },
    "soft-primary": {
      bg: {
        hover: "#DEE2ED",
        pressed: "#CFD4E2",
      },
      text: {
        primary: "#030E16",
        "soft-primary": "#4F637D",
      },
    },
    error: {
      text: {
        default: "#D14545",
      },
      bg: {
        hover: "#FFF2F2",
        pressed: "#FDE1E2",
      },
    },
    success: {
      text: {
        default: "#5DB534",
      },
      bg: {
        hover: "#F6FAF0",
        pressed: "#F1F9E6",
      },
    },
    informational: {
      text: {
        default: "#32ABF2",
      },
      bg: {
        hover: "#F2FCFF",
        pressed: "#E1F7FF",
      },
    },
    warning: {
      text: {
        default: "#F29C07",
      },
      bg: {
        hover: "#FFF8F0",
        pressed: "#FFF2E4",
      },
    },
  },
} as const satisfies ThemeConfig["colors"];
