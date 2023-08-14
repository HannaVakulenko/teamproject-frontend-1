import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { App } from 'App';
import { lightTheme, darkTheme } from 'styles/theme';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/themeSlice';

function AppWrapper() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter basename="/teamproject-frontend-1">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
}
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <BrowserRouter basename="/teamproject-frontend-1">
              <AppWrapper />
            </BrowserRouter>
          </LocalizationProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
