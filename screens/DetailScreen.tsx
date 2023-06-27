import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({ route, navigation }: DetailScreenProps) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id = {route.params.id}</Text>
      <Button title='다음(push)' onPress={() => navigation.push('Detail', { id: route.params.id + 1 })} />
      <Button
        title='다음(navigate)'
        onPress={() => navigation.navigate('Detail', { id: route.params.id + 1 })}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});

export default DetailScreen;
