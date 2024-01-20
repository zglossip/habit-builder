import { Counter } from "@/interfaces/counter";
import { getCounters } from "@/util/counterAccessor";
import { Ref, ref } from "vue";

interface CounterListService {
  counters: Ref<Counter[]>;
}

export const INJECTION_KEY = Symbol();

export const useCounterListService = (): CounterListService => {
  const counters: Ref<Counter[]> = ref([]);

  getCounters()
    .then((response) => (counters.value = response))
    .catch((err) => console.error(err));

  return { counters };
};
