import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  box-shadow: 9px 0 13px ${({ theme }) => theme.primaryDarkShadow};
  height: 15vh;
`;

export default StyledFooter;
