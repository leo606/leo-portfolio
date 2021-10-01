import styled from 'styled-components';

const StyledProjects = styled.section`
  padding: 1em;

  h3 {
    text-align: center;
    font-size: 2em;
  }

  section {
    background-color: aqua;
  }

  @media screen and (min-width:768px){
    section {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export default StyledProjects;
