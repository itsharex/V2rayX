import plugin from "tailwindcss/plugin";
import { type CSSRuleObject } from "tailwindcss/types/config";

const BASE_TYPOGRAPHY: Record<string, CSSRuleObject> = {
  body: {
    fontSize: "16px",
    letterSpacing: "-0.01em",
  },
  caption1: {
    fontSize: "14px",
    letterSpacing: "-0.01em",
  },
  caption2: {
    fontSize: "12px",
    letterSpacing: "-0.01em",
  },
  description: {
    fontSize: "11px",
    letterSpacing: "-0.01em",
  },
  description2: {
    fontSize: "10px",
    letterSpacing: "-0.01em",
  },
};

export const typographyPlugin = plugin(({ addComponents }) => {
  const typography: Record<string, CSSRuleObject> = {};

  Object.entries(BASE_TYPOGRAPHY).forEach(([key, value]) => {
    typography[`.c-text-${key}`] = {
      ...value,
      fontWeight: "400",
      lineHeight: "1.5",
    };
    typography[`.c-text-${key}-bold`] = {
      ...value,
      fontWeight: "500",
      lineHeight: "1.5",
    };
    typography[`.c-text-${key}-extrabold`] = {
      ...value,
      fontWeight: "600",
      lineHeight: "1.5",
    };

    typography[`.c-text-ui-${key}`] = {
      ...value,
      fontWeight: "400",
      lineHeight: "1",
    };
    typography[`.c-text-ui-${key}-bold`] = {
      ...value,
      fontWeight: "500",
      lineHeight: "1",
    };
    typography[`.c-text-ui-${key}-extrabold`] = {
      ...value,
      fontWeight: "600",
      lineHeight: "1",
    };
  });

  addComponents({
    ...typography,

    ".c-text-md-h1": {
      fontFamily: '"EudoxusSans", sans-serif',
      fontSize: "24px",
      fontWeight: "700",
      letterSpacing: "-0.02em",
      lineHeight: "1.2",
    },
    ".c-text-ui-md-h1": {
      fontFamily: '"EudoxusSans", sans-serif',
      fontSize: "24px",
      fontWeight: "700",
      letterSpacing: "-0.02em",
      lineHeight: "1",
    },
    ".c-text-md-h2": {
      fontFamily: '"EudoxusSans", sans-serif',
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "1.2",
    },
    ".c-text-ui-md-h2": {
      fontFamily: '"EudoxusSans", sans-serif',
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "1",
    },
  });
});
