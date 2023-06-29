import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Styled from './styles';

export function RecentSearch({
  name, onPress
}) {
  return (
    <Styled.Container>
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons
          name="history"
          size={26}
          color="#A3A3A3"
        />
      </TouchableOpacity>
      <Styled.Title>{name}</Styled.Title>
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons
          name="close"
          size={26}
          color="#A3A3A3"
        />
      </TouchableOpacity>
    </Styled.Container>
  );
}
