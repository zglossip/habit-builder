import { describe, it, expect } from "vitest";
import calculateProgressCounts from "../../src/util/calculateProgressCount";
import { DateTime } from "luxon";

describe("calculateProgressCounts", () => {
  it("can count a streak", () => {
    const progress = [
      {
        date: DateTime.fromObject({ year: 2024, month: 1, day: 1 }),
        success: true,
      },
      {
        date: DateTime.fromObject({ year: 2024, month: 1, day: 2 }),
        success: false,
      },
      {
        date: DateTime.fromObject({ year: 2024, month: 1, day: 3 }),
        success: true,
      },
      {
        date: DateTime.fromObject({ year: 2024, month: 1, day: 4 }),
        success: true,
      },
    ];
    expect(calculateProgressCounts(progress)).to.equal(2);
  });
  it("can handle an empty array", () => {
    expect(calculateProgressCounts([])).to.equal(0);
  });
});
