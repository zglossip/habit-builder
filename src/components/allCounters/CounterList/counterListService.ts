import { Counter } from "@/interfaces/counter";
import { getCounters } from "@/accessor/counterAccessor";
import { Ref, ref } from "vue";

interface CounterListService {
  counters: Ref<Counter[]>;
  refresh: () => void;
}

export const INJECTION_KEY = Symbol();

export const useCounterListService = (): CounterListService => {
  const counters: Ref<Counter[]> = ref([]);

  const refresh = () => {
    getCounters()
      .then((response) => (counters.value = response))
      .catch((err) => console.error(err));
  };
  
  return { counters, refresh };
};
