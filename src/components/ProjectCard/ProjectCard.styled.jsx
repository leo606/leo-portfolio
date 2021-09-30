import styled from 'styled-components';

const StyledProjectCard = styled.div`
  background-color: green;
  padding: 0.3em;
  margin: 0.6em 0;

  img {
    max-width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width:768px){
    width: 300px;
  }
`;

export default StyledProjectCard;
