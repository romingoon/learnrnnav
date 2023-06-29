import * as React from 'react';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const getHeaderTitle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  const nameMap: { [key: string]: string } = {
    Home: '홈',
    Search: '검색',
    Notification: '알림',
    Menu: '메뉴',
  };
  return nameMap[routeName];
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={MainScreen}
          options={({ route }: any) => ({ title: getHeaderTitle(route) })}
        />
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
  Main: undefined;
  Detail: {
    id: number;
  };
  Search: undefined;
  Notification: undefined;
  menu: undefined;
};

export default App;
