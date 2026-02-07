import { LOGIN, LOGIN_FAILED, LOGOUT } from '../actionTypes/authActionType';

const initialAuthState = {
  isAuthenticated: false,
  user: null,
  loginError: null,
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload?.username ?? state.user,
        loginError: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginError: action.payload?.message ?? 'Invalid username or password.',
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loginError: null,
      };
    default:
      return state;
  }
};