import {
  BarberShopInfoCard,
  Box,
  Button,
  Icon,
  MenuServiceItemCard,
  Screen,
  Text,
} from '@components';
import React, { useState } from 'react';
import { Dimensions, Image } from 'react-native';
import barbershopinfo from './barbershopinfo.json';
import servicesData from './services.json';

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
  services: servicesData,
};

enum MenuType {
  Service = 'Service',
  Information = 'Information',
}

type MenuTypes = keyof typeof MenuType;

export function ScheduleScreen() {
  const [changeMenu, setChangeMenu] = useState<MenuTypes>('Service');

  function handleMenuChange(menu: MenuTypes) {
    setChangeMenu(menu);
  }

  return (
    <Screen
      scrollable
      style={{ paddingHorizontal: 0, paddingTop: 0 }}
      scrollEventThrottle={16}
      statusBarTranslucent>
      <Box position="relative">
        <Box
          position="absolute"
          zIndex={20}
          mt="s40"
          ml="s20"
          shadowOffset={{ width: 0, height: 9 }}
          shadowOpacity={0.22}
          shadowRadius={10.24}
          elevation={13}
          shadowColor="white">
          <Button
            icon
            iconName="arrowLeft"
            title=""
            preset="default"
            height={40}
            width={45}
          />
        </Box>
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
      <Box paddingHorizontal="s16" pt="s28">
        <Box flexDirection="row" alignItems="center" gap="s12" pb="s20">
          <Button
            title="Serviços"
            height={45}
            onPress={() => handleMenuChange('Service')}
            preset={changeMenu === 'Service' ? 'primary' : 'default'}
          />
          <Button
            title="Informações"
            preset={changeMenu === 'Information' ? 'primary' : 'default'}
            height={45}
            onPress={() => handleMenuChange('Information')}
          />
        </Box>
      </Box>
      {changeMenu === 'Service' ? (
        <Box paddingHorizontal="s16">
          {data.services.map((service, index) => (
            <MenuServiceItemCard key={index} data={service} />
          ))}
        </Box>
      ) : (
        <BarberShopInfoCard data={barbershopinfo} />
      )}
    </Screen>
  );
}
