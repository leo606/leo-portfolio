import React from 'react';
import StyledFooter from './Footer.styled';

const LINKEDIN_ICON = 'https://github.com/devicons/devicon/raw/master/icons/linkedin/linkedin-plain.svg';
const GITHUB_ICON = 'https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg';

function Footer() {
  return (
    <StyledFooter>
      <h3>Contate-me</h3>
      <div>
        <a href="https://www.linkedin.com/in/leonardolmf/" target="_blank" rel="noreferrer">
          <img src={LINKEDIN_ICON} alt="LinkedIn Icon" />
        </a>
        <a href="https://github.com/leo606" target="_blank" rel="noreferrer">
          <img src={GITHUB_ICON} alt="GitHub Icon" />
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;
