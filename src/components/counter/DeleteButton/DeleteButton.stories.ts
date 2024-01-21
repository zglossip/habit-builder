import { provide } from "vue";
import DeleteButton from "./DeleteButton.vue";
import { Meta, StoryObj } from "@storybook/vue3";
import { INJECTION_KEY } from "./deleteButtonService";
import { action } from "@storybook/addon-actions";

//STUBS
export const stubDeleteButtonService = () => {
  provide(INJECTION_KEY, (counterId: number) => ({
    deleteAndNavigate: action(`deleting counter ${counterId}`),
  }));
};

//META
const meta = {
  title: "Counter/Delete Button",
  args: {
    counterId: 100,
  },
  component: DeleteButton,
  excludeStories: /stubDeleteButtonService/,
  render: (args: any) => ({
    components: { DeleteButton },
    setup: () => {
      stubDeleteButtonService();
      return { ...args };
    },
    template: `<DeleteButton :counter-id="counterId" />`,
  }),
} satisfies Meta<typeof DeleteButton>;

export default meta;

//STORIES
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
