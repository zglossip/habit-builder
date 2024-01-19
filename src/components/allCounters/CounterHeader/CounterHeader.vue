<script lang="ts" setup>
import {INJECTION_KEY, useCounterHeaderService} from '@/components/allCounters/CounterHeader/counterHeaderService'
import { inject } from 'vue';

//PROPS
interface Props {
    id: number,
    name: string,
    progressCount: number
}

const props = defineProps<Props>()

//SERVICE
const {navigate} = inject(INJECTION_KEY, useCounterHeaderService)(props.id)
</script>

<template>
    <ion-item :button="true" @click="navigate">
        <ion-label>{{name}}</ion-label>
        <ion-note slot="end">{{ progressCount }}</ion-note>
      </ion-item>
</template>