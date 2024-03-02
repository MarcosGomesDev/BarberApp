import { sortDaysOfWeek } from '@utils';
import React from 'react';
import { BarberShopInfoCard } from '..';
import { Box } from '../../Box';
import { Text } from '../../Text';

interface ScheduleProps {
  schedule: BarberShopInfoCard['schedule'];
}

export function Schedule({ schedule }: ScheduleProps) {
  return (
    <Box pt="s12" mb="s20">
      <Box paddingHorizontal="s20">
        {sortDaysOfWeek(schedule).map(day => {
          return (
            <Box
              flexDirection="row"
              justifyContent="space-between"
              mb="s20"
              key={day.dayName}>
              <Text color="gray3" preset="paragraphLarge">
                {day.dayName}
              </Text>
              {day.isClosed ? (
                <Text preset="paragraphLarge">Fechado</Text>
              ) : (
                <Text preset="paragraphLarge">
                  {day.open} às {day.close}
                </Text>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
