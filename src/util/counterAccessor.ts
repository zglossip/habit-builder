import { Counter } from "@/interfaces/counter";
import { testCounter, testCounters } from "@/storybook/storybookData";
import { DateTime } from "luxon";

export const getCounter = async (id: number): Promise<Counter> => {
  console.log(id)
  return testCounter
};

export const getCounters = async (): Promise<Counter[]> => {
  return testCounters
}

export const saveSuccess = async (counterId: number, date: DateTime) => {
  console.log("Saving", counterId, date);
};

export const saveFaillure = async (counterId: number, date: DateTime) => {
  console.log("Saving", counterId, date);
};
