import { Ref, provide, ref } from "vue";
import { INJECTION_KEY } from "./counterContainerService";
import { testCounter } from "@/storybook/storybookData";
import { DateTime } from "luxon";
import { action } from "@storybook/addon-actions";
import CounterContainer from "./CounterContainer.vue";
import { stubCounterCalendarService } from "../CounterCalendar/CounterCalendar.stories";
import { stubCounterSummaryService } from "../CounterSummary/CounterSummary.stories";
import { stubEditButtonService } from "../EditButton/EditButton.stories";
import { stubProgressInputService } from "../ProgressInput/ProgressInput.stories";
import { Meta, StoryObj } from "@storybook/vue3";
import { IonPage, IonContent } from "@ionic/vue";

//STUBS

export const stubCounterContainerService = () => {
  provide(INJECTION_KEY, (currentDate: Ref<DateTime>) => ({
    counter: ref(testCounter),
    currentDate: ref(DateTime.now()),
    onSuccess: action("saving success date"),
    onFailure: action("saving failure date"),
    onUpdateCurrentDate: (date: DateTime) => (currentDate.value = date),
  }));
};

//META

const meta = {
  title: "Counter/Counter Container",
  component: CounterContainer,
  excludeStories: /stubCounterContainerService/,
  args: {
    counterId: 100,
  },
  render: (args: any) => ({
    components: { CounterContainer, IonPage, IonContent },
    setup: () => {
      stubCounterContainerService();
      stubCounterCalendarService();
      stubCounterSummaryService();
      stubEditButtonService();
      stubProgressInputService();
      return { ...args };
    },
    template: `
    <ion-page>
      <ion-content>
        <CounterContainer :counter-id="counterId" />
      </ion-content>
    </ion-page>
    `,
  }),
} satisfies Meta<typeof CounterContainer>;

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
