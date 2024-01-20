import { Counter } from "@/interfaces/counter";
import { DatetimeHighlight } from "@ionic/core";
import { DateTime } from "luxon";
import { ComputedRef, Ref, computed, ref } from "vue";
import { FAILURE, SUCCESS } from "./calendarColors";

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

  const calendarOptions: Ref<DatetimeHighlight[]> = ref(
    counter.progress.map((p) => ({
      date: p.date.toFormat("yyyy-MM-dd"),
      textColor: p.success ? SUCCESS.text : FAILURE.text,
      backgroundColor: p.success ? SUCCESS.background : FAILURE.background,
    })),
  );

  const onDateUpdate = (input: string) => {
    emitDateUpdate(DateTime.fromISO(input));
  };

  return { currentDateString, calendarOptions, onDateUpdate };
};
