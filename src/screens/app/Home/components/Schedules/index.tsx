import React from 'react';
import { Box } from '../../../../../components/Box';
import { Text } from '../../../../../components/Text';
import { ScheduleCard } from '../../../../../components/ScheduleCard';
import { Reservation } from '@interfaces';
import { TouchableOpacity } from 'react-native';

interface SchedulesProps {
  data: Reservation | null;
}

export function Schedules({ data }: SchedulesProps) {
  if (!data) {
    return null;
  }

  return (
    <Box pt="s24">
      <Text color="gray3">AGENDAMENTOS</Text>
      <TouchableOpacity>
        <ScheduleCard data={data} />
      </TouchableOpacity>
    </Box>
  );
}
