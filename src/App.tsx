import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { theme } from './theme';
import { ApplicationRoutes } from './routes';


function App() {
  return (
    <ThemeProvider theme={theme}>
        <ApplicationRoutes/>
      </ThemeProvider>
  );
}

export default App;
