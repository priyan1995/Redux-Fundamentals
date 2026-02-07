import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export function ThemeFromRoute() {
  const { mode } = useParams();
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  useEffect(() => {
    if (mode === 'dark' || mode === 'light') {
      setTheme(mode);
    }
    navigate('/', { replace: true });
  }, [mode, setTheme, navigate]);

  return null;
}
