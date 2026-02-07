import { Container, FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

export const DarkModeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Container align="right">
      <FormControlLabel
        sx={{ display: 'block' }}
        control={
          <Switch
            checked={isDark}
            onChange={toggleTheme}
            name="Theme"
            color="primary"
          />
        }
        label="Dark Mode"
      />
    </Container>
  );
};