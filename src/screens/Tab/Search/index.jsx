/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import {
  FlatList, TouchableOpacity, Image, SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { InputSearch } from '../../../components/InputSearch/index';
import api from '../../../services/api';
import { RecentSearch } from '../../../components/RecentSearch';

export default function Search() {
  const navigation = useNavigation();

  function handleGoDetail(item) {
    navigation.navigate('DetailProduct', { id: item });
  }

  const [category, setCategory] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [prodSearch, setProdSearch] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isSelected, setIsSelected] = useState('');

  // const handleButtonPress = async (name, text) => {
  //   if (isSelected === name) {
  //     setIsSelected('');
  //   } else {
  //     setIsSelected(name);
  //   }
  //   const response = await api.get(`/produtos/?populate=*&filters[categoria][name][$eq]=${name}[$or][name][$containsi]=${text}`);
  //   setProdutos(response.data.data);
  //   // console.log(produtos);
  // };
  // let urlPost = `posts?filters[category][id][$eq]=${categoryId}`

  //   urlPost = `${urlPost}&pagination[pageSize]=${limit}`
  //   urlPost = `${urlPost}&pagination[page]=${page}`
  //   urlPost = `${urlPost}&filters[title][$containsi]=${search}`
  //   urlPost = `${urlPost}&populate=thumb`

  async function getProdutos(name, text) {
    if (isSelected === name) {
      setIsSelected('');
    } else {
      setIsSelected(name);
    }
    try {
      const response = await api.get(`/produtos/?populate=*&filters[$or][categoria][name][$eq]=${name}&filters[$or][name][$containsi]=${text}`);
      const produto = response.data.data;
      setProdutos(produto);
      // console.log(response);
    } catch (error) {
      console.log('Erro ao obter os produtos:', error);
    }
  }

  async function getCategoria() {
    try {
      const response = await api.get('/categorias/?populate=*');
      const category = response.data.data;
      setCategory(category);
    } catch (error) {
      console.log('Erro ao obter as categorias:', error);
    }
  }

  useEffect(() => {
    getCategoria();
    getProdutos();
  }, []);

  return (
    <SafeAreaView>

      <Styled.Container>

        <InputSearch
          title="PESQUISAR"
          name="search"
          placeholder="Pesquise o que deseja"
          onChangeText={(text) => {
            setInputValue(text);
            getProdutos(text);
          }}
          value={inputValue}
        />

        <Styled.Body>
          <Styled.Category>CATEGORIAS</Styled.Category>
          <TouchableOpacity>
            <Styled.ViewAll>VER TUDO</Styled.ViewAll>
          </TouchableOpacity>
        </Styled.Body>

        <FlatList
          data={category}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-around' }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Styled.Button
              onPress={() => getProdutos(item?.attributes.name)}
              isSelected={isSelected === item?.attributes.name}
            >
              <Styled.Title>{item?.attributes.name}</Styled.Title>
            </Styled.Button>
          )}
        />

        <FlatList
          numColumns={2}
          columnWrapperStyle={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}
          data={produtos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Styled.Card>
              <TouchableOpacity onPress={() => handleGoDetail(item.id)}>
                <Styled.Image source={{ uri: `http://192.168.1.38:1337${item?.attributes.image.data[0].attributes.url}` }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Styled.Icon source={require('../../../assets/Icons/heart.png')} />
              </TouchableOpacity>
              <Styled.Name>{item?.attributes.name.slice(0, 15)}</Styled.Name>
              <Styled.ViewAdd>
                <Styled.Price>
                  R$
                  {' '}
                  {item?.attributes.value}
                </Styled.Price>
                <TouchableOpacity>
                  <Image source={require('../../../assets/Icons/basket.png')} />
                </TouchableOpacity>
              </Styled.ViewAdd>
            </Styled.Card>
          )}
        />

        {/* <FlatList
          numColumns={2}
          columnWrapperStyle={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}
          data={prodSearch}
          // keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Styled.Card>
              <TouchableOpacity onPress={() => handleGoDetail(item.id)}>
                <Styled.Image source={{ uri: `http://192.168.1.38:1337${item?.attributes.image.data[0].attributes.url}` }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Styled.Icon source={require('../../../assets/Icons/heart.png')} />
              </TouchableOpacity>
              <Styled.Name>{item?.attributes.name.slice(0, 15)}</Styled.Name>
              <Styled.ViewAdd>
                <Styled.Price>
                  R$
                  {' '}
                  {item?.attributes.value}
                </Styled.Price>
                <TouchableOpacity>
                  <Image source={require('../../../assets/Icons/basket.png')} />
                </TouchableOpacity>
              </Styled.ViewAdd>
            </Styled.Card>
          )}
        /> */}

        {/* <Styled.Body>
          <Styled.Category>RECENTES</Styled.Category>
          <TouchableOpacity>
            <Styled.ViewAll>LIMPAR TUDO</Styled.ViewAll>
          </TouchableOpacity>
        </Styled.Body>

        <Styled.Footer>
          <RecentSearch
            name="FastFood"
          />
          <RecentSearch
            name="OutBack"
          />
          <RecentSearch
            name="Habib´s"
          />
          <RecentSearch
            name="Comida Caseira"
          />
          <RecentSearch
            name="Coca-Cola 2L"
          />
        </Styled.Footer> */}

      </Styled.Container>
    </SafeAreaView>
  );
}
