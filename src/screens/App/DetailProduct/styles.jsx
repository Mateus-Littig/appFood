import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;
export const ContentHeader = styled.View`
`;
export const Img = styled.Image`
  min-width: 400px;
  min-height: 325px;
  margin: 0 auto;
`;
export const Icon = styled.Image`
  width: 30px;
  height: 30px;
  bottom: 270px;
`;
export const ViewIcon = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;
export const ViewTitle = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;
export const ViewProduct = styled.View`
  flex-direction: column;
`;
export const ViewClock = styled.View`
  top: 8px;
  flex-direction: column;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;
export const Sub = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.Secondary};
`;
export const Clock = styled.Image`
  left: 28px;
`;
export const ViewDesc = styled.View`
`;
export const TitleDesc = styled.Text`
  width: 90%;
  font-size: 15px;
  font-weight: 600;
  margin: auto;
`;
export const Desc = styled.Text`
  width: 90%;
  top: 5px;
  font-size: 17px;
  font-weight: 500;
  margin: auto;
  color: gray;
`;
export const Footer = styled.View`
  width: 85%;
  margin: auto;
  justify-content: space-between;
  flex-direction: row;
`;
export const FooterTitle = styled.Text`
  left: 20px;
  color: ${({ theme }) => theme.COLORS.Primary};
  font-size: 16px;
  font-weight: 600;
  position: absolute;
`;
export const ViewQuantity = styled.View`
  width: 157px;
  height: 40px;
  top: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.LightGray};
  border-radius: 20px;
`;
export const Value = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;
export const IconMore = styled.Image`

`;
export const IconLess = styled.Image`
  left: 20px;
`;
export const ViewSub = styled.View`
  top: 5px;
`;
export const SubTotal = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
export const Price = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.Primary};
`;
export const ViewButton = styled.View`
`;
