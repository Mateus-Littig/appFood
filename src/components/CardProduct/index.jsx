/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import api from '../../services/api';

export function CardProduct() {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);
  const [cart, setCart] = useState([]);

  function handleGoDetail(item) {
    navigation.navigate('DetailProduct', { id: item });
  }

  // const addCart = async (product) => {
  //   try {
  //     const produtosAtt = [...cart, product];
  //     await AsyncStorage.setItem('@cart', JSON.stringify(produtosAtt));
  //     setCart(produtosAtt);
  //     console.log(cart);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  async function getProduto() {
    const response = await api.get('/produtos/?populate=*&filters[recommend][$eq]=true');
    setProdutos(response.data.data);
  }
  useEffect(() => {
    getProduto();
  }, []);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Styled.Card>
          <TouchableOpacity onPress={() => handleGoDetail(item.id)}>
            <Styled.Image source={{ uri: `http://192.168.1.38:1337${item.attributes.image.data[0].attributes.url}` }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Styled.Icon source={require('../../assets/Icons/heart.png')} />
          </TouchableOpacity>
          <Styled.Name>{item.attributes.name}</Styled.Name>
          <Styled.ViewAdd>
            <Styled.Price>
              R$
              {' '}
              {item.attributes.value}
            </Styled.Price>
            <TouchableOpacity>
              <Image source={require('../../assets/Icons/basket.png')} />
            </TouchableOpacity>
          </Styled.ViewAdd>
        </Styled.Card>
      )}
    />
  );
}
