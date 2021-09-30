import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: green;
  height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 2em;

  h1 {
    text-align: center;
    font-size: 1.6em;
    margin: 1em 0;
  }

  h2 {
    text-align: center;
    font-weight: 400;
    font-size: 1.2em;
  }

  img {
    display: block;
    max-width: 90px;
    border-radius: 50%;
  }
`;

export default StyledHeader;
