import { type ThemeConfig } from "tailwindcss/types/config";
import { system } from "./system";

export const textBoxColors = {
  text: {
    default: system.text.regular.placeholder,
    active: system.text.regular.primary,
    label: system.text.regular["soft-primary"],
    disabled: system.text.regular.disabled,
    error: system.text.regular.semantic.error,
  },
  bg: {
    default: system.bg.default,
    hover: system.bg["pure-white"],
    active: system.bg["pure-white"],
    disabled: system.bg.component["soft-primary"].disabled,
  },
  border: {
    active: system.border.active,
    hover: system.border.subtle,
    error: system.border.semantic.error,
  },
} as const satisfies ThemeConfig["colors"];
