import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

const Drawer = createDrawerNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{ drawerPosition: 'left' }}
        backBehavior='history'
      >
        <Drawer.Screen name='Home' component={HomeScreen} options={{ title: '홈' }} />
        <Drawer.Screen name='Setting' component={SettingScreen} options={{ title: '설정' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Setting: undefined;
};

export default App;
