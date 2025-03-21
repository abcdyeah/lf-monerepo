import { useMachine } from '@xstate/react';
import { toggleMachine } from '@lf/state';

export function useToggle() {
  const [state, send] = useMachine(toggleMachine);
  const isActive = state.matches('active');

  return {
    isActive,
    toggle: () => send({ type: 'TOGGLE' })
  };
}