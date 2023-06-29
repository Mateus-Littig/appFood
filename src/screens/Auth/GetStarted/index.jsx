import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { Button } from '../../../components/Button';

export function GetStarted() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Styled.Container>
      <Styled.ViewText>
        <Styled.Title>
          GET
          <Styled.TextDiff> STARTED</Styled.TextDiff>
        </Styled.Title>
        <Styled.TextSub>
          Get started and enjoy the awesome local food right
          at your home.
        </Styled.TextSub>
      </Styled.ViewText>
      <Styled.ViewButton>
        <Button name="LOGIN" Bck="#2FDBBC" Color="#FFF" onPress={handleLogin} />
        <Button name="REGISTER" Border="#2FDBBC" onPress={handleRegister} />
      </Styled.ViewButton>
    </Styled.Container>
  );
}
