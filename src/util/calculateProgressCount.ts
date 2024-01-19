import { Progress } from "@/interfaces/progress";

export default (progresses: Progress[]): number => {
  if (progresses.length === 0) {
    return 0;
  }

  let count: number = 0;

  for (let i = progresses.length; i--; i >= 0) {
    if (!progresses[i].success) {
      break;
    }

    count += 1;
  }

  return count;
};
