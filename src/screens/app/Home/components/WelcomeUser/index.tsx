import { Box, Text } from '@components';
import { getCUrrentDate, getCurrentDayName } from '@utils';
import React from 'react';

export function WelcomeUser() {
  return (
    <Box mt="s12" paddingHorizontal="s16">
      <Text preset="headingMedium">
        Olá,{' '}
        <Text
          preset="headingMedium"
          bold
          fontWeight="bold"
          style={{ fontFamily: 'Nunito' }}>
          Miguel!
        </Text>
      </Text>
      <Text mt="s14">
        {getCurrentDayName()}, {getCUrrentDate()}
      </Text>
    </Box>
  );
}
