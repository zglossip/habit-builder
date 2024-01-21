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
    return result.values.map((c) => {
      const id: number = c.ID;
      const name: string = c.NAME;
      const goal: number = c.GOAL;
      const reward: string = c.REWARD;
      const progress: Progress[] = [];
      //const progressResult = await db.query('SELECT DATE, SUCCESS FROM PROGRESS WHERE COUNTER_ID = ?', [id])
      return {
        id,
        name,
        goal,
        reward,
        progress,
      };
    });
  }

  return [];
};

export const saveCounter = async (counter: Counter): Promise<number> => {
  console.log("saving", counter);
  return 100;
};

export const saveSuccess = async (counterId: number, date: DateTime) => {
  console.log("Saving", counterId, date);
};

export const saveFaillure = async (counterId: number, date: DateTime) => {
  console.log("Saving", counterId, date);
};
