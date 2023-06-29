import * as React from 'react';
import { useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import NotificationScreen from './NotificationScreen';
import MenuScreen from './MenuScreen';

type IconProps = {
  focused: boolean;
  color: string;
  size?: number;
};

const Tab = createMaterialBottomTabNavigator<RootStackParamList>();

const App = ({ route }: any) => {
  useEffect(() => {
    console.log(route.name);
  }, [route.name]);

  return (
    <Tab.Navigator
      shifting={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }: IconProps) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'menu' : 'menu-outline';
          }

          return <Ionicons name={iconName as string} color={color} size={24} />;
        },
      })}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarColor: 'gray',
        }}
      />
      <Tab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarColor: 'green',
          tabBarBadge: 30,
        }}
      />
      <Tab.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          tabBarLabel: '메뉴',
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Menu: undefined;
};

export default App;
