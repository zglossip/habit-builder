<script setup lang="ts">
import { Counter } from "@/interfaces/counter";
import {
  INJECTION_KEY,
  useCounterSummaryService,
} from "@/components/counter/CounterSummary/counterSummaryService";
import { inject, toRefs } from "vue";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

//PROPS
interface Props {
  counter: Counter;
}

const props = defineProps<Props>();
const { counter } = toRefs(props);

//SERVICE
const { currentStreak } = inject(
  INJECTION_KEY,
  useCounterSummaryService,
)(counter);
</script>

<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ counter.name }}</ion-card-title>
      <ion-card-subtitle>Goal: {{ counter.goal }} days</ion-card-subtitle>
      <ion-card-subtitle>
        Current streak: {{ currentStreak }}
      </ion-card-subtitle>
      <ion-card-subtitle> Reward: {{ counter.reward }} </ion-card-subtitle>
    </ion-card-header>
  </ion-card>
</template>
