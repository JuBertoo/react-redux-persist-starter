import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes'
import './App.css';
// Override material ui color here and/or use custom company colors 
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#008000',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#ffffff',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router />
      </MuiThemeProvider>
    );
  }
}

export default App;
