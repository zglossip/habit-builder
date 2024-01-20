export const INJECTION_KEY = Symbol();

interface CancelButtonService {
  onClick: () => void;
}

export const useCancelButtonService = (
  emitCancel: () => void,
): CancelButtonService => {
  const onClick = () => emitCancel();

  return { onClick };
};
