/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
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

export function Register() {
  const schema = yup.object({
    username: yup.string().required('* Informe seu nome completo'),
    email: yup.string().email('* Email inválido').required('* Informe seu email'),
    phone: yup.string().min(11, '* O número deve conter pelo menos 11 digitos').required('* Informe seu número'),
    password: yup.string().min(6, '* A senha deve conter pelo menos 6 digitos').required('* Informe sua senha'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  async function onSubmit(input) {
    obj = {
      username: input.username,
      email: input.email,
      phone: input.phone,
      password: input.password,
    };
    const response = await api.post('/auth/local/register', obj);
    // console.log(response);
  }
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  // useEffect(() => {
  //   async function registerUser() {
  //   }
  //   registerUser();
  // }, []);

  return (
    <KeyboardAwareScrollView>
      <Styled.Container>
        <Header name="close" title="REGISTER" />

        <Styled.ViewInput>
          <Input
            title="FULL NAME"
            name="username"
            placeholder="Mateus Littig"
            control={control}
            errors={errors}
          />

          <Input
            title="EMAIL"
            name="email"
            placeholder="mateus@email.com"
            control={control}
            errors={errors}
          />

          <Input
            title="PHONE"
            placeholder="11 91234 5678"
            control={control}
            errors={errors}
            name="phone"
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
        </Styled.ViewInput>

        <Styled.ViewButton>
          <Button
            name="REGISTER"
            Bck="#2FDBBC"
            Color="#FFF"
            onPress={handleSubmit(onSubmit)}
          />
        </Styled.ViewButton>

        <Styled.Footer>
          <Styled.TextFooter>Already have an account?</Styled.TextFooter>
          <TouchableOpacity onPress={handleLogin}>
            <Styled.TextLogin> Login</Styled.TextLogin>
          </TouchableOpacity>
        </Styled.Footer>
      </Styled.Container>
    </KeyboardAwareScrollView>
  );
}
