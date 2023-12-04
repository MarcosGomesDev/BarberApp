import React from 'react';
import { Categories, Dialog, Menu, Screen } from '@components';
import { HomeHeader } from './components/HomeHeader';
import { ScrollView } from 'react-native';
import { HomeFooter } from './components/HomeFooter';

export function HomeScreen() {
  return (
    <Screen flex={1} style={{ paddingBottom: 0 }}>
      <HomeHeader />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 8 }}
        showsVerticalScrollIndicator={false}>
        <Categories />
        <Menu />
      </ScrollView>
      <HomeFooter />
      <Dialog />
    </Screen>
  );
}
