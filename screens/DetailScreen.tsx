import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { View, Text } from 'react-native';

export type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = () => {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default DetailScreen;
