// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Buscar os produtos
// // Salvar um novo produto
// // Remover um produto do carrinho.

// export async function getItem(key) {
//   const cart = await AsyncStorage.getItem(key);
//   return JSON.parse(cart) || []; // retorna uma lista do carrinho ou um array vazio
// }

// export async function saveItem(key, newItem) {
//   const myCart = await getItem(key);

//   const hasItem = myCart.some((item) => item.id === newItem.id);
//   // verifica se existe algo dentro do array
//   if (hasItem) {
//     console.log('Esse produto já foi adicionado');
//     return;
//   }
//   myCart.push(newItem); // add newItem no carrinho

//   await AsyncStorage.setItem(key, JSON.stringify(myCart)); // convertendo lista como string
//   console.log('Adicionado com sucesso');
// }

// export async function removeItem(id) {
//   const products = await getItem('@cart');

//   const myCart = products.filter((item) => (item.id !== id));

//   await AsyncStorage.setItem('@cart', JSON.stringify(myCart));
//   console.log('Produto removido com sucesso');
//   return myCart;
// }

// export async function insertProduct(product) {
//   const myProducts = await getItem('@cart');

//   const itemCart = myProducts.find((item) => item.id === product.id);
//   // verifica se contém este produto no array

//   if (itemCart) {
//     return true;
//   }
//   return false;
// }
