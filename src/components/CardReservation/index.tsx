import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { Dimensions, Image } from 'react-native';
import { getCurrentMonthName, getOnlyDay, getOnlyHour } from '@utils';
import {
  Status,
  getStatusBackgroundColor,
  getStatusColor,
  translateStatus,
} from './status';

export function CardReservation() {
  return (
    <Box
      mt="s20"
      borderRadius="s8"
      borderColor="gray1"
      borderWidth={1}
      flexDirection="row"
      height={Dimensions.get('window').height / 5.5}
      justifyContent="space-between"
      backgroundColor="gray2"
      padding="s14">
      <Box
        height={'100%'}
        width={'65%'}
        justifyContent="space-between"
        borderRightColor="gray1"
        borderRightWidth={1}
        flex={1}>
        <Box
          backgroundColor={getStatusBackgroundColor(Status['CONFIRMED'])}
          width={95}
          paddingVertical="s4"
          borderRadius="s48"
          alignItems="center">
          <Text
            preset="paragraphSmall"
            bold
            fontWeight="bold"
            color={getStatusColor(Status['CONFIRMED'])}>
            {translateStatus(Status['CONFIRMED'])}
          </Text>
        </Box>
        <Text preset="headingMedium" bold fontWeight="bold">
          Corte de Cabelo
        </Text>
        <Box flexDirection="row" alignItems="center">
          <Image
            source={{
              uri: 'https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg',
            }}
            width={30}
            height={30}
            borderRadius={20}
          />
          <Text preset="paragraphSmall" ml="s10">
            Vintage Barber
          </Text>
        </Box>
      </Box>

      <Box width={'35%'}>
        <Box
          height={'100%'}
          justifyContent="space-evenly"
          alignItems="center"
          ml="s10"
          paddingHorizontal="s16">
          <Text preset="paragraphSmall">
            {getCurrentMonthName(new Date('2024-02-06T09:45:00'))}
          </Text>
          <Text preset="headingLarge">
            {getOnlyDay(new Date('2024-02-06T09:45:00'))}
          </Text>
          <Text preset="paragraphSmall">
            {getOnlyHour(new Date('2024-02-06T09:45:00'))}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
