import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

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
          options={({ route }) => ({ title: `상세 정보 - ${route.params.id}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: number;
  };
};

export default App;
