import styled from 'styled-components/native';

export const Container = styled.View`
`;
export const ViewInput = styled.View`
  margin-top: 130px;
`;
export const ViewButton = styled.View`
  margin-top: 50px;
`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const TextFooter = styled.Text`
  color:  ${({ theme }) => theme.COLORS.Gray};
  font-size: 16px;
`;
export const TextLogin = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.Secondary};
`;
