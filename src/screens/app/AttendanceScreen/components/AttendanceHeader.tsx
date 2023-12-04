import { Box, Text } from '@components';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface AttendanceHeaderProps {
  onBackPress: () => void;
}

export function AttendanceHeader({ onBackPress }: AttendanceHeaderProps) {
  return (
    <Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        paddingBottom="s24">
        <Text weight="700" bold preset="headingMedium">
          Cliente
        </Text>
        <TouchableOpacity onPress={onBackPress}>
          <Text weight="600" bold color="gold">
            cancelar pedido
          </Text>
        </TouchableOpacity>
      </Box>
      <Box
        borderWidth={1}
        borderColor="gray2"
        padding="s12"
        borderRadius="s8"
        marginBottom="s12">
        <Text color="gray2">Normal</Text>
      </Box>
    </Box>
  );
}
