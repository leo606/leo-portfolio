import styled from 'styled-components';

const StyledProjectCard = styled.div`
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  padding: 0.3em;
  margin: 0.3em 0.3em;

  img {
    max-width: 100%;
    margin: 0 auto;
  }

  h4 {
    font-size: 1.9em;
  }

  div {
    margin: 0.5em 0;
  }

  span {
    padding: 0.06em 0.3em;
  }

  span:nth-child(1) {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    margin-right: 1em;
    border-radius: 0.3em;
  }

  p {
    font-size: 1.1em;
  }

  @media screen and (min-width:768px){
    width: 350px;
  }
`;

export default StyledProjectCard;
