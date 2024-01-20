import { Meta, StoryObj } from "@storybook/vue3";
import CancelButton from "./CancelButton.vue";
import { provide } from "vue";
import { INJECTION_KEY } from "./cancelButtonService";
import { action } from "@storybook/addon-actions";

//STUB

export const stubCancelButtonService = () => {
  provide(INJECTION_KEY, () => ({
    onClick: action("cancel"),
  }));
};

//META

const meta = {
  title: "Edit Counter/Cancel Button",
  component: CancelButton,
  excludeStories: /stubCancelButtonService/,
  render: () => ({
    components: { CancelButton },
    setup: () => {
      stubCancelButtonService();
    },
    template: `<CancelButton />`,
  }),
} satisfies Meta<typeof CancelButton>;

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
