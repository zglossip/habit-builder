import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from "@capacitor-community/sqlite";

export const useDb = async () => {
  const sqliteConnection = new SQLiteConnection(CapacitorSQLite);
  const db: SQLiteDBConnection = await sqliteConnection.createConnection(
    "habit_builder",
    false,
    "no-encryption",
    1,
    false,
  );
  await db.open();

  await db.execute(`
            CREATE TABLE IF NOT EXISTS COUNTER(
                ID INTEGER PRIMARY KEY,
                NAME TEXT,
                GOAL INTEGER,
                REWARD TEXT
            );
        `);

  await db.execute(`
            CREATE TABLE IF NOT EXISTS PROGRESS(
                COUNTER_ID INTEGER,
                DATE TEXT,
                SUCCESS TEXT,
                PRIMARY KEY(COUNTER_ID, DATE),
                FOREIGN KEY(COUNTER_ID) REFERENCES COUNTER(ID)
            );
        `);

  return db;
};
