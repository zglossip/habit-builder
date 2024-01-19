import { Meta, StoryObj } from "@storybook/vue3";
import CounterHeader from "./CounterHeader.vue";
import { provide } from "vue";
import { INJECTION_KEY } from "./counterHeaderService";
import { action } from '@storybook/addon-actions';

//META

const meta = {
    title: "All Counters/CounterHeader",
    component: CounterHeader,
    args: {
        id: 100,
        name: 'Test Counter',
        progressCount: 12,
    },
    render: (args) => ({
        components: {CounterHeader},
        setup: () => {
            provide(INJECTION_KEY, (id: number) => ({
                navigate: action(`navigating to id: ${id}`)
            }))
            return {args}
        },
        template: `
            <CounterHeader v-bind="args" />
        `
    })
} satisfies Meta<typeof CounterHeader>

export default meta;

//STORIES

type Story = StoryObj<typeof meta>;

export const Default: Story = {}