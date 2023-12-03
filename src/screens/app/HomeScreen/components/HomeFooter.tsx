import React from 'react';
import { Box, Button } from '@components';
import { useDialogService } from '@services';

export function HomeFooter() {
  const { showDialog } = useDialogService();

  return (
    <Box paddingVertical="s12">
      <Button title="Novo Cliente" onPress={showDialog} />
    </Box>
  );
}
