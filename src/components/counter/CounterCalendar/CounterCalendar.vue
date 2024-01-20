<script setup lang="ts">
import { inject } from "vue";
import { Counter } from "../../../interfaces/counter";
import {
  INJECTION_KEY,
  useCounterCalendarService,
} from "./counterCalendarService";
import { IonDatetime } from "@ionic/vue";
import { DateTime } from "luxon";

//PROPS
interface Props {
  counter: Counter;
}

const props = defineProps<Props>();

//EMITS

const emit = defineEmits<{
  (e: "update:counter-date", date: DateTime): void;
}>();

const emitDateUpdate = (date: DateTime) => emit("update:counter-date", date);

//SERVICE
const { currentDateString, calendarOptions, onDateUpdate } = inject(
  INJECTION_KEY,
  useCounterCalendarService,
)(props.counter, emitDateUpdate);
</script>

<template>
  <ion-datetime
    presentation="date"
    :value="currentDateString"
    :highlighted-dates="calendarOptions"
    @update:model-value="onDateUpdate"
  />
</template>
