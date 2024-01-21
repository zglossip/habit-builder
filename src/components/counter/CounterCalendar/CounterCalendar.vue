<script setup lang="ts">
import { inject, toRefs } from "vue";
import { Counter } from "../../../interfaces/counter";
import {
  INJECTION_KEY,
  useCounterCalendarService,
} from "./counterCalendarService";
import { IonDatetime, IonGrid, IonRow, IonCol } from "@ionic/vue";
import { DateTime } from "luxon";

//PROPS
interface Props {
  counter: Counter;
  currentDate: DateTime;
}

const props = defineProps<Props>();

const { counter, currentDate } = toRefs(props);

//EMITS

const emit = defineEmits<{
  (e: "update:counter-date", date: DateTime): void;
}>();

const emitDateUpdate = (date: DateTime) => emit("update:counter-date", date);

//SERVICE
const { currentDateString, calendarOptions, onDateUpdate } = inject(
  INJECTION_KEY,
  useCounterCalendarService,
)(counter, currentDate, emitDateUpdate);
</script>

<template>
  <ion-grid>
    <ion-row class="ion-justify-content-center">
      <ion-col size="auto">
        <ion-datetime
          presentation="date"
          :value="currentDateString"
          :highlighted-dates="calendarOptions"
          @update:model-value="onDateUpdate"
          :max="DateTime.now().toFormat('yyyy-MM-dd')"
        />
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
