import styled from 'styled-components';

const StyledProjects = styled.main`
  padding: 2em 1em;

  h3 {
    text-align: center;
    font-size: 2em;
  }

  section {
    margin: 0 auto;
    max-width: 1100px;
  }

  @media screen and (min-width:460px){
    section {
      width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (min-width:768px){
    section {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
`;

export default StyledProjects;
