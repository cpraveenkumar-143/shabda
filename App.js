// App.js — Shabda root
// Navigation setup

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HomeScreen        from './src/screens/HomeScreen';
import LanguageScreen    from './src/screens/LanguageScreen';
import LessonScreen      from './src/screens/LessonScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';

const Stack = createNativeStackNavigator();
const Tab   = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#0F0A1E', borderTopColor: '#2D1657' },
        tabBarActiveTintColor: '#F5C842',
        tabBarInactiveTintColor: '#AFA9EC',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>🌏</Text>, tabBarLabel: 'Learn' }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏆</Text>, tabBarLabel: 'Rankings' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs"     component={TabNavigator} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Lesson"   component={LessonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
