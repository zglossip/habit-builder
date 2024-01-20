import EditButton from "./EditButton.vue";
import { Meta, StoryObj } from "@storybook/vue3";

//META
const meta = {
  title: "Counter/Edit Button",
  component: EditButton,
} satisfies Meta<typeof EditButton>;

export default meta;

//STORIES
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
