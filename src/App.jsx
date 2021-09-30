import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import useOnClickOutside from './hooks';
import './App.css';
import GlobalStyles from './global';
import theme from './theme';
import { Burger, Menu, Header } from './components';

function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setBurgerOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <div ref={node}>
          <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
          <Menu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
