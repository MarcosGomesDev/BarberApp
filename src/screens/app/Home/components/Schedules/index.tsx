import React from 'react';
import { Box } from '../../../../../components/Box';
import { Text } from '../../../../../components/Text';
import { CardReservation } from '../../../../../components/CardReservation';

export function Schedules() {
  return (
    <Box pt="s24">
      <Text color="gray3">AGENDAMENTOS</Text>
      <CardReservation />
    </Box>
  );
}
