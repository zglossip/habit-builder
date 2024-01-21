import { Counter } from "@/interfaces/counter";
import { DateTime } from "luxon";
import { useDb } from "./db";
import { Progress } from "@/interfaces/progress";

export const getCounter = async (id: number): Promise<Counter> => {
  const db = await useDb();

  const result = await db.query(
    "SELECT ID, NAME, GOAL, REWARD FROM COUNTER WHERE ID = ?",
    [id],
  );
  const progressResult = await db.query(
    "SELECT DATE, SUCCESS FROM PROGRESS WHERE COUNTER_ID = ?",
    [id],
  );
  if (result.values && progressResult.values) {
    return {
      id: result.values[0].ID,
      name: result.values[0].NAME,
      goal: result.values[0].GOAL,
      reward: result.values[0].REWARD,
      progress: progressResult.values.map((v) => ({
        date: DateTime.fromISO(v.DATE),
        success: v.SUCCESS === "T",
      })),
    };
  }

  throw Error(`Counter ${id} not found`);
};

export const getCounters = async (): Promise<Counter[]> => {
  const db = await useDb();

  const result = await db.query("SELECT ID, NAME, GOAL, REWARD FROM COUNTER");
  if (result.values) {
    return Promise.all(
      result.values.map(async (c) => {
        const progressResult = await db.query(
          "SELECT DATE, SUCCESS FROM PROGRESS WHERE COUNTER_ID = ?",
          [c.ID],
        );
        const progress: Progress[] = progressResult.values
          ? progressResult.values.map((v) => ({
              date: DateTime.fromISO(v.DATE),
              success: v.SUCCESS === "T",
            }))
          : [];
        return {
          id: c.ID,
          name: c.NAME,
          goal: c.GOAL,
          reward: c.REWARD,
          progress,
        };
      }),
    );
  }

  return [];
};

export const saveCounter = async (counter: Counter): Promise<number> => {
  const db = await useDb();
  const result = await db.run(
    "INSERT INTO COUNTER(NAME, GOAL, REWARD) VALUES (?, ?, ?)",
    [counter.name, counter.goal, counter.reward],
  );

  return Number(result.changes?.lastId);
};

export const saveSuccess = async (counterId: number, date: DateTime) => {
  console.log("Saving", counterId, date);
};

export const saveFaillure = async (counterId: number, date: DateTime) => {
  console.log("Saving", counterId, date);
};
