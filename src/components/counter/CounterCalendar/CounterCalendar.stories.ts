import { testCounter } from "@/storybook/storybookData";
import CounterCalendar from "./CounterCalendar.vue";
import { Meta, StoryObj } from "@storybook/vue3";
import { Ref, provide, ref } from "vue";
import { INJECTION_KEY } from "./counterCalendarService";
import { DateTime } from "luxon";
import { action } from "@storybook/addon-actions";
import { DatetimeHighlight } from "@ionic/core";
import { FAILURE, SUCCESS } from "./calendarColors";

//STUB

export const stubCounterCalendarService = (
  currentDateString: Ref<string> = ref(DateTime.now().toFormat("yyyy-MM-dd")),
  calendarOptions: Ref<DatetimeHighlight[]> = ref([]),
) => {
  provide(INJECTION_KEY, () => ({
    currentDateString,
    calendarOptions,
    onDateUpdate: action("updating date"),
  }));
};

//META
const meta = {
  title: "Counter/Counter Calendar",
  component: CounterCalendar,
  excludeStories: /stubCounterCalendarService/,
  args: {
    counter: testCounter,
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
  render: (args: any) => ({
    components: { CounterCalendar },
    setup: () => {
      stubCounterCalendarService(args.currentDate, args.calendarOptions);
      return { ...args };
    },
    template: `<CounterCalendar :counter="counter" />`,
  }),
} satisfies Meta<typeof CounterCalendar>;

export default meta;

//STORIES
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
