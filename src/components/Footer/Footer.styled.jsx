import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  box-shadow: 0 -9px 13px ${({ theme }) => theme.primaryDarkShadow};
  min-height: 15vh;
  padding: 2em 1em;

  h4 {
    text-align: center;
    font-size: 2em;
    color: ${({ theme }) => theme.primaryLight};
    background-color: ${({ theme }) => theme.primaryDark};
    width: fit-content;
    margin: 0 auto 0.3em;
    padding: 0 0.1em;
    border-radius: 0.1em;
  }

  a:hover {
    opacity: 80%;
    transition: 100ms;
  }

  div {
    width: 160px;
    height: 6em;
    margin: 2em auto;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  img {
    width: 42px;
  }
`;

export default StyledFooter;
