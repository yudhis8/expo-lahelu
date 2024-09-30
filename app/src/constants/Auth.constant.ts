export const types = {
  SET_AUTH_REQUEST: 'SET_AUTH_REQUEST',
  SET_AUTH_SUCCESS: 'SET_AUTH_SUCCESS',
  SET_AUTH_FAILED: 'SET_AUTH_FAILED',
  SET_AUTH_RESET: 'SET_AUTH_RESET',
  SET_AUTH_MODAL: 'SET_AUTH_MODAL',
};

export type AuthctionTypes = keyof typeof types;
