import {types} from '../../constants/Auth.constant';

export interface AuthState {
  data: boolean;
  fetching: boolean;
  error?: string | null;
  modalOpen: boolean;
}

export interface AuthAction {
  type: string;
  data: boolean;
  message?: string;
}

const initialState: AuthState = {
  data: false,
  fetching: false,
  error: null,
  modalOpen: false,
};

const auth = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case types.SET_AUTH_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.SET_AUTH_SUCCESS:
      return {
        ...state,
        data: true,
        fetching: false,
        error: null,
      };
    case types.SET_AUTH_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.message || null,
      };
    case types.SET_AUTH_MODAL:
      return {
        ...state,
        modalOpen: action.data,
      };
    case types.SET_AUTH_RESET:
      return initialState;
    default:
      return state;
  }
};

export default auth;
