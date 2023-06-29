import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as Styled from './styles';

export default function Home() {
  return (
    <TouchableOpacity>
      <Styled.Container>
        <Styled.Title>Breakfast</Styled.Title>
      </Styled.Container>
    </TouchableOpacity>
  );
}
