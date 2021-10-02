import styled from 'styled-components';

const StyledProjects = styled.main`
  padding: 2em 1em;

  h3 {
    text-align: center;
    font-size: 2em;
    background-color: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    width: fit-content;
    margin: 0 auto;
    padding: 0 0.1em;
    border-radius: 0.1em;
  }

  section {
    margin: 0 auto;
    max-width: 1300px;
  }

  @media screen and (min-width:460px){
    section {
      width: 96vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (min-width:768px){
    section {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: flex-start;
    }
  }
`;

export default StyledProjects;
