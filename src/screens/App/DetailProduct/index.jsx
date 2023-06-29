/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { Button } from '../../../components/Button';
import api from '../../../services/api';

export function DetailProduct() {
  const route = useRoute();
  const navigation = useNavigation();

  const [produtos, setProdutos] = useState();
  const [qtdProd, setQtdProd] = useState(1);
  const [price, setPrice] = useState();

  useEffect(() => {
    getProductId();
  }, []);
  
  async function getProductId() {
    const response = await api.get(`/produtos/${route.params.id}/?populate=*`);
    setProdutos(response.data.data.attributes)
    setPrice(response.data.data.attributes.value);
    // console.log('ola', response.data.data.attributes);
  }
  const handleMore = () => {
    setQtdProd(qtdProd + 1);
  };
  const handleLess = () => {
    setQtdProd(qtdProd - 1);
  };

  return (
    <Styled.Container>
      <Styled.ContentHeader>
        <Styled.Img source={{ uri: `http://192.168.1.39:1337${produtos?.image.data[0].attributes.url}` }} />
        <Styled.ViewIcon>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Styled.Icon source={require('../../../assets/Icons/iconLeft.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Styled.Icon source={require('../../../assets/Icons/options.png')} />
          </TouchableOpacity>
        </Styled.ViewIcon>
      </Styled.ContentHeader>

      <Styled.ViewTitle>
        <Styled.ViewProduct>
          <Styled.Title>{produtos?.name}</Styled.Title>
          <Styled.Sub>{produtos?.categoria.data.attributes.name}</Styled.Sub>
        </Styled.ViewProduct>
        <Styled.ViewClock>
          <Styled.Clock source={require('../../../assets/Icons/clock.png')} />
          <Styled.Sub>{produtos?.prepare} mins</Styled.Sub>
        </Styled.ViewClock>
      </Styled.ViewTitle>

      <Styled.ViewDesc>
        <Styled.TitleDesc>DESCRIÇÃO</Styled.TitleDesc>
        <Styled.Desc>{produtos?.description}</Styled.Desc>
      </Styled.ViewDesc>

      <Styled.Footer>
        <Styled.FooterTitle>QUANTIDADE</Styled.FooterTitle>
        <Styled.ViewQuantity>
          <Styled.Value>{qtdProd}</Styled.Value>
          <TouchableOpacity onPress={handleLess}>
            <Styled.IconLess source={require('../../../assets/Icons/less.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMore}>
            <Styled.IconMore source={require('../../../assets/Icons/more.png')} />
          </TouchableOpacity>
        </Styled.ViewQuantity>
        <Styled.ViewSub>
          <Styled.SubTotal>SUB TOTAL</Styled.SubTotal>
          <Styled.Price>R$ {price * qtdProd}</Styled.Price>
        </Styled.ViewSub>
      </Styled.Footer>

      <Styled.ViewButton>
        <Button
          name="ADICIONAR AO CARRINHO"
          Bck="#2FDBBC"
          Color="#FFF"
          // onPress={handleCart}
        />
      </Styled.ViewButton>

    </Styled.Container>
  );
}
