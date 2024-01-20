<script setup lang="ts">
import { inject } from "vue";
import {
  INJECTION_KEY,
  useEditCounterContainerService,
} from "./editCounterContainerService";
import CounterForm from "../CounterForm/CounterForm.vue";
import { IonRow, IonCol, IonGrid } from "@ionic/vue";
import CancelButton from "../CancelButton/CancelButton.vue";
import SaveButton from "../SaveButton/SaveButton.vue";

//PROPS
interface Props {
  counterId?: number;
}

const props = defineProps<Props>();

//SERVICE
const { counter, onUpdateName, onUpdateGoal, onUpdateReward } = inject(
  INJECTION_KEY,
  useEditCounterContainerService,
)(props.counterId);
</script>

<template>
  <CounterForm
    :name="counter.name"
    :goal="counter.goal"
    :reward="counter.reward"
    @update:name="onUpdateName"
    @update:goal="onUpdateGoal"
    @update:reward="onUpdateReward"
  />
  <ion-grid>
    <ion-row>
      <ion-col>
        <CancelButton />
      </ion-col>
      <ion-col>
        <SaveButton />
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
