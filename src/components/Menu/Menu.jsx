import React from 'react';
import { bool } from 'prop-types';
import StyledMenu from './Menu.styled';

function Menu({ burgerOpen }) {
  return (
    <StyledMenu burgerOpen={burgerOpen}>
      <a href="/#projects">
        <span role="img" aria-label="projects">&#x1f4f1;</span>
        Projetos
      </a>
      <a href="/#contact">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contate-me
      </a>
    </StyledMenu>
  );
}

export default Menu;

Menu.propTypes = {
  burgerOpen: bool.isRequired,
};
