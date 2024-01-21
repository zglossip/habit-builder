import CounterView from "./CounterView.vue";
import { Meta, StoryObj } from "@storybook/vue3";
import { stubCounterCalendarService } from "@/components/counter/CounterCalendar/CounterCalendar.stories";
import { stubCounterSummaryService } from "@/components/counter/CounterSummary/CounterSummary.stories";
import { stubEditButtonService } from "@/components/counter/EditButton/EditButton.stories";
import { stubProgressInputService } from "@/components/counter/ProgressInput/ProgressInput.stories";
import { stubCounterContainerService } from "@/components/counter/CounterContainer/CounterContainer.stories";
import { stubDeleteButtonService } from "@/components/counter/DeleteButton/DeleteButton.stories";

//META

const meta = {
  title: "Views/View Counter",
  component: CounterView,
  args: {
    counterId: 100,
  },
  render: (args: any) => ({
    components: { CounterView },
    setup: () => {
      stubCounterCalendarService();
      stubCounterSummaryService();
      stubEditButtonService();
      stubDeleteButtonService();
      stubProgressInputService();
      stubCounterContainerService();
      return { ...args };
    },
    template: `<CounterView :counter-id="counterId"/>`,
  }),
} satisfies Meta<typeof CounterView>;

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
