<script lang="ts" setup>
import { inject } from "vue";
import {
  INJECTION_KEY,
  useAddCounterButtonService,
} from "./addCounterButtonService";
import { add } from "ionicons/icons";

//SERVICE
const { navigate } = inject(INJECTION_KEY, useAddCounterButtonService)();
</script>

<template>
  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button @click="navigate">
      <ion-icon :icon="add" />
    </ion-fab-button>
  </ion-fab>
</template>
