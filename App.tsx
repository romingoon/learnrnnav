import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import HeaderlessScreen from './screens/HeaderlessScreen';

type HeaderBackButtonPropsWithOnPress = HeaderBackButtonProps & {
  onPress?: () => void;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: '홈',
            // Header 블록에 대한 스타일 지정
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            // Header의 텍스트, 버튼들 색상 지정
            headerTintColor: '#fff',
            // 타이틀 텍스트의 스타일
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={{
            headerBackVisible: false,
            headerLeft: ({ onPress }: HeaderBackButtonPropsWithOnPress) => (
              <TouchableOpacity onPress={onPress}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20 }}>뒤로</Text>
                </View>
              </TouchableOpacity>
            ),
            headerTitle: ({ children }) => (
              <View style={{ alignItems: 'center' }}>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>...</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen name='Headerless' component={HeaderlessScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: number;
  };
  Headerless: undefined;
};

export default App;
