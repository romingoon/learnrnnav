import React from 'react';
import { View, Text, Button } from 'react-native';

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Detail 1 열기' onPress={() => navigation.navigate('Detail', { id: 1 })} />
    </View>
  );
};

export default HomeScreen;
