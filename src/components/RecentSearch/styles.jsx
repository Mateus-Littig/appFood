import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  flex-direction: row;
  margin: auto;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.Gray};
`;
