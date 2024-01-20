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

  getCounter(counterId)
    .then((response: Counter) => (counter.value = response))
    .catch((err) => console.error(err));

  const onSuccess = () => {
    saveSuccess(counterId, currentDate.value)
      .then(() => console.log("Saved successfully"))
      .catch((err) => console.error(err));
  };

  const onFailure = () => {
    saveFaillure(counterId, currentDate.value)
      .then(() => console.log("Saved successfully"))
      .catch((err) => console.error(err));
  };

  const onUpdateCurrentDate = (date: DateTime) => {
    currentDate.value = date;
  };

  return { counter, currentDate, onSuccess, onFailure, onUpdateCurrentDate };
};
