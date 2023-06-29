import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 20px;
`;
export const Body = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
export const Category = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
`;
export const ViewAll = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.Primary};
`;
export const Button = styled.TouchableOpacity`
  min-width: 127px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.LightGray};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 15px;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
export const Footer = styled.View`
  margin-top: 20px;
`;
