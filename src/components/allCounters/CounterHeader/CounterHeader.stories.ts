import { Meta, StoryObj } from "@storybook/vue3";
import CounterHeader from "./CounterHeader.vue";

const meta = {
    title: "All Counters/CounterHeader",
    component: CounterHeader,
    args: {
        name: 'Test Counter',
        progressCount: 12,
    },
    argTypes: {
        onClick: { action: 'clicked' }
    }
} satisfies Meta<typeof CounterHeader>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {}