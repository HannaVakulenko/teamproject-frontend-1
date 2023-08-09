import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store, persistor } from 'redux/store';
// import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { ThemeProvider } from 'styled-components';

// import { GlobalStyle } from 'styles/GlobalStyles';
// import { App } from 'App';
// import theme from 'styles/theme';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <BrowserRouter basename="/">
//         <App />
//       </BrowserRouter>
//     </ThemeProvider>
//   </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <Provider store={store}>
//         <BrowserRouter basename="/">
//           <PersistGate loading={null} persistor={persistor}>
//             <App />
//           </PersistGate>
//         </BrowserRouter>
//       </Provider>
//     </ThemeProvider>
//   </React.StrictMode>
// );
