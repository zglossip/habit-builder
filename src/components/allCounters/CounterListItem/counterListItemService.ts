import { useRouter } from "vue-router";

export interface CounterListItemService {
  navigate: () => void;
}

export const INJECTION_KEY = Symbol();

export const useCounterListItemService = (
  id: number,
): CounterListItemService => {
  const $router = useRouter();

  const navigate = () => {
    $router.push({
      name: "ViewCounter",
      params: { counterId: id },
    });
  };

  return { navigate };
};
