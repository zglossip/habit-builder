import { provide } from "vue";
import EditButton from "./EditButton.vue";
import { Meta, StoryObj } from "@storybook/vue3";
import { INJECTION_KEY } from "./editButtonService";
import { action } from "@storybook/addon-actions";

//STUBS
export const stubEditButtonService = () => {
  provide(INJECTION_KEY, (counterId: number) => ({
    navigate: action(`navigating to edit counter ${counterId}`),
  }));
};

//META
const meta = {
  title: "Counter/Edit Button",
  args: {
    counterId: 100,
  },
  component: EditButton,
  excludeStories: /stubEditButtonService/,
  render: (args: any) => ({
    components: { EditButton },
    setup: () => {
      stubEditButtonService();
      return { ...args };
    },
    template: `<EditButton :counter-id="counterId" />`,
  }),
} satisfies Meta<typeof EditButton>;

export default meta;

//STORIES
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
