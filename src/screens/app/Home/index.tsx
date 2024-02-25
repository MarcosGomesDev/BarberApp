import React from 'react';
import { Box, Button, Icon, Screen, Text, TextInput } from '@components';
import { getCUrrentDate, getCurrentDayName } from '@utils';
import { Schedules } from './components';

function Header() {
  return (
    <Box height={50} justifyContent="center">
      <Icon size={140} name="logoText" color="white" />
    </Box>
  );
}

export function HomeScreen() {
  return (
    <Screen scrollable isHome HeaderComponent={<Header />}>
      <Box mt="s12">
        <Text preset="headingMedium">
          Olá,{' '}
          <Text
            preset="headingMedium"
            bold
            fontWeight="bold"
            style={{ fontFamily: 'Nunito' }}>
            Miguel!
          </Text>
        </Text>
        <Text mt="s14">
          {getCurrentDayName()}, {getCUrrentDate()}
        </Text>
      </Box>

      <Box
        marginVertical="s20"
        paddingHorizontal="none"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center">
        <TextInput placeholder="Buscar Barbearias" />
        <Button
          ml="s10"
          paddingHorizontal="s14"
          icon
          iconName="search"
          title=""
        />
      </Box>
      <Box height={900}>
        <Schedules />
      </Box>
    </Screen>
  );
}
