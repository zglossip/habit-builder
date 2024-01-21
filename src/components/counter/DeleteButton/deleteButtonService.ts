import { useRouter } from "vue-router";
import { deleteCounter } from "@/accessor/counterAccessor";

export const INJECTION_KEY = Symbol();

interface DeleteButtonService {
  deleteAndNavigate: () => void;
}

export const useDeleteButtonService = (
  counterId: number,
): DeleteButtonService => {
  const $router = useRouter();

  const deleteAndNavigate = () => {
    deleteCounter(counterId).then(() => {
      $router.go(-1);
    });
  };

  return { deleteAndNavigate };
};
