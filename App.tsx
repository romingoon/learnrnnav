import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Detail' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type RootStackParamList = {
  Home: {
    name: string;
    component: React.ComponentType<{}>;
  };
  Detail: {
    id: number;
  };
  Search: undefined;
  Notification: undefined;
  Message: undefined;
};

export default App;
