import React from 'react';
import { Box, BoxProps, Text } from '@components';

export function HomeHeader() {
  return (
    <Box {...$wrapper}>
      <Box>
        <Text preset="paragraphLarge" color="gray1">
          Bem vindo(a) a
        </Text>
        <Text
          preset="headingMedium"
          bold
          weight="700"
          color="grayBlack"
          mt="s10">
          FAMILIA COSTA
        </Text>
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 's24',
};
