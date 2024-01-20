export const INJECTION_KEY = Symbol();

interface ProgressInputService {
  onSuccess: () => void;
  onFailure: () => void;
}

export const useProgressInputService = (
  emitSuccess: () => void,
  emitFailure: () => void,
): ProgressInputService => {
  const onSuccess = () => emitSuccess();

  const onFailure = () => emitFailure();

  return { onSuccess, onFailure };
};
