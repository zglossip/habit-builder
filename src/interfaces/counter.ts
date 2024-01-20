import { Progress } from "@/interfaces/progress";

export interface Counter {
  id?: number;
  name: string;
  reward: string;
  goal: number;
  progress: Progress[];
}
