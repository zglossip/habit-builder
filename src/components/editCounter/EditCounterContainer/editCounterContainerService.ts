import { Counter } from "@/interfaces/counter";
import { getCounter, saveCounter } from "@/util/counterAccessor";
import defaultCounter from "@/util/defaultCounter";
import { Ref, ref } from "vue";
import { useRouter } from "vue-router";

export const INJECTION_KEY = Symbol();

interface EditCounterContainerService {
  counter: Ref<Counter>;
  onUpdateName: (name: string) => void;
  onUpdateGoal: (goal: number) => void;
  onUpdateReward: (reward: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

export const useEditCounterContainerService = (
  id?: number,
): EditCounterContainerService => {
  const $router = useRouter();

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

  const onSave = () => {
    saveCounter(counter.value)
      .then((counterId: number) =>
        $router.push({
          name: "ViewCounter",
          params: { counterId },
        }),
      )
      .catch((err) => console.log(err));
  };

  const onCancel = () => {
    $router.go(-1);
  };

  return {
    counter,
    onUpdateName,
    onUpdateGoal,
    onUpdateReward,
    onSave,
    onCancel,
  };
};
