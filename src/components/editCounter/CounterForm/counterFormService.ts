export const INJECTION_KEY = Symbol();

interface CounterFormService {
  onNameInput: (input: string) => void;
  onGoalInput: (input: number) => void;
  onRewardInput: (input: string) => void;
}

export const useCounterFormService = (
  emitUpdateName: (name: string) => void,
  emitUpdateGoal: (goal: number) => void,
  emitUpdateReward: (reward: string) => void,
): CounterFormService => {
  const onNameInput = (input: string) => emitUpdateName(input);
  const onGoalInput = (input: number) => emitUpdateGoal(input);
  const onRewardInput = (input: string) => emitUpdateReward(input);

  return {
    onNameInput,
    onGoalInput,
    onRewardInput,
  };
};
