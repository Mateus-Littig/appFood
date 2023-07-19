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
  margin-top: 20px;
  color: ${({ theme }) => theme.COLORS.Primary};
`;
export const Button = styled.TouchableOpacity`
  min-width: 127px;
  height: 40px; 
  background-color: ${(props) => (props.isSelected ? '#2FDBBC' : '#eeee')};
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
export const Card = styled.View`
  width: 157px;
  height: 230px;
  margin-left: 15px;
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
