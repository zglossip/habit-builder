import { Meta, StoryObj } from "@storybook/vue3";
import CounterListItem from "./CounterListItem.vue";
import { provide } from "vue";
import { INJECTION_KEY } from "./counterListItemService";
import { action } from "@storybook/addon-actions";

//STUB

export const stubCounterListItemService = () => {
  provide(INJECTION_KEY, (id: number) => ({
    navigate: action(`navigating to id: ${id}`),
  }));
};

//META

const meta = {
  title: "All Counters/CounterListItem",
  component: CounterListItem,
  excludeStories: /stubCounterListItemService/,
  args: {
    id: 100,
    name: "Test Counter",
    progressCount: 12,
  },
  render: (args: any) => ({
    components: { CounterListItem },
    setup: () => {
      stubCounterListItemService();
      return { ...args };
    },
    template: `
            <CounterListItem :id="id" :name="name" :progress-count="progressCount" />
        `,
  }),
} satisfies Meta<typeof CounterListItem>;

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
