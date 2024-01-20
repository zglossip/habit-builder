import { Counter } from "@/interfaces/counter";
import { DateTime } from "luxon";

export default {
  name: "",
  description: "",
  reward: "",
  goal: 21,
  progress: [{ date: DateTime.now(), success: false }],
} satisfies Counter;
