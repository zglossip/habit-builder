import { testCounter } from "@/storybook/storybookData";
import CounterSummary from "./CounterSummary.vue";
import { Meta, StoryObj } from "@storybook/vue3";
import { computed, provide } from "vue";
import { INJECTION_KEY } from "./counterSummaryService";

//STUBS
export const stubCounterSummaryService = () => {
  provide(INJECTION_KEY, () => ({
    currentStreak: computed(() => 12),
  }));
};

//META
const meta = {
  title: "Counter/Counter Summary",
  component: CounterSummary,
  excludeStories: /stubCounterSummaryService/,
  args: {
    counter: testCounter,
  },
} satisfies Meta<typeof CounterSummary>;

export default meta;

//STORIES
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
