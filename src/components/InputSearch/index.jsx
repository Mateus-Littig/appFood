import React from 'react';
import * as Styled from './styles';

export function InputSearch({
  title, placeholder, onChangeText, value,
}) {
  return (
    <Styled.Container>

      <Styled.TitleInput>{title}</Styled.TitleInput>

      <Styled.ViewInput>
        <Styled.InputText
          placeholder={placeholder}
          placeholderTextColor="#828282"
          onChangeText={onChangeText}
          value={value}
        />
      </Styled.ViewInput>
    </Styled.Container>
  );
}
