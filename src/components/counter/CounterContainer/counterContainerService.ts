import { Counter } from "@/interfaces/counter";
import defaultCounter from "@/util/defaultCounter";
import { Ref, ref } from "vue";
import { getCounter } from "@/accessor/counterAccessor";
import { DateTime } from "luxon";
import { saveFaillure, saveSuccess } from "@/accessor/counterAccessor";

export const INJECTION_KEY = Symbol();

interface CounterContainerService {
  counter: Ref<Counter>;
  currentDate: Ref<DateTime>;
  onSuccess: () => void;
  onFailure: () => void;
  onUpdateCurrentDate: (date: DateTime) => void;
}

export const useCounterContainerService = (
  counterId: number,
): CounterContainerService => {
  const counter: Ref<Counter> = ref(defaultCounter);
  const currentDate: Ref<DateTime> = ref(DateTime.now());

  const resetCounter = () => {
    getCounter(counterId)
      .then((response: Counter) => (counter.value = response))
      .catch((err) => console.error(err));
  };

  const onSuccess = () => {
    if(currentDate.value > DateTime.now().startOf("day")){
      return;
    }

    saveSuccess(counterId, currentDate.value)
      .then(resetCounter)
      .catch((err) => console.error(err));
  };

  const onFailure = () => {
    if(currentDate.value > DateTime.now().startOf("day")){
      return;
    }

    saveFaillure(counterId, currentDate.value)
      .then(resetCounter)
      .catch((err) => console.error(err));
  };

  const onUpdateCurrentDate = (date: DateTime) => {
    currentDate.value = date;
  };

  resetCounter();

  return { counter, currentDate, onSuccess, onFailure, onUpdateCurrentDate };
};
