<script setup lang="ts">
import { inject } from "vue";
import { INJECTION_KEY, useCounterFormService } from "./counterFormService";
import { IonList, IonItem, IonInput } from "@ionic/vue";

//PROPS

interface Props {
  name: string;
  goal: number;
  reward: string;
}

defineProps<Props>();

//EMITS

const emit = defineEmits<{
  (e: "update:name", name: string): void;
  (e: "update:goal", goal: number): void;
  (e: "update:reward", goal: string): void;
}>();

const emitUpdateName = (name: string) => emit("update:name", name);
const emitUpdateGoal = (goal: number) => emit("update:goal", goal);
const emitUpdateReward = (reward: string) => emit("update:reward", reward);

//SERVICE
const { onNameInput, onGoalInput, onRewardInput } = inject(
  INJECTION_KEY,
  useCounterFormService,
)(emitUpdateName, emitUpdateGoal, emitUpdateReward);
</script>

<template>
  <ion-list>
    <ion-item>
      <ion-input
        label="Name"
        :value="name"
        @ion-input="onNameInput($event.detail.value ? $event.detail.value : '')"
      />
    </ion-item>
    <ion-item>
      <ion-input
        label="Goal"
        :value="goal"
        type="number"
        @ion-input="onGoalInput(Number($event.detail.value))"
      />
    </ion-item>
    <ion-item>
      <ion-input
        label="Reward"
        :value="reward"
        @ion-input="
          onRewardInput($event.detail.value ? $event.detail.value : '')
        "
      />
    </ion-item>
  </ion-list>
</template>
