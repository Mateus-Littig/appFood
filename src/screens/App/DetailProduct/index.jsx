/* eslint-disable no-use-before-define */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { Button } from '../../../components/Button';
import api from '../../../services/api';

export function DetailProduct() {
  const route = useRoute();
  const navigation = useNavigation();

  const [cartItems, setCartItems] = useState([]);
  const [qtdProd, setQtdProd] = useState(1);
  const [price, setPrice] = useState(1);
  const dataKey = '@cartItems';

  async function getProductId() {
    try {
      const response = await api.get(`/produtos/${route.params?.id}/?populate=*`);
      setCartItems(response.data.data.attributes);
      setPrice(response.data.data.attributes.value);
    } catch (error) {
      // console.log('Erro ao buscar produto', error);
    }
  }

  // const addProd = async (item, value, qtd) => {
  //   try {
  //     // Verifica se o produto já existe no armazenamento
  //     const produtoExistente = await AsyncStorage.getItem(dataKey);

  //     if (produtoExistente !== null) {
  //       // Se o produto já existe, atualize o valor e a quantidade
  //       const produtoAtualizado = {
  //         ...JSON.parse(produtoExistente),
  //         value: value,
  //         quantidade: qtd + (JSON.parse(produtoExistente).quantidade || 0),
  //       };

  //       await AsyncStorage.setItem(dataKey, JSON.stringify(produtoAtualizado));
  //     } else {
  //       // Se o produto não existe, crie um novo objeto com o valor e a quantidade
  //       const newProduct = {
  //         ...item,
  //         value,
  //         qtd,
  //       };

  //       await AsyncStorage.setItem(dataKey, JSON.stringify(newProduct));
  //       console.log(newProduct);
  //     }
  //   } catch (error) {
  //     console.log('Erro ao adicionar o produto ao AsyncStorage:', error);
  //   }
  // };

  const handleMore = () => {
    setQtdProd(qtdProd + 1);
  };
  const handleLess = () => {
    if (qtdProd >= 2) {
      setQtdProd(qtdProd - 1);
    }
  };

  const addToCart = async (item) => {
    const items = await AsyncStorage.getItem(dataKey);
    const updatedCart = cartItems ? JSON.parse(items) : [];

    const itemsFormatted = {
      ...updatedCart,
    };

    const existingItem = updatedCart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = { ...item, quantity: 1 };
      updatedCart.push(newItem);
    }

    await AsyncStorage.setItem(dataKey, JSON.stringify(itemsFormatted));
    // console.log(updatedCart);
  };

  // const removeFromCart = async (itemId) => {
  //   const updatedCart = cartItems.filter((item) => item.id !== itemId);
  //   setCartItems(updatedCart);
  //   saveData();
  // };

  useEffect(() => {
    getProductId();
    addToCart();
  }, []);

  return (
    <Styled.Container>
      <Styled.ContentHeader>
        <Styled.Img source={{ uri: `http://192.168.1.38:1337${cartItems?.image?.data[0].attributes.url}` }} />
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
          <Styled.Title>{cartItems?.name}</Styled.Title>
          <Styled.Sub>{cartItems?.categoria?.data.attributes.name}</Styled.Sub>
        </Styled.ViewProduct>
        <Styled.ViewClock>
          <Styled.Clock source={require('../../../assets/Icons/clock.png')} />
          <Styled.Sub>
            {cartItems?.prepare}
            {' '}
            mins
          </Styled.Sub>
        </Styled.ViewClock>
      </Styled.ViewTitle>

      <Styled.ViewDesc>
        <Styled.TitleDesc>DESCRIÇÃO</Styled.TitleDesc>
        <Styled.Desc>{cartItems?.description}</Styled.Desc>
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
          <Styled.Price>
            R$
            {' '}
            {price * qtdProd}
          </Styled.Price>
        </Styled.ViewSub>
      </Styled.Footer>

      <Styled.ViewButton>
        <Button
          name="ADICIONAR AO CARRINHO"
          Bck="#2FDBBC"
          Color="#FFF"
          onPress={() => addToCart()}
        />
      </Styled.ViewButton>

    </Styled.Container>
  );
}
