import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import * as Styled from './styles';

export function Header(props) {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.ContentHeader onPress={() => navigation.goBack()}>
        <AntDesign name={props?.name} size={25} />
      </Styled.ContentHeader>
      <Styled.Title>{props?.title}</Styled.Title>
    </Styled.Container>
  );
}
