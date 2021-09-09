import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global';
import theme from './theme';
import { Burger, Menu } from './components';

function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>test</h1>
          <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
        </div>
        <div>
          <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
          <Menu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
