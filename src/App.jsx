import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import useOnClickOutside from './hooks';
import './App.css';
import GlobalStyles from './global';
import theme from './theme';
import { Burger, Menu } from './components';

function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setBurgerOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>test</h1>
          <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
        </div>
        <div ref={node}>
          <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
          <Menu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
