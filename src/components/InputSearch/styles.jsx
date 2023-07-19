import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 20px;
`;
export const ViewInput = styled.View`
  width: 90%;
  flex-direction: row;
  background-color: #E0E0E0;
  border: 0;
  height: 40px;
  border-radius: 20px;
  margin-top: 5px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
`;
export const TitleInput = styled.Text`
  width: 90%;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  color:  ${({ theme }) => theme.COLORS.Primary};
  font-weight: bold;
`;
export const InputText = styled.TextInput`
  width: 85%;
  height: 40px;
  padding: 4px;
  font-size: 15px;
`;
