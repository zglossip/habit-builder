import { Progress } from "@/interfaces/progress";
import { DateTime } from "luxon";

export default (progresses: Progress[]): number => {
  if (progresses.length === 0) {
    return 0;
  }

  let count: number = 0;
  let currentDate: DateTime = DateTime.now()

  for (let i = progresses.length; i--; i >= 0) {
    if (!progresses[i].success) {
      break;
    }

    if (progresses[i].date.toISODate() !== currentDate.toISODate()){
      break;
    }

    currentDate = currentDate.minus({days: 1})
    count += 1;
  }

  return count;
};
