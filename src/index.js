//import 'react-app-polyfill/ie11'//remove when ie11 support is dropped
//import 'formdata-polyfill'//remove when ie11 support is dropped
//import 'polyfill/startsWith'//remove when ie11 support is dropped
//import 'polyfill/includes'//remove when ie11 support is dropped
//import 'polyfill/repeat'//remove when ie11 support is dropped


import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
//import * as serviceWorker from './serviceWorker';

//meterial ui
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import App from './App.js';

//oucampus app components
var defaultTheme = {
  palette: {
    type:"light",
    primary: {
      main: '#1a237e'
    },
    secondary: {
      main: '#0097a7'
    },
    background:{
      default:'#eceff1'
    },
    contrastThreshold: 3
  },
  typography: {
     fontSize: 14
  }
}

const theme = createMuiTheme(defaultTheme);

ReactDOM.render(
        <ThemeProvider theme={theme}>
              {/*basename defined in the /.env file. Alters the relative pathing.*/}
              <Router basename={process.env.REACT_APP_ROUTE_BASENAME}>
                <CssBaseline/>
                <App />
              </Router>
          </ThemeProvider>
, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
