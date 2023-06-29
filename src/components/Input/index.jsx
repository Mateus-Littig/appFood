import React, { useState } from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import { Controller } from 'react-hook-form';
import * as Styled from './styles';

export function Input({
  title, LeftIcon, iconName, iconSize, iconColor, placeholder, inputRef,
  RightIcon, control, errors, name, onSubmitEditing,
}) {
  const [secury, setSecury] = useState();

  return (
    <Styled.Container>

      <Styled.TitleInput>{title}</Styled.TitleInput>

      <Styled.ViewInput>
        {LeftIcon && (
          <Icon
            name={iconName}
            size={iconSize}
            color={iconColor}
            style={{ padding: 5, left: 5 }}
          />
        )}
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Styled.InputText
              placeholder={placeholder}
              secureTextEntry={secury}
              placeholderTextColor="#828282"
              onChangeText={onChange}
              ref={inputRef}
              onSubmitEditing={onSubmitEditing}
              onBlur={onBlur} // É chamado quando o TextInput é tocado.
              value={value}
            />
          )}
        />
        {RightIcon && (
          <Styled.Button onPress={() => setSecury(!secury)}>
            <Icon
              name={secury ? 'eye-off' : 'eye'}
              size={iconSize}
              color={iconColor}
              style={{ padding: 5, right: 8 }}
            />
          </Styled.Button>
        )}
      </Styled.ViewInput>
      {errors[name] && <Styled.LabelError>{errors[name].message}</Styled.LabelError>}
    </Styled.Container>
  );
}
