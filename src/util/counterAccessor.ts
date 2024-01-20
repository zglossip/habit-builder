import { Counter } from "@/interfaces/counter";
import { DateTime } from "luxon";

export const getCounter = async (id: number): Promise<Counter> => {
  return {
    id,
    name: "Test Counter",
    description: "This is a test counter",
    reward: "You get a test reward",
    goal: 21,
    progress: [
      {
        date: DateTime.fromISO("2024-01-01"),
        success: true,
      },
      {
        date: DateTime.fromISO("2024-01-02"),
        success: true,
      },
      {
        date: DateTime.fromISO("2024-01-03"),
        success: true,
      },
    ],
  };
};

export const saveSuccess = async (counterId: number, date: DateTime) => {
  
}

export const saveFaillure = async (counterId: number, date: DateTime) => {
  
}

