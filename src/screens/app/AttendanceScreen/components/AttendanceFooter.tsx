import { Box, Button, Icon, Text } from '@components';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export function AttendanceFooter() {
  return (
    <>
      <Box paddingVertical="s12">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Box alignSelf="flex-start">
            <Text weight="300" color="gray2">
              1x
            </Text>
          </Box>
          <Box flex={1} marginHorizontal="s8" paddingLeft="s8">
            <Text weight="700">Corte Padrão</Text>
            <Text weight="300" color="gray2">
              R$ 30,00
            </Text>
          </Box>
          <Box flexDirection="row" justifyContent="space-between" width={70}>
            <TouchableOpacity>
              <Icon name="plus" size={24} color="gold" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="minus" size={24} color="gold" />
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
      <Box paddingVertical="s12">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Text preset="paragraphLarge" color="gray2" style={{ width: 120 }}>
            Seu carrinho está vazio
          </Text>
          <Button disabled title="Finalizar Cliente" height={40} />
        </Box>
      </Box>
    </>
  );
}
