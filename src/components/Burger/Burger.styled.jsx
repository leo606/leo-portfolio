import styled from 'styled-components';

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, burgerOpen }) => (burgerOpen ? theme.primaryDark : theme.primaryLight)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ burgerOpen }) => (burgerOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ burgerOpen }) => (burgerOpen ? '0' : '1')};
      transform: ${({ burgerOpen }) => (burgerOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ burgerOpen }) => (burgerOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default StyledBurger;
