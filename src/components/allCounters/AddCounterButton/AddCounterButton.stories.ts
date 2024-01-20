import { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";
import AddCounterButton from "./AddCounterButton.vue";
import { provide } from "vue";
import { INJECTION_KEY } from "./addCounterButtonService";

//STUB

export const stubAddCounterButtonService = () => {
  provide(INJECTION_KEY, () => ({
    navigate: action("navigating"),
  }));
};

//META

const meta = {
  title: "All Counters/AddCounterButton",
  component: AddCounterButton,
  excludeStories: /stubAddCounterButtonService/,
  render: () => ({
    components: { AddCounterButton },
    setup: () => {
      stubAddCounterButtonService();
    },
    template: `<AddCounterButton/>`,
  }),
} satisfies Meta<typeof AddCounterButton>;

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
