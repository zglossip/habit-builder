<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import CounterContainer from "@/components/counter/CounterContainer/CounterContainer.vue";
//PROPS
interface Props {
  counterId: number;
}

defineProps<Props>();
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> View Counter </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <CounterContainer :counter-id="counterId" />
    </ion-content>
  </ion-page>
</template>
