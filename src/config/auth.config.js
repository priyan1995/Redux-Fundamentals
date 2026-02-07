/**
 * Auth configuration – single source of truth for login credentials.
 * For production, set REACT_APP_AUTH_USERNAME and REACT_APP_AUTH_PASSWORD
 * in your environment and do not commit .env files with real secrets.
 */

const getCredentials = () => ({
  username: process.env.REACT_APP_AUTH_USERNAME || 'admin',
  password: process.env.REACT_APP_AUTH_PASSWORD || 'openme',
});

/**
 * Validates provided credentials against configured values.
 * Uses trimmed, case-sensitive comparison for username; password compared as-is after trim.
 */
export function validateCredentials(username, password) {
  if (typeof username !== 'string' || typeof password !== 'string') {
    return false;
  }
  const trimmedUsername = username.trim();
  const trimmedPassword = password.trim();
  if (!trimmedUsername || !trimmedPassword) {
    return false;
  }
  const { username: validUsername, password: validPassword } = getCredentials();
  return trimmedUsername === validUsername && trimmedPassword === validPassword;
}

export default { validateCredentials };
