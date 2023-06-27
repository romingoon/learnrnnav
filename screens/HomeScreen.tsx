import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { View, Button } from 'react-native';

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Button title='Detail 열기' onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default HomeScreen;
