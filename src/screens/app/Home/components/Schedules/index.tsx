import { Box, ScheduleCard, Text } from '@components';
import { Reservation } from '@interfaces';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface SchedulesProps {
  data: Reservation | null;
}

export function Schedules({ data }: SchedulesProps) {
  if (!data) {
    return null;
  }

  return (
    <Box pt="s24" paddingHorizontal="s16">
      <Text color="gray3">AGENDAMENTOS</Text>
      <TouchableOpacity>
        <ScheduleCard data={data} />
      </TouchableOpacity>
    </Box>
  );
}
