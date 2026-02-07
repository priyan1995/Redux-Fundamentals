import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@mui/material';
import { ThemeProvider } from './context/ThemeContext';
import { DarkModeButton } from './components/common/DarkModeButton';
import { AppNav } from './components/layout/AppNav';
import { AppRoutes } from './components/layout/AppRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider>
          <DarkModeButton />
          <Container>
            <AppNav />
            <AppRoutes />
          </Container>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
