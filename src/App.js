import React, { useState } from 'react';
import Homepage from './component/landingpage/LandingPage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const handleMode = (value) => {
    setDarkMode(value);
  }
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#4db6ac',
      },
      secondary: {
        main: '#eceff1',
      },
      type: 'dark', 
      text: {
        secondary: '#fafafa',
      },     
    },
    typography: {
      fontFamily: 'Noto Serif, serif'
    },
    background: '#616161',    
  });
  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#4db6ac',
      },
      secondary: {
        main: '#424242',
      },
      type: 'light',
      text: {
        secondary: '#fafafa',
      },
    },
    typography: {
      fontFamily: 'Noto Serif, serif'
    },
    background: '#fafafa',  
  });  
  let lightThemeResMod = responsiveFontSizes(lightTheme);
  let darkThemeResMod = responsiveFontSizes(darkTheme);

 //    
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme = {darkMode ? darkThemeResMod : lightThemeResMod}> 
          <Homepage changeMode={handleMode} />       
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
