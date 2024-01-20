import { Counter } from "@/interfaces/counter";
import { DatetimeHighlight } from "@ionic/core";
import { DateTime } from "luxon";
import { ComputedRef, Ref, computed, ref } from "vue";

export const INJECTION_KEY = Symbol();

interface CounterCalendarService {
  currentDateString: ComputedRef<string>;
  calendarOptions: Ref<DatetimeHighlight[]>;
  onDateUpdate: (input: string) => void;
}

export const useCounterCalendarService = (
  counter: Counter,
  currentDate: Ref<DateTime>,
  emitDateUpdate: (date: DateTime) => void,
): CounterCalendarService => {
  const currentDateString = computed(() =>
    currentDate.value.toFormat("yyyy-MM-dd"),
  );
  const calendarOptions = ref([]);
  console.log(counter);

  const onDateUpdate = (input: string) => {
    emitDateUpdate(DateTime.fromISO(input));
  };

  //TODO Generate calendar options

  return { currentDateString, calendarOptions, onDateUpdate };
};
