import React, { useEffect, useCallback } from 'react';
import { useNavigation, NavigationProp, useFocusEffect } from '@react-navigation/core';
import { View, Text, Button } from 'react-native';
import { RootStackParamList } from '../types';

const OpenDetailButton = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList>>(); /** <NavigationProp<RootStackParamList>>*/

  return <Button title='Detail 1 열기' onPress={() => navigation.navigate('Detail', { id: 1 })} />;
};

const HomeScreen = () => {
  useFocusEffect(
    useCallback(() => {
      console.log('홈 화면을 보고 있어요');
      return () => {
        console.log('다른 화면으로 넘어갔어요.');
      };
    }, [])
  );
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
};

export default HomeScreen;
