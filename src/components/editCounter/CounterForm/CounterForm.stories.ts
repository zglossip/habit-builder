import { provide } from "vue";
import { INJECTION_KEY } from "./counterFormService";
import { action } from "@storybook/addon-actions";
import CounterForm from "./CounterForm.vue";
import { Meta, StoryObj } from "@storybook/vue3";

//STUB

export const stubCounterFormService = () => {
  provide(INJECTION_KEY, () => ({
    onNameInput: action(`update name`),
    onGoalInput: action(`update goal`),
    onRewardInput: action(`update reward`),
  }));
};

//META

const meta = {
  title: "Edit Counter/CounterForm",
  component: CounterForm,
  excludeStories: /stubCounterFormService/,
  args: {
    name: "Exercise",
    goal: 21,
    reward: "A night out",
  },
  render: (args: any) => ({
    components: { CounterForm },
    setup: () => {
      stubCounterFormService();
      return { ...args };
    },
    template: `<CounterForm :name="name" :goal="goal" :reward="reward" />`,
  }),
} satisfies Meta<typeof CounterForm>;

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
