import { Meta, StoryObj } from "@storybook/vue3";
import CounterListItem from "./CounterListItem.vue";
import { provide } from "vue";
import { INJECTION_KEY } from "./counterListItemService";
import { action } from "@storybook/addon-actions";

//META

const meta = {
  title: "All Counters/CounterListItem",
  component: CounterListItem,
  args: {
    id: 100,
    name: "Test Counter",
    progressCount: 12,
  },
  render: (args) => ({
    components: { CounterListItem },
    setup: () => {
      provide(INJECTION_KEY, (id: number) => ({
        navigate: action(`navigating to id: ${id}`),
      }));
      return { args };
    },
    template: `
            <CounterListItem v-bind="args" />
        `,
  }),
} satisfies Meta<typeof CounterListItem>;

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
