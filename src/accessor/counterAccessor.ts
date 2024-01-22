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

export const saveCounter = async (counter: Counter, isUpdate: boolean) => {
  console.debug(isUpdate, JSON.stringify(counter))
  if (isUpdate) {
    const db = await useDb();
    const result = await db.run(
      "UPDATE COUNTER SET NAME = ?,  GOAL = ?, REWARD = ? WHERE ID = ?",
      [counter.name, counter.goal, counter.reward, counter.id],
    );
    console.debug(JSON.stringify(result))
  } else {
    const db = await useDb();
    await db.run("INSERT INTO COUNTER(NAME, GOAL, REWARD) VALUES (?, ?, ?)", [
      counter.name,
      counter.goal,
      counter.reward,
    ]);
  }
};

export const saveSuccess = async (counterId: number, date: DateTime) => {
  const db = await useDb();
  await db.run("DELETE FROM PROGRESS WHERE COUNTER_ID = ? AND DATE = ?", [
    counterId,
    date.toFormat("yyyy-MM-dd"),
  ]);
  await db.run(
    "INSERT INTO PROGRESS(COUNTER_ID, DATE, SUCCESS) VALUES (?, ?, 'T')",
    [counterId, date.toFormat("yyyy-MM-dd")],
  );
};

export const saveFaillure = async (counterId: number, date: DateTime) => {
  const db = await useDb();
  await db.run("DELETE FROM PROGRESS WHERE COUNTER_ID = ? AND DATE = ?", [
    counterId,
    date.toFormat("yyyy-MM-dd"),
  ]);
  await db.run(
    "INSERT INTO PROGRESS(COUNTER_ID, DATE, SUCCESS) VALUES (?, ?, 'F')",
    [counterId, date.toFormat("yyyy-MM-dd")],
  );
};

export const deleteCounter = async (counterId: number) => {
  const db = await useDb();
  await db.run("DELETE FROM PROGRESS WHERE COUNTER_ID = ?", [counterId]);
  await db.run("DELETE FROM COUNTER WHERE ID = ?", [counterId]);
};
