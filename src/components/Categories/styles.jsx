import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: 150px;
  height: 40px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.Light};
`;
export const Title = styled.Text`
  font-size: 14px;
`;
