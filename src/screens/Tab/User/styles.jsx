import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;
export const ContentUser = styled.View`
  width: 80px;
  height: 80px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.Primary};
`;
export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;
export const UserName = styled.Text`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
