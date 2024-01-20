import { provide } from "vue";
import ProgressInput from "./ProgressInput.vue";
import { Meta, StoryObj } from "@storybook/vue3";
import { INJECTION_KEY } from "./progressInputService";
import { action } from "@storybook/addon-actions";

export const stubProgressInputService = () => {
  provide(INJECTION_KEY, () => ({
    onSuccess: action(`saving success progress`),
    onFailure: action(`saving failure progress`),
  }));
};

//META
const meta = {
  title: "Counter/Progress Input",
  component: ProgressInput,
  excludeStories: /stubProgressInputService/,
  render: () => ({
    components: { ProgressInput },
    setup: () => {
      stubProgressInputService();
    },
    template: `<ProgressInput />`,
  }),
} satisfies Meta<typeof ProgressInput>;

export default meta;

//STORIES
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
