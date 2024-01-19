import { Counter } from "@/interfaces/counter";
import { Ref, ref } from "vue";

interface CounterListService {
  counters: Ref<Counter[]>;
}

export const INJECTION_KEY = Symbol();

export const useCounterListService = (): CounterListService => {
  const counters = ref([]);

  //TODO: Get counters

  return { counters };
};
