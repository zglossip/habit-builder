import { Meta, StoryObj } from "@storybook/vue3";
import { action } from '@storybook/addon-actions';

//META

import AddCounterButton from "./AddCounterButton.vue";
import { provide } from "vue";
import { INJECTION_KEY } from "./addCounterButtonService";

const meta = {
    title: "All Counters/AddCounterButton",
    component: AddCounterButton,
    render: () => ({
        components: {AddCounterButton},
        setup: () => {
            provide(INJECTION_KEY, () => ({
                navigate: action('navigating')
            }))
        },
        template: `<AddCounterButton/>`
    })
} satisfies Meta<typeof AddCounterButton>

export default meta;

//STORIES

type Story = StoryObj<typeof meta>

export const Default: Story = {}