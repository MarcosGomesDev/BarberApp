import {
  Box,
  Button,
  Icon,
  MenuServiceItemCard,
  Screen,
  Text,
} from '@components';
import React from 'react';
import { Dimensions, Image } from 'react-native';

const data = {
  barberShop: {
    id: '1',
    name: 'Barbearia do Zé',
    image:
      'https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg',
    address: 'Avenida São Sebastião, 357, São Paulo',
    rating: 4.5,
    totalRatings: 100,
  },
  service: {
    id: '1',
    name: 'Corte de Cabelo',
    description: 'Corte de cabelo masculino com tesoura e máquina.',
    image:
      'https://i.pinimg.com/736x/23/7f/21/237f21c6d6356656be665050eaa183da.jpg',
    price: 30,
  },
};

export function ScheduleScreen() {
  return (
    <Screen
      scrollable
      style={{ paddingHorizontal: 0, paddingTop: 0 }}
      scrollEventThrottle={16}
      scrollPointShowBackgroundStatusBar={Dimensions.get('window').height / 9}
      statusBarTranslucent>
      <Box>
        <Image
          source={{
            uri: data.barberShop.image,
          }}
          height={Dimensions.get('window').height / 3.5}
        />
      </Box>

      <Box
        paddingHorizontal="s16"
        gap="s16"
        pb="s14"
        borderBottomColor="gray1"
        borderBottomWidth={1}
        pt="s20"
        justifyContent="center"
        paddingBottom="s32">
        <Text bold preset="paragraphLarge">
          {data.barberShop.name}
        </Text>
        <Box flexDirection="row" alignItems="center" gap="s8">
          <Icon name="pinMap" color="purple" />
          <Text preset="paragraphSmall"> {data.barberShop.address}</Text>
        </Box>
        <Box flexDirection="row" alignItems="center" gap="s8">
          <Icon name="star" color="purple" />
          <Text preset="paragraphSmall">
            {' '}
            {data.barberShop.rating} ({data.barberShop.totalRatings} avaliações)
          </Text>
        </Box>
      </Box>

      <Box paddingHorizontal="s16" pt="s32">
        <Box flexDirection="row" alignItems="center" gap="s12" pb="s20">
          <Button title="Serviços" height={45} />
          <Button title="Informações" preset="outline" height={45} />
        </Box>
        <MenuServiceItemCard data={data.service} />
      </Box>

      <Box height={900} />
    </Screen>
  );
}
