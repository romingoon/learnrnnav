import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import NotificationScreen from './NotificationScreen';
import MessageScreen from './MessageScreen';

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: '#6366F1',
        },
        tabBarActiveTintColor: '#6366F1',
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color }) => <Icon name='home' color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({ color }) => <Icon name='search' color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({ color }) => <Icon name='notifications' color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name='Message'
        component={MessageScreen}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({ color }) => <Icon name='message' color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Message: undefined;
};

export default App;
