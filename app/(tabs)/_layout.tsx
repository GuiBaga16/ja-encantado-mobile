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
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.75)', // Cor translúcida
          borderRadius: 25,
          height: 80,
          shadowColor: 'transparent', // Remover sombra se estiver causando o risco
          elevation: 0, // Desativar a elevação se estiver criando um efeito de sombra
          borderWidth: 0, // Garantir que não haja bordas
        },
      }}
    >
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
