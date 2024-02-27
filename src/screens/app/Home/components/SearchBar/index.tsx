import { Box, Button, TextInput } from '@components';
import React from 'react';

export function SearchBar() {
  return (
    <Box
      marginVertical="s20"
      paddingHorizontal="s16"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center">
      <TextInput placeholder="Buscar Barbearias" />
      <Button
        ml="s10"
        paddingHorizontal="s14"
        icon
        iconName="search"
        title=""
      />
    </Box>
  );
}
