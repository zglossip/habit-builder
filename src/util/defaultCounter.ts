import { Counter } from "@/interfaces/counter";

export default {
  name: "",
  description: "",
  reward: "",
  goal: 21,
  progress: [{ date: new Date(), success: false }],
} satisfies Counter;
