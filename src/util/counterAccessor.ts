import { Counter } from "@/interfaces/counter";

export const getCounter = async (id: number): Promise<Counter> => {
  return {
    id,
    name: "Test Counter",
    description: "This is a test counter",
    reward: "You get a test reward",
    goal: 21,
    progress: [
      {
        date: new Date("2024-01-01"),
        success: true,
      },
      {
        date: new Date("2024-01-02"),
        success: true,
      },
      {
        date: new Date("2024-01-03"),
        success: true,
      },
    ],
  };
};
