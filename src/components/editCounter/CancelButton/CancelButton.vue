<script setup lang="ts">
import { inject } from "vue";
import { INJECTION_KEY, useCancelButtonService } from "./cancelButtonService";
import { IonButton } from "@ionic/vue";

//EMITS
const emit = defineEmits<{
  (e: "cancel"): void;
}>();

const emitCancel = () => emit("cancel");

//SERVICE
const { onClick } = inject(INJECTION_KEY, useCancelButtonService)(emitCancel);
</script>

<template>
  <ion-button @click="onClick" color="secondary" expand="block"
    >CANCEL</ion-button
  >
</template>
