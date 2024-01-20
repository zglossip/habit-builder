import EditCounterView from "./EditCounterView.vue";
import { stubCancelButtonService } from "@/components/editCounter/CancelButton/CancelButton.stories";
import { stubCounterFormService } from "@/components/editCounter/CounterForm/CounterForm.stories";
import { stubEditContainerService } from "@/components/editCounter/EditCounterContainer/EditCounterContainer.stories";
import { stubSaveButtonService } from "@/components/editCounter/SaveButton/SaveButton.stories";
import { Meta, StoryObj } from "@storybook/vue3";

//META

const meta = {
  title: "Views/Edit Counter",
  component: EditCounterView,
  render: (args: any) => ({
    components: { EditCounterView },
    setup: () => {
      stubCancelButtonService();
      stubCounterFormService();
      stubEditContainerService();
      stubSaveButtonService();
      return { ...args };
    },
    template: `<EditCounterView :counter-id="counterId"/>`,
  }),
} satisfies Meta<typeof EditCounterView>;

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const Create: Story = {};

export const Edit: Story = {
  args: {
    counterId: 100,
  },
};
