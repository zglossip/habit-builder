import { provide, ref } from "vue";
import CounterList from "./CounterList.vue";
import { INJECTION_KEY } from "./counterListService";
import { Meta, StoryObj } from "@storybook/vue3";
import { Counter } from "@/interfaces/counter";
import { stubCounterListItemService } from "../CounterListItem/CounterListItem.stories";
import { testCounters } from "@/storybook/storybookData";

//STUB

export const stubCounterListService = (counters: Counter[]) => {
  provide(INJECTION_KEY, () => ({
    counters: ref(counters),
  }));
}

// META

const meta = {
  title: "All Counters/Counter List",
  component: CounterList,
  excludeStories: /stubCounterListService/,
  render: (args: any) => ({
    components: { CounterList },
    setup: () => {
      stubCounterListService(args.counters)
      stubCounterListItemService();
    },
    template: `
            <CounterList />
        `,
  }),
} satisfies Meta<typeof CounterList>;

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const FullList: Story = {
  args: {
    counters: testCounters,
  },
};

export const EmptyList: Story = {
  args: {
    counters: [],
  },
};
