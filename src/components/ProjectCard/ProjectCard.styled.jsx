import styled from 'styled-components';

const StyledProjectCard = styled.div`
  color: ${({ theme }) => theme.primaryLight};
  padding: 0.3em;
  margin: 0.9em 0.3em;
  border-radius: 0.3em;

  img {
    max-width: 100%;
    margin: 0 auto;
    border-radius: 0.5em;
  }

  h4 {
    font-size: 1.6em;
  }

  div {
    margin: 1em 0;
  }

  span {
    padding: 0.06em 0.3em;
  }

  span:nth-child(1) {
    background-color: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    margin-right: 1em;
    border-radius: 0.3em;
  }

  span:nth-child(2) {
    opacity: 90%;
  }

  p {
    font-size: 1.1em;
  }

  @media screen and (min-width:768px){
    width: 350px;
  }
`;

export default StyledProjectCard;
