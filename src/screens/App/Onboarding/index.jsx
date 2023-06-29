/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Text } from 'react-native';
import * as Styled from './styles';

export default function Onboarding({ navigation }) {
  const slides = [
    {
      key: 1,
      title: <Text>AWESOME{'\n'}<Styled.TextDiff>LOCAL</Styled.TextDiff> FOOD</Text>,
      text: 'Discover delicious food from the amazing\nrestaurants near you',
      image: require('../../../assets/intro1.png'),
    },
    {
      key: 2,
      title: <Text>DELIVERED AT{'\n'}YOUR<Styled.TextDiff> DOORSTEP</Styled.TextDiff></Text>,
      text: 'Fresh and delicious local food delivered from\nthe restaurants to your doorstep',
      image: require('../../../assets/intro2.png'),
    },
    {
      key: 3,
      title: <Text>GRAB THE{'\n'}BEST<Styled.TextDiff> DEALS</Styled.TextDiff> AROUND</Text>,
      text: 'Grab the best deals and discounts around and\nsave on your every order',
      image: require('../../../assets/intro3.png'),
    },
  ];

  function Carousel({ item }) {
    return (
      <Styled.Container>
        <Styled.Bck source={item.image} />
        <Styled.ViewSlide>
          <Styled.ViewText>
            <Styled.Title>{item.title}</Styled.Title>
            <Styled.TextSub>{item.text}</Styled.TextSub>
          </Styled.ViewText>
        </Styled.ViewSlide>
      </Styled.Container>
    );
  }

  return (
    <AppIntroSlider
      renderItem={Carousel}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#fff',
        width: 26,
        bottom: 40,
      }}
      dotStyle={{
        backgroundColor: '#A9A9A9',
        bottom: 40,
      }}
      renderNextButton={() => (
        <Styled.ViewTouch>
          <Styled.TextButton>NEXT</Styled.TextButton>
        </Styled.ViewTouch>
      )}
      renderDoneButton={() => (
        <Styled.ViewTouch>
          <Styled.TextButton>GET STARTED</Styled.TextButton>
        </Styled.ViewTouch>
      )}
      onDone={() => navigation.navigate('GetStarted')}
    />
  );
}
