<script lang="ts" setup>
import { inject } from "vue";
import { INJECTION_KEY, useDeleteButtonService } from "./deleteButtonService";
import { trash } from "ionicons/icons";
import { IonFab, IonFabButton, IonIcon } from "@ionic/vue";

//PROPS
interface Props {
  counterId: number;
}

const props = defineProps<Props>();

//SERVICE
const { deleteAndNavigate } = inject(
  INJECTION_KEY,
  useDeleteButtonService,
)(props.counterId);
</script>

<template>
  <ion-fab slot="fixed" vertical="bottom" horizontal="start">
    <ion-fab-button @click="deleteAndNavigate" color="danger">
      <ion-icon :icon="trash" />
    </ion-fab-button>
  </ion-fab>
</template>
