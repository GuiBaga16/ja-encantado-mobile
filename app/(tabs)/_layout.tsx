import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bebidas/listaBebidas"
        options={{
          title: 'Bebidas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'beer' : 'beer-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bebidas/cadastrarBebidas"
        options={{
          title: 'Cadastrar',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'beer' : 'beer-outline'} color={color} />
          ),
        }}  
      />
    </Tabs>
  );
}
