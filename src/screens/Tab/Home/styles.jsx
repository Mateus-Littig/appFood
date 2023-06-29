import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;
`;
export const Header = styled.View`
  width: 90%;
  margin: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ViewTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Body = styled.View`

`;
export const Banner = styled.Image`
  width: 100%;
  margin-top: 20px;
`;
export const Text = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.Primary};
  font-weight: 600;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
export const ViewRecommend = styled.View`
  width: 90%;
  margin: auto;
  margin-top: 20px;
`;
export const Recommend = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const ViewCard = styled.View`
  
`;
export const TitleHome = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.Secondary};
`;
export const Restaurant = styled.Text`
  width: 90%;
  margin: auto;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
`;
export const ViewRestaurant = styled.View`
  width: 90px;
  margin-left: 10px;
  margin-top: 20px;
`;
export const CardRestaurant = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.White};
  margin: auto;
`;
export const Img = styled.Image`
  width: 64px;
  height: 64px;
`;
