import React from 'react';
import { View, Text, Button } from 'react-native';

type SettingScreenProps = {
  navigation: {
    goBack: () => void;
  };
};

const SettingScreen = ({ navigation }: SettingScreenProps) => {
  return (
    <View>
      <Text>Setting</Text>
      <Button title='뒤로 가기' onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SettingScreen;
