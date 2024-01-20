<script lang="ts" setup>
import {
  INJECTION_KEY,
  useCounterListItemService,
} from "@/components/allCounters/CounterListItem/counterListItemService";
import { inject } from "vue";
import { IonItem, IonLabel, IonNote } from "@ionic/vue";

//PROPS
interface Props {
  id: number;
  name: string;
  progressCount: number;
}

const props = defineProps<Props>();

//SERVICE
const { navigate } = inject(INJECTION_KEY, useCounterListItemService)(props.id);
</script>

<template>
  <ion-item :button="true" @click="navigate">
    <ion-label>{{ name }}</ion-label>
    <ion-note slot="end">{{ progressCount }}</ion-note>
  </ion-item>
</template>
