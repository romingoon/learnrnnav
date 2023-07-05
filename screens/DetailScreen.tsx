import React, { useEffect } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRoute, NavigationProp } from '@react-navigation/core';

type DetailScreenProps = NavigationProp<RootStackParamList, 'Detail'>;

const IDText = () => {
  const route = useRoute<any>();

  return <Text style={styles.text}>id = {route.params.id}</Text>;
};

const DetailScreen = ({ route, navigation }: any) => {
  useEffect(() => {
    navigation.setOptions({
      title: `Detail ${route.params.id}`,
    });
  }, [route.params.id]);

  return (
    <View style={styles.block}>
      <IDText />
      <View style={styles.buttons}>
        <Button title='다음' onPress={() => navigation.navigate('Detail', { id: route.params.id + 1 })} />
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
