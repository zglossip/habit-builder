import { useRouter } from "vue-router";

export const INJECTION_KEY = Symbol();

interface EditButtonService {
  navigate: () => void;
}

export const useEditButtonService = (counterId: number): EditButtonService => {
  const $router = useRouter();

  const navigate = () => {
    $router.push({
      name: "EditCounter",
      params: {
        counterId,
      },
    });
  };

  return { navigate };
};
