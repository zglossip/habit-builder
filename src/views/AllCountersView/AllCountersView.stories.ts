import AllCountersView from "./AllCountersView.vue";
import { stubCounterListItemService } from "@/components/allCounters/CounterListItem/CounterListItem.stories";
import { stubCounterListService } from "@/components/allCounters/CounterList/CounterList.stories";
import { Meta, StoryObj } from "@storybook/vue3";
import { testCounters } from "@/storybook/storybookData";
import { stubAddCounterButtonService } from "@/components/allCounters/AddCounterButton/AddCounterButton.stories";

//META

const meta = {
    title: "Views/All Counters",
    component: AllCountersView,
    render: () => ({
        components: {AllCountersView},
        setup: () => {
            stubAddCounterButtonService();
            stubCounterListService(testCounters)
            stubCounterListItemService()
        },
        template: `<AllCountersView />`
    })
} satisfies Meta<typeof AllCountersView>

export default meta;

//STORIES

type Story = StoryObj<typeof meta>

export const Default: Story = {}