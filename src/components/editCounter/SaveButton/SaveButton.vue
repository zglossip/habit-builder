<script setup lang="ts">
import { inject } from "vue";
import { INJECTION_KEY, useSaveButtonService } from "./saveButtonService";
import { IonButton } from "@ionic/vue";

//EMITS
const emit = defineEmits<{
  (e: "save"): void;
}>();

const emitSave = () => emit("save");

//SERVICE
const { onClick } = inject(INJECTION_KEY, useSaveButtonService)(emitSave);
</script>

<template>
  <ion-button @click="onClick" expand="block">SAVE</ion-button>
</template>
