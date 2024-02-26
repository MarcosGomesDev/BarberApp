import { BarberShop } from '@interfaces';
import React from 'react';
import { Dimensions, Image } from 'react-native';
import Place from '../../assets/images/lugar-1.jpg';
import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';

interface BarberShopCardProps {
  data: BarberShop;
}

const widthCard = Dimensions.get('window').width / 2.2;

export function BarberShopCard({ data }: BarberShopCardProps) {
  return (
    <Box
      backgroundColor="gray2"
      borderWidth={1}
      width={widthCard}
      height={300}
      flex={1}
      flexGrow={1}
      borderRadius="s20"
      alignContent="space-between"
      padding="s4"
      pb="s10"
      borderColor="gray1">
      <Box>
        <Box
          backgroundColor="darkPurple"
          zIndex={10}
          position="absolute"
          paddingHorizontal="s10"
          paddingVertical="s4"
          borderRadius="s16"
          flexDirection="row"
          alignItems="center"
          alignContent="center"
          opacity={0.8}
          ml="s4"
          mt="s4">
          <Icon name="star" color="purple" size={14} />
          <Text bold fontWeight="bold" preset="paragraphSmall" ml="s4">
            5.0
          </Text>
        </Box>
        <Image
          source={data.image ? { uri: data.image } : Place}
          borderRadius={18}
          style={{
            backgroundColor: 'transparent',
            width: '100%',
            height: 140,
            zIndex: 1,
          }}
        />
      </Box>
      <Box paddingHorizontal="s8" paddingVertical="s8" flex={1}>
        <Text bold fontWeight="bold">
          {data.name}
        </Text>
        <Text color="gray3" preset="paragraphSmall" style={{ width: '98%' }}>
          {data.address}
        </Text>
      </Box>
      <Button
        preset="default"
        title="Reservar"
        style={{ height: 45, marginHorizontal: 8 }}
      />
    </Box>
  );
}
