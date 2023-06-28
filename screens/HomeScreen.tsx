import React from 'react';
import { View, Text, Button } from 'react-native';

type HomeScreenProps = {
  navigation: {
    openDrawer: () => void;
    navigate: (screen: string) => void;
  };
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Drawer 열기' onPress={() => navigation.openDrawer()} />
      <Button title='Setting' onPress={() => navigation.navigate('Setting')} />
    </View>
  );
};

export default HomeScreen;
