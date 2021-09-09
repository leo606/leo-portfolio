import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global';
import theme from './theme';
import { Burger, Menu } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Burger />
        <Menu />
        <GlobalStyles />
        <div>
          <h1>test</h1>
          <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
