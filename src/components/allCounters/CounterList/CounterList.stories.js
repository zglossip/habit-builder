import { provide, ref } from "vue";
import CounterList from "./CounterList.vue";
import { INJECTION_KEY } from "./counterListService";
import { stubCounterListItemService } from "../CounterListItem/CounterListItem.stories";
import { testCounters } from "@/storybook/storybookData";

//STUB

export const stubCounterListService = (counters) => {
  provide(INJECTION_KEY, () => ({
    counters: ref(counters),
  }));
};

// META

export default {
  title: "All Counters/Counter List",
  component: CounterList,
  excludeStories: /stubCounterListService/,
  render: (args) => ({
    components: { CounterList },
    setup: () => {
      stubCounterListService(args.counters);
      stubCounterListItemService();
    },
    template: `
            <CounterList />
        `,
  }),
}

//STORIES

export const FullList = {
  args: {
    counters: testCounters,
  },
};

export const EmptyList = {
  args: {
    counters: [],
  },
};
