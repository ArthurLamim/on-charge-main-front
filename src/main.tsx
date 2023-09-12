import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/global.css'
import {Theme as RadixTheme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import {HashRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {Theme} from "./config/theme.ts";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {LoadScript} from "@react-google-maps/api";
const googleMapsApiKey = 'AIzaSyBFUbPy7qUhM83meN5BbymMMLaF8WNXS9E';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <RadixTheme>
          <HashRouter basename={'/'}>
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
              <App />
            </LoadScript>
          </HashRouter>
        </RadixTheme>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
