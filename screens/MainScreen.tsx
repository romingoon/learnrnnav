import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // https://reactnavigation.org/docs/bottom-tab-navigator/
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import NotificationScreen from './NotificationScreen';
import MessageScreen from './MessageScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveBackgroundColor: '#FED7AA',
        tabBarInactiveBackgroundColor: '#F5F5F4',
        tabBarActiveTintColor: '#6366F1',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({ color, size }) => <Icon name='home' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({ color, size }) => <Icon name='search' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({ color, size }) => <Icon name='notifications' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='Message'
        component={MessageScreen}
        options={{
          title: '메시지',
          tabBarIcon: ({ color, size }) => <Icon name='message' color={color} size={size} />,
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
