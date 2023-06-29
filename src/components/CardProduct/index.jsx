/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import api from '../../services/api';

export function CardProduct() {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);

  function handleGoDetail( item ) {
    navigation.navigate('DetailProduct', { id: item });
    console.log(item);
  };

  async function getProduto() {
    const response = await api.get(`/produtos/?populate=*&filters[recommend][$eq]=true`);
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
      renderItem={({ item }) => (
        <Styled.Card>
          <TouchableOpacity onPress={() => handleGoDetail(item.id)}>
            <Styled.Image source={{ uri: `http://192.168.0.28:1337${item.attributes.image.data[0].attributes.url}` }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Styled.Icon source={require('../../assets/Icons/heart.png')} />
          </TouchableOpacity>
          <Styled.Name>{item.attributes.name}</Styled.Name>
          <Styled.ViewAdd>
            <Styled.Price>R$ {item.attributes.value}</Styled.Price>
            <TouchableOpacity>
              <Image source={require('../../assets/Icons/basket.png')} />
            </TouchableOpacity>
          </Styled.ViewAdd>
        </Styled.Card>
      )}
    />
  );
}
