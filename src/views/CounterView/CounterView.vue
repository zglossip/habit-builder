<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import CounterContainer from "@/components/counter/CounterContainer/CounterContainer.vue";
import { onIonViewDidEnter } from "@ionic/vue";
import { ref } from "vue";

//PROPS
interface Props {
  counterId: number;
}

defineProps<Props>();

//REFRESH
const counterContainer = ref<InstanceType<typeof CounterContainer> | null>(null);
onIonViewDidEnter(() => {
  counterContainer.value?.resetCounter();
});
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> View Counter </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <CounterContainer :counter-id="counterId" ref="counterContainer"/>
    </ion-content>
  </ion-page>
</template>
