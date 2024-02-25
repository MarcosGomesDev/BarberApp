import React from 'react';
import { Box, Button, Icon, Screen, Text, TextInput } from '@components';
import { getCUrrentDate, getCurrentDayName } from '@utils';
import { Schedules } from './components';
import { Reservation, Status } from '@interfaces';

function Header() {
  return (
    <Box height={50} justifyContent="center">
      <Icon size={140} name="logoText" color="white" />
    </Box>
  );
}

const data: Reservation | null = {
  status: Status['CONFIRMED'],
  service: {
    id: '1',
    name: 'Corte de Cabelo',
    price: 45,
    image: 'https://i.imgur.com/5Xg6zQg.png',
  },
  barbershop: {
    id: '1',
    name: 'Barbearia do Zé',
    image:
      'https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg',
  },
  date: new Date('2024-02-09T19:45:00'),
};

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
      <Schedules data={data} />
    </Screen>
  );
}
