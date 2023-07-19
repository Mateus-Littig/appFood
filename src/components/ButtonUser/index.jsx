import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as Styled from './styles';

export function ButtonUser({
  name, onPress, iconName, iconSize,
}) {
  return (
    <Styled.Container>
      <TouchableOpacity onPress={onPress}>
        <AntDesign
          name={iconName}
          size={iconSize}
          color="#2FDBBC"
        />
      </TouchableOpacity>
      <Styled.ViewText>
        <Styled.Title>{name}</Styled.Title>
      </Styled.ViewText>
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={26}
          color="#2D2D2D"
        />
      </TouchableOpacity>
    </Styled.Container>
  );
}
