/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
import { Header } from '../../../components/Header';
import * as Styled from './styles';

export default function Cart() {
  // const navigation = useNavigation();

  // const handleGoTransfer = () => {
  //   navigation.navigate('Transfer');
  // };
  const [products, setProducts] = useState([]);

  const fetchCartItems = async () => {
    try {
      const cartItemsData = await AsyncStorage.getItem('cartItems');
      if (cartItemsData) {
        const parsedCartItems = JSON.parse(cartItemsData);
        setProducts(cartItemsData);
        console.log(cartItemsData);
        return parsedCartItems;
      }
    } catch (error) {
      return [];
    }
  };
  // const getProduct = async () => {
  //   try {
  //     const cartItems = await AsyncStorage.getItem('@cart');
  //     if (cartItems) {
  //       const produtosSetados = JSON.parse(cartItems);
  //       setProducts(produtosSetados);
  //       console.log(products);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const remCart = async (product) => {
  //   try {
  //     const itemsAtt = cart.filter((p) => p.name !== product.name);
  //     await AsyncStorage.setItem('@cart', JSON.stringify(itemsAtt));
  //     setProducts(itemsAtt);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const addRemFavorite = async (product) => {
  //   const productExist = cart.find((p) => p.name === product.name);
  //   if (productExist) {
  //     remItem(products);
  //   } else {
  //     addItem(products);
  //   }
  // };

  useEffect(() => {
    fetchCartItems();
    // remCart();
    // addRemFavorite();
  }, []);

  return (
    <Styled.Container>
      <Header />

      {products.length === null && (
        <Styled.Text> Você ainda não tem nenhum item no carrinho.</Styled.Text>
      )}

      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 14 }}
        data={products}
        renderItem={() => (
          <Styled.Content>
            {/* <Styled.Img source={{ uri: `http://192.168.1.38:1337${products?.image.data[0].attributes.url}` }} /> */}
          </Styled.Content>
        )}
      />
    </Styled.Container>
  );
}
