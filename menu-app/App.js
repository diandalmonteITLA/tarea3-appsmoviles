import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/screens/HomeScreen';
import SumScreen from './src/screens/SumScreen';
import WordsScreen from './src/screens/WordsScreen';
import MultiplicationScreen from './src/screens/MultiplicationScreen';
import VideoScreen from './src/screens/VideoScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0f172a',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: '600',
          },
          drawerActiveTintColor: '#2563eb',
          drawerInactiveTintColor: '#475569',
        }}
      >
        <Drawer.Screen
          name="Inicio"
          component={HomeScreen}
          options={{ title: 'Datos Personales' }}
        />
        <Drawer.Screen
          name="Sumadora"
          component={SumScreen}
          options={{ title: 'Sumadora' }}
        />
        <Drawer.Screen
          name="Traductor"
          component={WordsScreen}
          options={{ title: 'Número a Letras' }}
        />
        <Drawer.Screen
          name="Tabla"
          component={MultiplicationScreen}
          options={{ title: 'Tabla de Multiplicar' }}
        />
        <Drawer.Screen
          name="Experiencia"
          component={VideoScreen}
          options={{ title: 'Experiencia Personal' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}