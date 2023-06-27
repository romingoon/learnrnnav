import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { View, Button } from 'react-native';

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  useEffect(() => {
    navigation.setOptions({
      title: '홈',
    });
  }, [navigation]);

  return (
    <View>
      <Button title='Detail 1 열기' onPress={() => navigation.push('Detail', { id: 1 })} />
      <Button title='Detail 2 열기' onPress={() => navigation.push('Detail', { id: 2 })} />
      <Button title='Detail 3 열기' onPress={() => navigation.push('Detail', { id: 3 })} />

      <Button title='Headerless 열기' onPress={() => navigation.push('Headerless')} />
    </View>
  );
};

export default HomeScreen;
