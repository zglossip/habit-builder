<script setup lang="ts">
import CounterList from "../../components/allCounters/CounterList/CounterList.vue";
import AddCounterButton from "../../components/allCounters/AddCounterButton/AddCounterButton.vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Counters</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <CounterList />
      <AddCounterButton />
    </ion-content>
  </ion-page>
</template>
