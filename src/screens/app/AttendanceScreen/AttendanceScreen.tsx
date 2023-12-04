import { Categories, Menu, Screen } from '@components';
import React from 'react';
import { AttendanceHeader } from './components/AttendanceHeader';
import { AppScreenProps } from '@routes';
import { ScrollView } from 'react-native';
import { AttendanceFooter } from './components/AttendanceFooter';

export function AttendanceScreen({
  navigation,
}: AppScreenProps<'AttendanceScreen'>) {
  function handleCancel() {
    navigation.goBack();
  }

  return (
    <Screen flex={1}>
      <AttendanceHeader onBackPress={handleCancel} />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 8 }}
        showsVerticalScrollIndicator={false}>
        <Categories />
        <Menu />
      </ScrollView>
      <AttendanceFooter />
    </Screen>
  );
}
