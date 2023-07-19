/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Image } from 'react-native';
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

  const handleButtonPress = async (name) => {
    if (isSelected === name) {
      setIsSelected('');
    } else {
      setIsSelected(name);
    }
    const response = await api.get(`/produtos/?populate=*&filters[categoria][name][$eq]=${name}`);
    setProdutos(response.data.data);
    console.log(produtos);
  };

  async function getProdutos() {
    try {
      const response = await api.get(`/produtos/?populate=*&filters[name][$eq]=${inputValue}`);
      const produto = response.data.data;
      setProdSearch(produto);
      console.log(produto);
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
    <Styled.Container>

      <InputSearch
        title="PESQUISAR"
        name="search"
        placeholder="Pesquise o que deseja"
        onChangeText={setInputValue}
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
            onPress={() => handleButtonPress(item?.attributes.name)}
            isSelected={isSelected === item?.attributes.name}
          >
            <Styled.Title>{item?.attributes.name}</Styled.Title>
          </Styled.Button>
        )}
      />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
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
            <Styled.Name>{item?.attributes.name}</Styled.Name>
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

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
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
            <Styled.Name>{item?.attributes.name}</Styled.Name>
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
  );
}
