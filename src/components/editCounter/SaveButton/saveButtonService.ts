export const INJECTION_KEY = Symbol();

interface SaveButtonService {
  onClick: () => void;
}

export const useSaveButtonService = (
  emitSave: () => void,
): SaveButtonService => {
  const onClick = () => emitSave();

  return { onClick };
};
