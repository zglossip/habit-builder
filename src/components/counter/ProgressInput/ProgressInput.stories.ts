import ProgressInput from "./ProgressInput.vue";
import { Meta, StoryObj } from "@storybook/vue3";

//META
const meta = {
  title: "Counter/Progress Input",
  component: ProgressInput,
} satisfies Meta<typeof ProgressInput>;

export default meta;

//STORIES
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
