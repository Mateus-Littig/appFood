import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const ViewText = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
`;
export const TextDiff = styled.Text`
  color: ${({ theme }) => theme.COLORS.Primary};
`;
export const Title = styled.Text`
  font-size: 25px;
  font-weight: 600;
`;
export const TextSub = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
  color: black;
`;
export const ViewButton = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: center;
  bottom: 15px;
`;
