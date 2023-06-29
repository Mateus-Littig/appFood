/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as Styled from './styles';
import { Button } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import api from '../../../services/api';

export function Login() {
  const navigation = useNavigation();

  const schema = yup.object({
    identifier: yup.string().email('* Email inválido').required('* Informe seu email'),
    password: yup.string().min(6, '* A senha deve conter pelo menos 6 digitos').required('* Informe sua senha'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  async function onSubmit(input) {
    obj = {
      identifier: input.email,
      password: input.password,
    };
    const response = await api.post('/auth/local', obj);
    navigation.navigate('TabRoutes');
  }

  const handleRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <KeyboardAwareScrollView>
      <Styled.Container>
        <Header name="close" title="LOGIN" />

        <Styled.ViewInput>

          <Input
            title="EMAIL"
            placeholder="mateus@email.com"
            name="identifier"
            control={control}
            errors={errors}
          />

          <Input
            title="PASSWORD"
            name="password"
            placeholder="Password"
            RightIcon
            iconName="person-outline"
            iconSize={24}
            iconColor="#67E5CE"
            control={control}
            errors={errors}
          />
          <TouchableOpacity>
            <Styled.Forgot>Forgot Password</Styled.Forgot>
          </TouchableOpacity>
        </Styled.ViewInput>

        <Styled.ViewButton>
          <Button
            name="LOGIN"
            Bck="#2FDBBC"
            Color="#FFF"
            onPress={handleSubmit(onSubmit)}
          />
        </Styled.ViewButton>

        <Styled.Footer>
          <Styled.TextFooter>Don't have an account?</Styled.TextFooter>
          <TouchableOpacity onPress={handleRegister}>
            <Styled.TextLogin> Register</Styled.TextLogin>
          </TouchableOpacity>
        </Styled.Footer>
      </Styled.Container>
    </KeyboardAwareScrollView>
  );
}
