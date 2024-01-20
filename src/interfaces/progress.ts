import type { DateTime } from "luxon";

export interface Progress {
  date: DateTime;
  success: boolean;
}
