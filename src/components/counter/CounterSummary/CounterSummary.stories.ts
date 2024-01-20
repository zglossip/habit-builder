import CounterSummary from "./CounterSummary.vue";
import { Meta, StoryObj } from "@storybook/vue3";

//META
const meta = {
  title: "Counter/Counter Summary",
  component: CounterSummary,
} satisfies Meta<typeof CounterSummary>;

export default meta;

//STORIES
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
