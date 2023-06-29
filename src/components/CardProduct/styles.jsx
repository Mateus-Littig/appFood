import styled from 'styled-components/native';

export const Card = styled.View`
  width: 157px;
  height: 230px;
  margin-left: 10px;
  margin-top: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.LightGray};
`;
export const Image = styled.Image`
  width: 157px;
  height: 157px;
`;
export const Icon = styled.Image`
  position: absolute;
  bottom: 15px;
  left: 120px;
`;
export const Name = styled.Text`
  width: 90%;
  font-size: 18px;
  font-weight: 500;
  margin: auto;
`;
export const ViewAdd = styled.View`
  width: 85%;
  margin: auto;
  flex-direction: row;
  justify-content: space-between;
`;
export const Price = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.Primary};
`;
