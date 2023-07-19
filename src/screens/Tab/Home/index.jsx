/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Styled from './styles';
import { CardProduct } from '../../../components/CardProduct';
import api from '../../../services/api';

export default function Home() {
  const [restaurant, setRestaurant] = useState([]);

  // http://192.168.1.39:1337/

  async function getRestaurant() {
    const response = await api.get('/restaurantes/?populate=*');
    setRestaurant(response.data.data);
    // console.log(response.data.data[0].attributes.image.data[0].attributes.url);
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <Styled.Container>
      <ScrollView>
        <Styled.Header>
          <Styled.Title>
            Olá,
            <Styled.Text> Mateus</Styled.Text>
            !
          </Styled.Title>
          <Styled.ViewTitle>
            <Styled.TitleHome>Home</Styled.TitleHome>
            <Ionicons name="location-outline" size={28} color="#F99928" />
          </Styled.ViewTitle>
        </Styled.Header>

        <Styled.Body>
          <Styled.Banner source={require('../../../assets/bannerCard.png')} />
        </Styled.Body>

        <Styled.ViewRecommend>

          <Styled.Recommend>RECOMENDADO PARA VOCÊ</Styled.Recommend>

          <Styled.ViewCard>
            <CardProduct />
          </Styled.ViewCard>

        </Styled.ViewRecommend>

        <Styled.Restaurant>RESTAURANTES</Styled.Restaurant>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={restaurant}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Styled.ViewRestaurant>
              <Styled.CardRestaurant>
                <Styled.Img source={{ uri: `http://192.168.1.38:1337${item.attributes.image.data[0].attributes.url}` }} />
              </Styled.CardRestaurant>
            </Styled.ViewRestaurant>
          )}
        />

      </ScrollView>
    </Styled.Container>
  );
}
