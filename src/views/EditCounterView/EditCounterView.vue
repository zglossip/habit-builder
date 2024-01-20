<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import EditCounterContainer from "@/components/editCounter/EditCounterContainer/EditCounterContainer.vue";

//PROPS
interface Props {
  counterId?: number;
}

defineProps<Props>();
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          {{ counterId ? "Edit Counter" : "Create Counter" }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <EditCounterContainer :counter-id="counterId" />
    </ion-content>
  </ion-page>
</template>
