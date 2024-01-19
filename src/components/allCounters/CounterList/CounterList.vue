<script setup lang="ts">
import { useCounterListService, INJECTION_KEY } from "./counterListService";
import { inject } from "vue";
import CounterListItem from "../CounterListItem/CounterListItem.vue";
import calculateProgressCount from "../../../util/calculateProgressCount";
import {
  IonList,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

const { counters } = inject(INJECTION_KEY, useCounterListService)();
</script>

<template>
  <ion-list>
    <ion-item v-if="counters.length === 0">
      <ion-label>No Counters</ion-label>
    </ion-item>
    <CounterListItem
      v-else
      v-for="counter in counters"
      :key="counter.id"
      :id="counter.id"
      :name="counter.name"
      :progress-count="calculateProgressCount(counter.progress)"
    />
  </ion-list>
</template>
