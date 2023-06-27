import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { SafeAreaView } from 'react-native-safe-area-context';

export type HeaderlessScreenProps = NativeStackScreenProps<RootStackParamList, 'Headerless'>;

const HeaderlessScreen = ({ navigation }: HeaderlessScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Text>헤더가 없네에~?</Text>
        <Button title='뒤로 가기' onPress={() => navigation.pop()} />
      </View>
    </SafeAreaView>
  );
};

export default HeaderlessScreen;
