/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Tab/Home';
import Search from '../screens/Tab/Search';
import Cart from '../screens/Tab/Cart';
import Favorites from '../screens/Tab/Favorites';
import User from '../screens/Tab/User';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarActiveTintColor: '#333',
        tabBarStyle: {
          width: '100%',
          height: 70,
          backgroundColor: '#F2F2F2',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name="home"
                  size={30}
                  color={focused ? '#67E5CE' : '#67E5CE'}
                />
              ) : (
                <Ionicons
                  name="home-outline"
                  size={30}
                  color={focused ? '#000' : '#828282'}
                />
              )}
            </View>
          ),
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name="search"
                  size={30}
                  color={focused ? '#67E5CE' : '#67E5CE'}
                />
              ) : (
                <Ionicons
                  name="search-outline"
                  size={30}
                  color={focused ? '#000' : '#828282'}
                />
              )}
            </View>
          ),
        }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name="cart"
                  size={30}
                  color={focused ? '#67E5CE' : '#67E5CE'}
                />
              ) : (
                <Ionicons
                  name="cart-outline"
                  size={30}
                  color={focused ? '#000' : '#828282'}
                />
              )}
            </View>
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name="heart-sharp"
                  size={30}
                  color={focused ? '#67E5CE' : '#67E5CE'}
                />
              ) : (
                <Ionicons
                  name="heart-outline"
                  size={30}
                  color={focused ? '#000' : '#828282'}
                />
              )}
            </View>
          ),
        }}
      />
      <Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name="person"
                  size={26}
                  color={focused ? '#67E5CE' : '#67E5CE'}
                />
              ) : (
                <Ionicons
                  name="person-outline"
                  size={26}
                  color={focused ? '#000' : '#828282'}
                />
              )}
            </View>
          ),
        }}
      />
    </Navigator>
  );
}
