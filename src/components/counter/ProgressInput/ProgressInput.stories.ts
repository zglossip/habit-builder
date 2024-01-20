import { provide } from "vue";
import ProgressInput from "./ProgressInput.vue";
import { Meta, StoryObj } from "@storybook/vue3";
import { INJECTION_KEY } from "./progressInputService";
import {action} from '@storybook/addon-actions'
import { DateTime } from "luxon";

export const stubProgressInputService = () => {
  provide(INJECTION_KEY, (counterId: number, date: DateTime) => ({
    onSuccess: action(`saving success progress for counter ID: ${counterId} and date: ${date.toFormat('yyyy-MM-dd')}`),
    onFailure: action(`saving failure progress for counter ID: ${counterId} and date: ${date.toFormat('yyyy-MM-dd')}`)
  }))
}

//META
const meta = {
  title: "Counter/Progress Input",
  component: ProgressInput,
  args: {
    counterId: 100,
    date: DateTime.now()
  },
  render: (args: any) => ({
    components: {ProgressInput},
    setup: () => {
      stubProgressInputService()
      return {...args}
    },
    template: `<ProgressInput :counter-id="counterId" :date="date" />`
  })
} satisfies Meta<typeof ProgressInput>;

export default meta;

//STORIES
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
