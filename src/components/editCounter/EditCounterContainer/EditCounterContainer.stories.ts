import { Meta, StoryObj } from "@storybook/vue3";
import EditCounterContainer from "./EditCounterContainer.vue";
import { stubCounterFormService } from "../CounterForm/CounterForm.stories";
import { stubSaveButtonService } from "../SaveButton/SaveButton.stories";
import { stubCancelButtonService } from "../CancelButton/CancelButton.stories";
import { provide } from "vue";
import { INJECTION_KEY } from "./editCounterContainerService";
import { testCounter } from "@/storybook/storybookData";
import defaultCounter from "@/util/defaultCounter";

//STUBS

export const stubEditContainerService = () => {
  provide(INJECTION_KEY, (counterId?: number) => ({
    counter: counterId ? testCounter : defaultCounter,
  }));
};

//META

const meta = {
  title: "Edit Counter/Edit Counter Container",
  component: EditCounterContainer,
  excludeStories: /stubEditContainerService/,
  render: () => ({
    components: { EditCounterContainer },
    setup: () => {
      stubCounterFormService();
      stubSaveButtonService();
      stubCancelButtonService();
      stubEditContainerService();
    },
    template: `<EditCounterContainer />`,
  }),
} satisfies Meta<typeof EditCounterContainer>;

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
