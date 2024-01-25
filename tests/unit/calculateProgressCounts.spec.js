import { describe, it, expect } from "vitest";
import calculateProgressCounts from "../../src/util/calculateProgressCount";
import { DateTime } from "luxon";

describe("calculateProgressCounts", () => {
  it("can count a streak", () => {
    const progress = [
      {
        date: DateTime.now().minus({ days: 1 }),
        success: true,
      },
      {
        date: DateTime.now(),
        success: true,
      },
    ];
    expect(calculateProgressCounts(progress)).to.equal(2);
  });
  it("can count a streak with a failure", () => {
    const progress = [
      {
        date: DateTime.now().minus({ days: 3 }),
        success: true,
      },
      {
        date: DateTime.now().minus({ days: 2 }),
        success: false,
      },
      {
        date: DateTime.now().minus({ days: 1 }),
        success: true,
      },
      {
        date: DateTime.now(),
        success: true,
      },
    ];
    expect(calculateProgressCounts(progress)).to.equal(2);
  });
  it("can count a streak with a gap", () => {
    const progress = [
      {
        date: DateTime.now().minus({ days: 3 }),
        success: true,
      },
      {
        date: DateTime.now().minus({ days: 1 }),
        success: true,
      },
      {
        date: DateTime.now(),
        success: true,
      },
    ];
    expect(calculateProgressCounts(progress)).to.equal(2);
  });
  it("can count an unsorted array", () => {
    const progress = [
      {
        date: DateTime.now().minus({ days: 1 }),
        success: true,
      },
      {
        date: DateTime.now().minus({ days: 2 }),
        success: false,
      },
      {
        date: DateTime.now(),
        success: true,
      },
    ];
    expect(calculateProgressCounts(progress)).to.equal(2);
  });
  it("can handle an empty array", () => {
    expect(calculateProgressCounts([])).to.equal(0);
  });
});
