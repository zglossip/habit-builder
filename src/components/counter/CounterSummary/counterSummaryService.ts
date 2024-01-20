import { Counter } from "@/interfaces/counter";
import calculateProgressCount from "@/util/calculateProgressCount";
import { ComputedRef, Ref, computed } from "vue";

export const INJECTION_KEY = Symbol();

interface CounterSummaryService {
  currentStreak: ComputedRef<number>;
}

export const useCounterSummaryService = (
  counter: Ref<Counter>,
): CounterSummaryService => {
  const currentStreak = computed(() =>
    calculateProgressCount(counter.value.progress),
  );

  return { currentStreak };
};
