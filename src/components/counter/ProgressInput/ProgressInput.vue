<script setup lang="ts">
import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/vue";
import { checkmark, close } from "ionicons/icons";
import { inject } from "vue";
import { INJECTION_KEY, useProgressInputService } from "./progressInputService";

//EMITS
const emit = defineEmits<{
  (e: "success"): void;
  (e: "failure"): void;
}>();

const emitSuccess = () => emit("success");
const emitFailure = () => emit("failure");

//SERVICE
const { onSuccess, onFailure } = inject(INJECTION_KEY, useProgressInputService)(
  emitSuccess,
  emitFailure,
);
</script>

<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-button expand="block" @click="onFailure" color="danger">
          <ion-icon :icon="close" />
        </ion-button>
      </ion-col>
      <ion-col>
        <ion-button expand="block" @click="onSuccess" color="success">
          <ion-icon :icon="checkmark" />
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
