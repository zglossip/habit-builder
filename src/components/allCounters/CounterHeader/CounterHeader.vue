<script lang="ts" setup>
interface Props {
    name: string,
    progressCount: number
}

defineProps<Props>()

const emit = defineEmits(['click'])
</script>

<template>
    <ion-item :button="true" @click="emit('click')">
        <ion-label>{{name}}</ion-label>
        <ion-note slot="end">{{ progressCount }}</ion-note>
      </ion-item>
</template>