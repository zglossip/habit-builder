import { Counter } from "../../src/interfaces/counter";
import { DateTime } from "luxon";

export const testCounter: Counter = {
  id: 1,
  name: "Exercise",
  reward: "A night out",
  goal: 30,
  progress: [
    {
      date: DateTime.fromISO("2024-01-01"),
      success: true,
    },
    {
      date: DateTime.fromISO("2024-01-02"),
      success: false,
    },
    {
      date: DateTime.fromISO("2024-01-03"),
      success: true,
    },
  ],
};

export const testCounters: Counter[] = [
  testCounter,
  {
    id: 2,
    name: "Chores",
    reward: "A night out",
    goal: 21,
    progress: [
      {
        date: DateTime.fromISO("2024-01-01"),
        success: true,
      },
      {
        date: DateTime.fromISO("2024-01-02"),
        success: false,
      },
      {
        date: DateTime.fromISO("2024-01-03"),
        success: true,
      },
    ],
  },
  {
    id: 3,
    name: "Reading",
    reward: "A new bookshelf",
    goal: 300,
    progress: [
      {
        date: DateTime.fromISO("2023-01-01"),
        success: true,
      },
      {
        date: DateTime.fromISO("2024-01-01"),
        success: false,
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
  },
  {
    id: 4,
    name: "Dog Walking",
    reward: "A new dog",
    goal: 100,
    progress: [],
  },
];
