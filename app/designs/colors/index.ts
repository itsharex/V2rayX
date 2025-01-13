import { type ThemeConfig } from "tailwindcss/types/config";
import { primitives, std } from "./primitives";
import { system } from "./system";
import { interactiveCompBrdrlessColors } from "./interactive-comp-brdrless";
import { interactiveCompBrdrdColors } from "./interactive-comp-brdrd";
import { tooltipColors } from "./tooltip";
import { buttonColors } from "./button";
import { tableColors } from "./table";
import { toastColors } from "./toast";
import { alertColors } from "./alert";
import { tabColors } from "./tab";
import { pillColors } from "./pill";
import { textBoxColors } from "./text-box";
import { selectorColors } from "./selector";

export const colors = {
  ...primitives,
  std,
  ...system,

  /** Components color */
  "interactive-comp-brdrless": interactiveCompBrdrlessColors,
  "interactive-comp-brdrd": interactiveCompBrdrdColors,
  tooltip: tooltipColors,
  button: buttonColors,
  table: tableColors,
  toast: toastColors,
  alert: alertColors,
  tab: tabColors,
  pill: pillColors,
  "text-box": textBoxColors,
  selector: selectorColors,
} as const satisfies ThemeConfig["colors"];
