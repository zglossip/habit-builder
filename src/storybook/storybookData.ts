import { Counter } from "@/interfaces/counter";

export const testCounters: Counter[] = [
  {
    id: 1,
    name: "Exercise",
    description: "Cardio and resistance training",
    reward: "A night out",
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
  },
  {
    id: 2,
    name: "Chores",
    description: "Dishes and laundry",
    reward: "A night out",
    goal: 21,
    progress: [
      {
        date: new Date("2024-01-01"),
        success: true,
      },
      {
        date: new Date("2024-01-02"),
        success: false,
      },
      {
        date: new Date("2024-01-03"),
        success: true,
      },
    ],
  },
  {
    id: 3,
    name: "Reading",
    description: "Reading every night",
    reward: "A new bookshelf",
    goal: 300,
    progress: [
      {
        date: new Date("2023-01-01"),
        success: true,
      },
      {
        date: new Date("2024-01-01"),
        success: false,
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
  },
  {
    id: 4,
    name: "Dog Walking",
    description: "Taking the dog to the dog park every day",
    reward: "A new dog",
    goal: 100,
    progress: [],
  },
];
