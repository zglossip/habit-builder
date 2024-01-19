import { useRouter } from "vue-router";

export interface CounterHeaderService {
  navigate: () => void;
}

export const INJECTION_KEY = Symbol();

export const useCounterHeaderService = (id: number): CounterHeaderService => {
  const $router = useRouter();

  const navigate = () => {
    $router.push({
      name: "ViewCounter",
      params: { id },
    });
  };

  return { navigate };
};
