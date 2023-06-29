import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

type HomeScreenProps = {
  navigation: any;
  route: any;
};

type onPressProps = {
  onPress: () => void;
};

const OpenDetailButton = ({ onPress }: onPressProps) => {
  return <Button title='Detail 1 열기' onPress={onPress} />;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton onPress={() => navigation.navigate('Detail', { id: 1 })} />
    </View>
  );
};

export default HomeScreen;
