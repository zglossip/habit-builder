import CounterCalendar from "./CounterCalendar.vue";
import { Meta, StoryObj } from "@storybook/vue3";

//META
const meta = {
  title: "Counter/Counter Calendar",
  component: CounterCalendar,
} satisfies Meta<typeof CounterCalendar>;

export default meta;

//STORIES
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
