<script setup lang="ts">
import { inject } from "vue";
import {
  INJECTION_KEY,
  useCounterContainerService,
} from "./counterContainerService";
import EditButton from "../EditButton/EditButton.vue";
import DeleteButton from "../DeleteButton/DeleteButton.vue";
import CounterSummary from "../CounterSummary/CounterSummary.vue";
import CounterCalendar from "../CounterCalendar/CounterCalendar.vue";
import ProgessInput from "../ProgressInput/ProgressInput.vue";

//PROPS
interface Props {
  counterId: number;
}

const props = defineProps<Props>();

//SERVICE
const {
  counter,
  currentDate,
  onSuccess,
  onFailure,
  onUpdateCurrentDate,
  resetCounter,
} = inject(INJECTION_KEY, useCounterContainerService)(props.counterId);

//EXPOSE
defineExpose({ resetCounter });
</script>

<template>
  <EditButton :counter-id="counterId" />
  <DeleteButton :counter-id="counterId" />
  <CounterSummary :counter="counter" />
  <CounterCalendar
    :counter="counter"
    :current-date="currentDate"
    @update:counter-date="onUpdateCurrentDate"
  />
  <ProgessInput @success="onSuccess" @failure="onFailure" />
</template>
