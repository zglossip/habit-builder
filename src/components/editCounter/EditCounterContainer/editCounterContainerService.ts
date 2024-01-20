import { Counter } from "@/interfaces/counter";
import { getCounter } from "@/util/counterAccessor";
import defaultCounter from "@/util/defaultCounter";
import { Ref, ref } from "vue";

export const INJECTION_KEY = Symbol();

interface EditCounterContainerService {
  counter: Ref<Counter>;
  onUpdateName: (name: string) => void;
  onUpdateGoal: (goal: number) => void;
  onUpdateReward: (reward: string) => void;
}

export const useEditCounterContainerService = (
  id?: number,
): EditCounterContainerService => {
  const counter: Ref<Counter> = ref(defaultCounter);

  if (id) {
    getCounter(Number(id))
      .then((response: Counter) => (counter.value = response))
      .catch((err) => console.error(err));
  }

  const onUpdateName = (name: string) => {
    counter.value.name = name;
  };

  const onUpdateGoal = (goal: number) => {
    counter.value.goal = goal;
  };

  const onUpdateReward = (reward: string) => {
    counter.value.reward = reward;
  };

  return { counter, onUpdateName, onUpdateGoal, onUpdateReward };
};
