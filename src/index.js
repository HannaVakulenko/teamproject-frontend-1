import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { App } from 'App';
import { theme, lightTheme, darkTheme } from 'styles/theme';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeToggler } from 'components/MainLayout';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <ThemeProvider theme={theme}>
//           <GlobalStyle />
//           <BrowserRouter basename="/teamproject-frontend-1">
//             <App />
//           </BrowserRouter>
//         </ThemeProvider>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );

const Root = () => {
  const [isLightTheme, setIsLightTheme] = useState(false); // Створення стану

  const toggleTheme = () => {
    setIsLightTheme(prevIsLightTheme => !prevIsLightTheme);
  };

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
            <GlobalStyle />
            <BrowserRouter basename="/teamproject-frontend-1">
              <App />
              {/* Передача стану і функції до компонента ThemeToggler */}
              {/* <ThemeToggler
              toggleTheme={toggleTheme}
              isLightTheme={isLightTheme}
              /> */}
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
