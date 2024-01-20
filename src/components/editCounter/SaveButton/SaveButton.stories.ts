import { Meta, StoryObj } from "@storybook/vue3";
import SaveButton from "./SaveButton.vue";
import { provide } from "vue";
import { INJECTION_KEY } from "./saveButtonService";
import { action } from "@storybook/addon-actions";

//STUB

export const stubSaveButtonService = () => {
  provide(INJECTION_KEY, () => ({
    onClick: action("save"),
  }));
};

//META

const meta = {
  title: "Edit Counter/Save Button",
  component: SaveButton,
  excludeStories: /stubSaveButtonService/,
  render: () => ({
    components: { SaveButton },
    setup: () => {
      stubSaveButtonService();
    },
    template: `<SaveButton />`,
  }),
} satisfies Meta<typeof SaveButton>;

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
