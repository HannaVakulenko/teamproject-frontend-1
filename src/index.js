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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function AppWrapper() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <GlobalStyle />
        <BrowserRouter basename="/teamproject-frontend-1">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <App />
          </LocalizationProvider>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
