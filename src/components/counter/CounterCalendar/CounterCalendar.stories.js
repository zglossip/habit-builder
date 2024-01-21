import { testCounter } from "@/storybook/storybookData";
import CounterCalendar from "./CounterCalendar.vue";
import { provide, ref } from "vue";
import { INJECTION_KEY } from "./counterCalendarService";
import { DateTime } from "luxon";
import { action } from "@storybook/addon-actions";
import { FAILURE, SUCCESS } from "./calendarColors";

//STUB

export const stubCounterCalendarService = (
  currentDateString = ref(DateTime.now().toFormat("yyyy-MM-dd")),
  calendarOptions = ref([]),
) => {
  provide(INJECTION_KEY, () => ({
    currentDateString,
    calendarOptions,
    onDateUpdate: action("updating date"),
  }));
};

//META
export default {
  title: "Counter/Counter Calendar",
  component: CounterCalendar,
  excludeStories: /stubCounterCalendarService/,
  args: {
    counter: testCounter,
    currentDate: DateTime.now(),
    currentDateString: ref(DateTime.now().toFormat("yyyy-MM-dd")),
    calendarOptions: ref([
      {
        date: DateTime.now().toFormat("yyyy-MM-dd"),
        textColor: SUCCESS.text,
        backgroundColor: SUCCESS.background,
      },
      {
        date: DateTime.now().minus({ day: 1 }).toFormat("yyyy-MM-dd"),
        textColor: SUCCESS.text,
        backgroundColor: SUCCESS.background,
      },
      {
        date: DateTime.now().minus({ day: 2 }).toFormat("yyyy-MM-dd"),
        textColor: FAILURE.text,
        backgroundColor: FAILURE.background,
      },
    ]),
  },
  render: (args) => ({
    components: { CounterCalendar },
    setup: () => {
      stubCounterCalendarService(args.currentDate, args.calendarOptions);
      return { ...args };
    },
    template: `<CounterCalendar :counter="counter" :currend-date="currentDate" />`,
  }),
};

//STORIES
export const Default = {};
