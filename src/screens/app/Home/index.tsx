import {
  BarberShopCard,
  Box,
  Button,
  Icon,
  Screen,
  Text,
  TextInput,
} from '@components';
import { BarberShop, Reservation, Status } from '@interfaces';
import { getCUrrentDate, getCurrentDayName } from '@utils';
import React from 'react';
import { FlatList } from 'react-native';
import { Schedules } from './components';

function Header() {
  return (
    <Box height={50} justifyContent="center">
      <Icon size={140} name="logoText" color="white" />
    </Box>
  );
}

const list: BarberShop[] = [
  {
    id: '1',
    name: 'Barbearia do Zé',
    image:
      'https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg',
    address: 'Avenida São Sebastião, 357, São Paulo',
  },
  {
    id: '2',
    name: 'Barbearia do Zé',
    image:
      'https://classic.exame.com/wp-content/uploads/2020/05/whatsapp-image-2020-05-12-at-10.47.30.jpg?quality=70&strip=info&w=1024',
    address: 'Rua Castro Alves, 331, São Paulo',
  },
  {
    id: '3',
    name: 'Barbearia do Zé',
    image:
      'https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg',
    address: 'Rua Sete de Setembro, 428, São Paulo',
  },
];

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
    <Screen
      scrollable
      isHome
      HeaderComponent={<Header />}
      style={{ paddingHorizontal: 0 }}>
      <Box mt="s12" paddingHorizontal="s16">
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
        paddingHorizontal="s16"
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

      <Box paddingHorizontal="s16">
        <Schedules data={data} />
      </Box>

      <Box marginVertical="s32" paddingLeft="s16" pt="s24">
        <Text color="gray3">RECOMENDADOS</Text>

        <FlatList
          data={list}
          horizontal
          keyExtractor={item => item.id}
          style={{ marginTop: 20 }}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Box width={25} />}
          renderItem={({ item }) => <BarberShopCard data={item} />}
        />
      </Box>
    </Screen>
  );
}
