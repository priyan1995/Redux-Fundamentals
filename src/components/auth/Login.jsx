import { Box, Button } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UiInput } from '../common/UiInput';
import { login } from '../../actions/authActions';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loginError = useSelector((state) => state.auth.loginError);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(login(username, password));
    },
    [dispatch, username, password]
  );

  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <>
      <h2 className="main-title">Login</h2>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <UiInput
          type="text"
          label="Username"
          name="username"
          autoComplete="username"
          required
          value={username}
          onChange={handleUsernameChange}
        />

        <UiInput
          type="password"
          label="Password"
          name="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={handlePasswordChange}
        />

        {loginError && (
          <p className="text-red" role="alert">
            {loginError}
          </p>
        )}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </>
  );
}
