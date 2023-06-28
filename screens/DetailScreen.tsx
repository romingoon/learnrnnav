import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { View, Text, StyleSheet, Button } from 'react-native';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({ route, navigation }: DetailScreenProps) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id = {route.params.id}</Text>
      <View style={styles.buttons}>
        <Button title='다음' onPress={() => navigation.push('Detail', { id: route.params.id + 1 })} />
        <Button title='뒤로 가기' onPress={() => navigation.pop()} />
        <Button title='처음으로' onPress={() => navigation.popToTop()} />
      </View>
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
  buttons: {
    flexDirection: 'row',
  },
});

export default DetailScreen;
