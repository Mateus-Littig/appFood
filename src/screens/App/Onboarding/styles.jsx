import styled from 'styled-components/native';

export const Container = styled.View`
`;
export const Bck = styled.Image`
  position: absolute;
  width: 100%;
`;
export const ViewSlide = styled.View`
  width: 100%;
  position: absolute;
  top: 534px;
`;
export const ViewImage = styled.View`
`;
export const ViewText = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
export const ViewTouch = styled.View`
  width: 350px;
  height: 40px;
  margin: auto;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.COLORS.Primary};
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  bottom: 15px;
`;
export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.White};
  font-size: 18px;
  font-weight: 700;
`;
export const TextDiff = styled.Text`
  color: ${({ theme }) => theme.COLORS.Primary};
`;
export const Title = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color:  ${({ theme }) => theme.COLORS.White};
`;
export const TextSub = styled.Text`
  margin-top: 15px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.White};
`;
