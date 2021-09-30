import React from 'react';
import StyledHeader from './Header.styled';
import avatar from '../../images/avatar.jpg';

function Header() {
  return (
    <StyledHeader>
      <img src={avatar} alt="leonardo" />
      <section>
        <h1>Olá, Sou Arnold Schaznegger, estudante de desenvolvimento Web</h1>
        <h2>
          Apaixonado por tecnologia e inovação e isso foi o que me levou a
          estudar Desenvolvimentode Software.
          Procuro sempre aprender, aprimorar meus conhecimentos e viver novas experiências
        </h2>
      </section>
    </StyledHeader>
  );
}

export default Header;
