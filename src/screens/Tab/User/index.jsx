/* eslint-disable global-require */
import React from 'react';
// import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { ButtonUser } from '../../../components/ButtonUser';

export default function User() {
  return (
    <Styled.Container>
      <Styled.ContentUser>
        <Styled.Avatar source={{ uri: 'https://github.com/Mateus-littig.png' }} />
      </Styled.ContentUser>

      <Styled.UserName>Mateus Littig</Styled.UserName>

      <ButtonUser
        name="Conta e Perfil"
        iconName="edit"
        iconSize={25}
      />
      <ButtonUser
        name="Gerenciar métodos de pagamento"
        iconName="wallet"
        iconSize={25}
      />
      <ButtonUser
        name="Gerenciar endereços"
        iconName="enviromento"
        iconSize={25}
      />
      <ButtonUser
        name="Histórico de pedidos"
        iconName="reload1"
        iconSize={25}
      />
      <ButtonUser
        name="Contato com o suporte"
        iconName="contacts"
        iconSize={25}
      />
      <ButtonUser
        name="Indique a um amigo"
        iconName="gift"
        iconSize={25}
      />
      <ButtonUser
        name="Escreva uma crítica"
        iconName="staro"
        iconSize={25}
      />
      <ButtonUser
        name="Termos e condições"
        iconName="filetext1"
        iconSize={25}
      />
      <ButtonUser
        name="Política de Privacidade"
        iconName="file1"
        iconSize={25}
      />
      <ButtonUser
        name="Logout"
        iconName="logout"
        iconSize={25}
      />
    </Styled.Container>
  );
}
