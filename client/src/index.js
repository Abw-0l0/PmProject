import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import store from "./store/store"
import {Provider} from "react-redux"


let theme = createTheme({
    palette: {
      success: {
        main: '#A7B778',
      },
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
        </Provider>
      </ThemeProvider>    
    </BrowserRouter>
  </React.StrictMode>
);