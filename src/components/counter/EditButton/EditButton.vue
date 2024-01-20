<script lang="ts" setup>
import { inject } from "vue";
import { INJECTION_KEY, useEditButtonService } from "./editButtonService";
import { create } from "ionicons/icons";
import { IonFab, IonFabButton, IonIcon } from "@ionic/vue";

//PROPS
interface Props {
  counterId: number;
}

const props = defineProps<Props>();

//SERVICE
const { navigate } = inject(
  INJECTION_KEY,
  useEditButtonService,
)(props.counterId);
</script>

<template>
  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button @click="navigate">
      <ion-icon :icon="create" />
    </ion-fab-button>
  </ion-fab>
</template>
