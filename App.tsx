import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

const Drawer = createDrawerNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          drawerPosition: 'left',
        }}
        backBehavior='history'
        drawerContent={({ navigation }) => {
          return (
            <SafeAreaView style={{ flex: 1 }}>
              <Text>A custom Drawer</Text>
              <Button onPress={() => navigation.closeDrawer()} title='drawer 닫기' />
            </SafeAreaView>
          );
        }}
      >
        <Drawer.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: '홈', headerLeft: () => <Text>Left</Text> }}
        />
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
