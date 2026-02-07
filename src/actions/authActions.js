import { LOGIN, LOGIN_FAILED, LOGOUT } from '../actionTypes/authActionType';
import { validateCredentials } from '../config/auth.config';

const DEFAULT_ERROR_MESSAGE = 'Invalid username or password.';

/**
 * Attempts to log in with the given credentials.
 * Dispatches LOGIN on success or LOGIN_FAILED with an error message on failure.
 */
export function login(username, password) {
  const valid = validateCredentials(username, password);
  if (valid) {
    return {
      type: LOGIN,
      payload: { username: (username || '').trim() },
    };
  }
  return {
    type: LOGIN_FAILED,
    payload: { message: DEFAULT_ERROR_MESSAGE },
  };
}

export function logout() {
  return { type: LOGOUT };
}
